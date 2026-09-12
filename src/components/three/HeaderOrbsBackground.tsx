import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { cn } from '@/lib/utils'

const VERTEX_SHADER = /* glsl */ `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const FRAGMENT_SHADER = /* glsl */ `
  uniform vec3 uColor;
  uniform float uOpacity;
  varying vec2 vUv;

  void main() {
    float dist = length(vUv - 0.5) * 2.0;
    float alpha = smoothstep(1.0, 0.0, dist);
    alpha = pow(alpha, 2.2) * uOpacity;
    gl_FragColor = vec4(uColor, alpha);
  }
`

type Orb = {
  mesh: THREE.Mesh
  baseX: number
  baseY: number
  baseZ: number
  radiusX: number
  radiusY: number
  speed: number
  phase: number
}

const ORB_COLORS = [0x9412ff, 0xaa3bff, 0x6408b3, 0x4fb8ff, 0x7dd8ff]

interface HeaderOrbsBackgroundProps {
  className?: string
}

export function HeaderOrbsBackground({ className }: HeaderOrbsBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100)
    camera.position.z = 10

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    const orbs: Orb[] = ORB_COLORS.map((color, index) => {
      const size = 2.5 + Math.random() * 15
      const geometry = new THREE.PlaneGeometry(size, size)
      const material = new THREE.ShaderMaterial({
        vertexShader: VERTEX_SHADER,
        fragmentShader: FRAGMENT_SHADER,
        uniforms: {
          uColor: { value: new THREE.Color(color) },
          uOpacity: { value: 0.35 + Math.random() * 0.25 },
        },
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })

      const mesh = new THREE.Mesh(geometry, material)
      scene.add(mesh)

      return {
        mesh,
        baseX: (Math.random() - 0.05) * 6 *3,
        baseY: (Math.random() - 0.25) * 3 * 2,
        baseZ: -index * 0.6,
        radiusX: 1.5 + Math.random() * 2,
        radiusY: 1 + Math.random() * 1.5,
        speed: 0.15 + Math.random() * 0.15,
        phase: Math.random() * Math.PI * 2,
      }
    })

    const resize = () => {
      const width = container.clientWidth
      const height = container.clientHeight
      if (width === 0 || height === 0) return
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }
    resize()

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(container)

    const pointer = { x: 0, y: 0 }
    const targetPointer = { x: 0, y: 0 }

    const handlePointerMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect()
      targetPointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      targetPointer.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1)
    }

    const handlePointerLeave = () => {
      targetPointer.x = 0
      targetPointer.y = 0
    }

    if (!prefersReducedMotion) {
      window.addEventListener('pointermove', handlePointerMove)
      window.addEventListener('pointerleave', handlePointerLeave)
    }

    let frameId = 0
    const clock = new THREE.Timer()

    const animate = () => {
      clock.update()
      const elapsed = clock.getElapsed()

      pointer.x += (targetPointer.x - pointer.x) * 0.05
      pointer.y += (targetPointer.y - pointer.y) * 0.05

      for (const orb of orbs) {
        const t = prefersReducedMotion ? 0 : elapsed * orb.speed + orb.phase
        const depthFactor = 1 + Math.abs(orb.baseZ) * 0.4
        orb.mesh.position.x =
          orb.baseX + Math.sin(t) * orb.radiusX + pointer.x * depthFactor
        orb.mesh.position.y =
          orb.baseY + Math.cos(t * 0.8) * orb.radiusY + pointer.y * depthFactor
        orb.mesh.position.z = orb.baseZ
      }

      renderer.render(scene, camera)
      frameId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(frameId)
      resizeObserver.disconnect()
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerleave', handlePointerLeave)
      for (const orb of orbs) {
        orb.mesh.geometry.dispose()
        ;(orb.mesh.material as THREE.Material).dispose()
      }
      renderer.dispose()
      container.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={cn('pointer-events-none overflow-hidden', className)}
    />
  )
}
