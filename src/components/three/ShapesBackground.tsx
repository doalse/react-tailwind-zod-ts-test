import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { cn } from '@/lib/utils'

type ShapeKind = 'circle' | 'square' | 'triangle'

type Shape = {
  mesh: THREE.Mesh
  baseX: number
  baseY: number
  baseZ: number
  radiusX: number
  radiusY: number
  speed: number
  phase: number
  spin: number
}

const SHAPE_COLORS = [0x9412ff, 0xaa3bff, 0x6408b3, 0x4fb8ff, 0x7dd8ff]
const SHAPE_KINDS: ShapeKind[] = ['circle', 'square', 'triangle']

function createGeometry(kind: ShapeKind, size: number) {
  switch (kind) {
    case 'circle':
      return new THREE.CircleGeometry(size / 2, 32)
    case 'square':
      return new THREE.PlaneGeometry(size, size)
    case 'triangle':
      return new THREE.CircleGeometry(size / 2, 3)
  }
}

interface ShapesBackgroundProps {
  className?: string
  count?: number
}

export function ShapesBackground({ className, count = 18 }: ShapesBackgroundProps) {
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

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    const resize = () => {
      const width = container.clientWidth
      const height = container.clientHeight
      if (width === 0 || height === 0) return
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }
    resize()

    // Spread shapes across the whole visible frustum at z = 0, not a fixed box,
    // so they cover wide/short sections edge-to-edge instead of clumping centrally.
    const frustumHeight =
      2 * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2) * camera.position.z
    const frustumWidth = frustumHeight * camera.aspect

    const shapes: Shape[] = Array.from({ length: count }, (_, index) => {
      const kind = SHAPE_KINDS[index % SHAPE_KINDS.length]
      const size = 1 + Math.random() * 4
      const color = SHAPE_COLORS[index % SHAPE_COLORS.length]

      const geometry = createGeometry(kind, size)
      const material = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.12 + Math.random() * 0.18,
        side: THREE.DoubleSide,
        depthWrite: false,
      })

      const mesh = new THREE.Mesh(geometry, material)
      mesh.rotation.z = Math.random() * Math.PI * 2
      scene.add(mesh)

      return {
        mesh,
        baseX: (Math.random() - 0.5) * frustumWidth,
        baseY: (Math.random() - 0.5) * frustumHeight,
        baseZ: -Math.random() * 4,
        radiusX: 1 + Math.random() * 2.5,
        radiusY: 1 + Math.random() * 2,
        speed: 0.1 + Math.random() * 0.2,
        phase: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.4,
      }
    })

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(container)

    let frameId = 0
    const clock = new THREE.Timer()

    const animate = () => {
      clock.update()
      const elapsed = prefersReducedMotion ? 0 : clock.getElapsed()

      for (const shape of shapes) {
        const t = elapsed * shape.speed + shape.phase
        shape.mesh.position.x = shape.baseX + Math.sin(t) * shape.radiusX
        shape.mesh.position.y = shape.baseY + Math.cos(t * 0.8) * shape.radiusY
        shape.mesh.position.z = shape.baseZ
        shape.mesh.rotation.z += shape.spin * 0.01
      }

      renderer.render(scene, camera)
      frameId = requestAnimationFrame(animate)
    }

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!frameId) animate()
        } else {
          cancelAnimationFrame(frameId)
          frameId = 0
        }
      },
      { threshold: 0 },
    )
    visibilityObserver.observe(container)

    return () => {
      cancelAnimationFrame(frameId)
      visibilityObserver.disconnect()
      resizeObserver.disconnect()
      for (const shape of shapes) {
        shape.mesh.geometry.dispose()
        ;(shape.mesh.material as THREE.Material).dispose()
      }
      renderer.dispose()
      container.removeChild(renderer.domElement)
    }
  }, [count])

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={cn('pointer-events-none overflow-hidden', className)}
    />
  )
}
