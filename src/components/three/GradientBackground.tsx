import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { cn } from '@/lib/utils'

const VERTEX_SHADER = /* glsl */ `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`

const FRAGMENT_SHADER = /* glsl */ `
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    vec2 uv = vUv;

    float angle = 0.6 + sin(uTime * 0.12) * 0.35;
    vec2 dir = vec2(cos(angle), sin(angle));

    float gradient = dot(uv - 0.5, dir) + 0.5;
    gradient += sin(uv.x * 3.0 + uTime * 1.18) * 0.06;
    gradient += cos(uv.y * 2.5 - uTime * 1.14) * 0.06;
    gradient = clamp(gradient, 0.0, 1.0);

    vec3 color = mix(uColorA, uColorB, smoothstep(0.0, 1.0, gradient));
    gl_FragColor = vec4(color, 1.0);
  }
`

interface GradientBackgroundProps {
  className?: string
  colorA?: string
  colorB?: string
}

export function GradientBackground({
  className,
  colorA = '#FFFFFF',
  colorB = '#8c8ce6',
}: GradientBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const scene = new THREE.Scene()
    const camera = new THREE.Camera()

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    const geometry = new THREE.PlaneGeometry(2, 2)
    const material = new THREE.ShaderMaterial({
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      uniforms: {
        uColorA: { value: new THREE.Color(colorA) },
        uColorB: { value: new THREE.Color(colorB) },
        uTime: { value: 0 },
      },
      depthWrite: false,
      depthTest: false,
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    const resize = () => {
      const width = container.clientWidth
      const height = container.clientHeight
      if (width === 0 || height === 0) return
      renderer.setSize(width, height)
    }
    resize()

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(container)

    let frameId = 0
    const clock = new THREE.Timer()

    const animate = () => {
      clock.update()
      if (!prefersReducedMotion) {
        material.uniforms.uTime.value = clock.getElapsed()
      }

      renderer.render(scene, camera)
      frameId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(frameId)
      resizeObserver.disconnect()
      geometry.dispose()
      material.dispose()
      renderer.dispose()
      container.removeChild(renderer.domElement)
    }
  }, [colorA, colorB])

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={cn('pointer-events-none overflow-hidden', className)}
    />
  )
}
