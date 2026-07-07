

import { useRef, useEffect } from 'react'
import { useReducedMotionContext } from '@/components/providers/ReducedMotionProvider'

interface MeshNode {
  x: number
  y: number
  vx: number
  vy: number
}

const NODE_COUNT = 90
const CONNECTION_THRESHOLD = 150
const MOUSE_ATTRACTION_RADIUS = 200

export function MeshCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { prefersReducedMotion } = useReducedMotionContext()
  const nodesRef = useRef<MeshNode[]>([])
  const mouseRef = useRef<{ x: number; y: number } | null>(null)
  const rafRef = useRef<number | null>(null)
  const lastFrameRef = useRef<number>(0)

  useEffect(() => {
    if (prefersReducedMotion) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = canvas.offsetWidth
    let height = canvas.offsetHeight
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    function resize() {
      if (!canvas) return
      width = canvas.offsetWidth
      height = canvas.offsetHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx?.scale(dpr, dpr)
    }

    function initNodes() {
      nodesRef.current = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      }))
    }

    resize()
    initNodes()

    function handleMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }

    function handleMouseLeave() {
      mouseRef.current = null
    }

    function handleResize() {
      resize()
    }

    window.addEventListener('resize', handleResize)
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    const FRAME_BUDGET = 1000 / 30 // 30fps target

    function animate(timestamp: number) {
      if (timestamp - lastFrameRef.current < FRAME_BUDGET) {
        rafRef.current = requestAnimationFrame(animate)
        return
      }
      lastFrameRef.current = timestamp

      if (!ctx) return
      ctx.clearRect(0, 0, width, height)

      const nodes = nodesRef.current
      const mouse = mouseRef.current

      // Update positions
      for (const node of nodes) {
        node.x += node.vx
        node.y += node.vy

        if (node.x < 0 || node.x > width) node.vx *= -1
        if (node.y < 0 || node.y > height) node.vy *= -1

        node.x = Math.max(0, Math.min(width, node.x))
        node.y = Math.max(0, Math.min(height, node.y))

        // Gentle mouse attraction for nearest nodes
        if (mouse) {
          const dx = mouse.x - node.x
          const dy = mouse.y - node.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MOUSE_ATTRACTION_RADIUS && dist > 0) {
            const force = (1 - dist / MOUSE_ATTRACTION_RADIUS) * 0.02
            node.vx += (dx / dist) * force
            node.vy += (dy / dist) * force
          }
        }

        // Velocity damping to prevent runaway speeds
        node.vx *= 0.99
        node.vy *= 0.99
      }

      // Draw connections
      ctx.lineWidth = 1
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECTION_THRESHOLD) {
            const opacity = (1 - dist / CONNECTION_THRESHOLD) * 0.15
            ctx.strokeStyle = `rgba(201, 168, 76, ${opacity})`
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        ctx.fillStyle = 'rgba(201, 168, 76, 0.4)'
        ctx.beginPath()
        ctx.arc(node.x, node.y, 1.5, 0, Math.PI * 2)
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', handleResize)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [prefersReducedMotion])

  if (prefersReducedMotion) {
    return (
      <div
        className="absolute inset-0 opacity-30"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, rgba(201,168,76,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(45,212,191,0.06) 0%, transparent 50%)',
        }}
      />
    )
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  )
}
