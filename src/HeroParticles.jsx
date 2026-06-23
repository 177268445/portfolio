import { useEffect, useRef } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

function createParticles() {
  const particles = []
  const step = 0.011

  for (let y = -0.5; y <= 0.5; y += step) {
    for (let x = -0.5; x <= 0.5; x += step) {
      const jitterX = x + (Math.random() - 0.5) * step * 0.7
      const jitterY = y + (Math.random() - 0.5) * step * 0.7
      const distance = Math.hypot(jitterX, jitterY)
      if (distance > 0.5 || Math.random() < 0.03) continue

      const edge = Math.max(0, 1 - distance / 0.5)
      const highlight = Math.max(0, 1 - Math.hypot(jitterX + 0.2, jitterY + 0.22) / 0.38)
      const rim = Math.max(0, (distance - 0.34) / 0.16)
      const teal = Math.max(0, 1 - Math.hypot(jitterX - 0.2, jitterY + 0.02) / 0.38)
      const cobalt = Math.max(0, 1 - Math.hypot(jitterX - 0.28, jitterY - 0.12) / 0.26)
      const silver = Math.max(0, 1 - Math.hypot(jitterX + 0.02, jitterY - 0.08) / 0.46)
      const sparkle = Math.random() > 0.985 ? 1 : 0
      const colorShift = Math.random()
      const r = Math.round(16 + highlight * 190 + silver * 88 + cobalt * 18 + rim * 46 + sparkle * 70)
      const g = Math.round(34 + highlight * 190 + teal * 150 + silver * 96 + cobalt * 54 + rim * 86 + sparkle * 62)
      const b = Math.round(48 + highlight * 205 + teal * 120 + silver * 118 + cobalt * 205 + rim * 140 + sparkle * 54)
      const tint =
        colorShift > 0.78
          ? [Math.min(255, r + 18), Math.min(255, g + 28), Math.min(255, b + 46)]
          : colorShift > 0.52
            ? [Math.max(0, r - 8), Math.min(255, g + 34), Math.min(255, b + 24)]
            : [r, g, b]

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
        size: 0.3 + Math.random() * 0.72 + sparkle * 0.18,
        opacity: 0.4 + edge * 0.64 + highlight * 0.28 + rim * 0.18 + sparkle * 0.18,
        color: `rgba(${tint[0]}, ${tint[1]}, ${tint[2]}, 1)`,
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
    let sphere = { x: 0, y: 0, radius: 0 }

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
      const scale = Math.min(width, height) * (width < 760 ? 0.84 : 0.98)
      const originX = width < 760 ? width * 0.72 : width * 0.77
      const originY = width < 760 ? height * 0.39 : height * 0.42
      sphere = { x: originX, y: originY, radius: scale * 0.5 }
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

    const drawSphereBase = () => {
      if (!sphere.radius) return
      ctx.save()
      ctx.globalCompositeOperation = 'screen'

      const halo = ctx.createRadialGradient(sphere.x, sphere.y, sphere.radius * 0.22, sphere.x, sphere.y, sphere.radius * 1.34)
      halo.addColorStop(0, 'rgba(34, 164, 151, .16)')
      halo.addColorStop(0.52, 'rgba(42, 116, 154, .18)')
      halo.addColorStop(1, 'rgba(0, 0, 0, 0)')
      ctx.fillStyle = halo
      ctx.beginPath()
      ctx.arc(sphere.x, sphere.y, sphere.radius * 1.34, 0, Math.PI * 2)
      ctx.fill()

      const body = ctx.createRadialGradient(
        sphere.x - sphere.radius * 0.28,
        sphere.y - sphere.radius * 0.3,
        sphere.radius * 0.05,
        sphere.x,
        sphere.y,
        sphere.radius,
      )
      body.addColorStop(0, 'rgba(236, 246, 255, .42)')
      body.addColorStop(0.24, 'rgba(160, 194, 211, .28)')
      body.addColorStop(0.5, 'rgba(24, 114, 121, .2)')
      body.addColorStop(0.76, 'rgba(9, 29, 38, .18)')
      body.addColorStop(1, 'rgba(0, 0, 0, 0)')
      ctx.fillStyle = body
      ctx.beginPath()
      ctx.arc(sphere.x, sphere.y, sphere.radius, 0, Math.PI * 2)
      ctx.fill()

      ctx.restore()
    }

    const render = () => {
      tick += 1
      ctx.clearRect(0, 0, width, height)
      drawStars()
      drawSphereBase()

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

        const alpha = Math.max(0.18, particle.opacity * (1 - disperse * 0.58))
        const size = particle.size * (1 + influence * 2.4 + disperse * 1.1)
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
