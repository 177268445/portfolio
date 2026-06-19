import { useEffect, useRef } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

function createParticles() {
  const particles = []
  const step = 0.012

  for (let y = -0.5; y <= 0.5; y += step) {
    for (let x = -0.5; x <= 0.5; x += step) {
      const jitterX = x + (Math.random() - 0.5) * step * 0.7
      const jitterY = y + (Math.random() - 0.5) * step * 0.7
      const distance = Math.hypot(jitterX, jitterY)
      if (distance > 0.5 || Math.random() < 0.05) continue

      const edge = Math.max(0, 1 - distance / 0.5)
      const highlight = Math.max(0, 1 - Math.hypot(jitterX + 0.18, jitterY + 0.24) / 0.34)
      const rim = Math.max(0, (distance - 0.36) / 0.14)
      const teal = Math.max(0, 1 - Math.hypot(jitterX - 0.22, jitterY + 0.04) / 0.34)
      const r = Math.round(14 + highlight * 180 + teal * 18 + rim * 26)
      const g = Math.round(28 + highlight * 185 + teal * 145 + rim * 80)
      const b = Math.round(38 + highlight * 205 + teal * 150 + rim * 135)

      particles.push({
        nx: jitterX,
        ny: jitterY,
        x: 0,
        y: 0,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        scatter: 0,
        seed: Math.random() * Math.PI * 2,
        drift: 0.22 + Math.random() * 0.68,
        size: 0.22 + Math.random() * 0.62,
        opacity: 0.24 + edge * 0.56 + highlight * 0.18,
        color: `rgba(${r}, ${g}, ${b}, 1)`,
      })
    }
  }

  return particles
}

function HeroParticles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const hero = canvas.closest('.hero')
    const ctx = canvas.getContext('2d')
    const reducedMotion = prefersReducedMotion()
    const pointer = { x: -9999, y: -9999, active: false, moved: false }
    let particles = createParticles()
    let width = 0
    let height = 0
    let dpr = 1
    let animationFrame
    let tick = 0

    const resize = () => {
      const rect = hero.getBoundingClientRect()
      width = rect.width
      height = rect.height
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const scale = Math.min(width, height) * (width < 760 ? 0.72 : 0.82)
      const originX = width < 760 ? width * 0.72 : width * 0.78
      const originY = width < 760 ? height * 0.4 : height * 0.42
      particles = particles.map((particle) => ({
        ...particle,
        baseX: originX + particle.nx * scale,
        baseY: originY + particle.ny * scale,
        x: particle.x || originX + particle.nx * scale + (Math.random() - 0.5) * 120,
        y: particle.y || originY + particle.ny * scale + (Math.random() - 0.5) * 120,
      }))
    }

    const move = (event) => {
      const rect = hero.getBoundingClientRect()
      pointer.x = event.clientX - rect.left
      pointer.y = event.clientY - rect.top
      pointer.active = true
      pointer.moved = true
    }

    const leave = () => {
      pointer.active = false
    }

    const drawStars = () => {
      ctx.save()
      ctx.globalCompositeOperation = 'lighter'
      for (let i = 0; i < 48; i += 1) {
        const x = (Math.sin(i * 91.17) * 0.5 + 0.5) * width
        const y = (Math.cos(i * 37.31) * 0.5 + 0.5) * height
        const pulse = 0.45 + Math.sin(tick * 0.02 + i) * 0.25
        ctx.fillStyle = `rgba(172, 211, 232, ${0.06 + pulse * 0.1})`
        ctx.beginPath()
        ctx.arc(x, y, 0.5 + (i % 4) * 0.22, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.restore()
    }

    const render = () => {
      tick += 1
      ctx.clearRect(0, 0, width, height)
      drawStars()

      ctx.save()
      ctx.globalCompositeOperation = 'lighter'

      for (const particle of particles) {
        const dx = pointer.x - particle.baseX
        const dy = pointer.y - particle.baseY
        const distance = Math.hypot(dx, dy)
        const radius = width < 760 ? 118 : 165
        const influence = pointer.active && distance < radius ? (1 - distance / radius) : 0
        const wave = Math.sin(tick * 0.024 + particle.seed) * particle.drift

        if (influence > 0) {
          particle.scatter = Math.min(1, particle.scatter + influence * 0.065)
        } else if (!pointer.active) {
          particle.scatter *= 0.985
        } else {
          particle.scatter *= 0.994
        }

        const normalizedX = distance ? -dx / distance : 0
        const normalizedY = distance ? -dy / distance : 0
        const pull = influence * 0.22
        const repel = influence * 58
        const disperse = particle.scatter
        const targetX = particle.baseX + wave * 2 + pointer.x * pull + normalizedX * repel * disperse
        const targetY = particle.baseY + Math.cos(tick * 0.018 + particle.seed) * 2 + pointer.y * pull + normalizedY * repel * disperse

        particle.vx += (targetX - particle.x) * (reducedMotion ? 0.18 : 0.055)
        particle.vy += (targetY - particle.y) * (reducedMotion ? 0.18 : 0.055)
        particle.vx *= 0.78
        particle.vy *= 0.78
        particle.x += particle.vx
        particle.y += particle.vy

        const alpha = Math.max(0.12, particle.opacity * (1 - disperse * 0.68))
        const size = particle.size * (1 + influence * 2.8 + disperse * 1.2)
        ctx.fillStyle = particle.color.replace(/[\d.]+\)$/g, `${alpha})`)
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.restore()

      if (!reducedMotion) {
        animationFrame = window.requestAnimationFrame(render)
      }
    }

    resize()
    render()
    window.addEventListener('resize', resize)
    hero.addEventListener('pointermove', move)
    hero.addEventListener('pointerleave', leave)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resize)
      hero.removeEventListener('pointermove', move)
      hero.removeEventListener('pointerleave', leave)
    }
  }, [])

  return <canvas ref={canvasRef} className="hero-particles" aria-hidden="true" />
}

export default HeroParticles
