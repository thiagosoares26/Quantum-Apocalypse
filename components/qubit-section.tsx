"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useRef } from "react"

export function QubitSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 400
    canvas.height = 400

    let angle = 0

    function animate() {
      if (!ctx || !canvas) return

      ctx.fillStyle = "rgba(20, 20, 30, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const radius = 120

      // Draw sphere
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
      ctx.strokeStyle = "rgba(100, 100, 255, 0.3)"
      ctx.lineWidth = 2
      ctx.stroke()

      // Draw |0⟩ state
      ctx.beginPath()
      ctx.arc(centerX, centerY - radius, 8, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(100, 255, 100, 0.8)"
      ctx.fill()
      ctx.fillStyle = "rgba(255, 255, 255, 0.9)"
      ctx.font = "16px monospace"
      ctx.fillText("|0⟩", centerX + 15, centerY - radius + 5)

      // Draw |1⟩ state
      ctx.beginPath()
      ctx.arc(centerX, centerY + radius, 8, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(255, 100, 100, 0.8)"
      ctx.fill()
      ctx.fillStyle = "rgba(255, 255, 255, 0.9)"
      ctx.fillText("|1⟩", centerX + 15, centerY + radius + 5)

      // Draw rotating qubit state
      const x = centerX + radius * Math.sin(angle) * Math.cos(angle)
      const y = centerY + radius * Math.cos(angle)

      ctx.beginPath()
      ctx.arc(x, y, 10, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(100, 100, 255, 0.9)"
      ctx.fill()
      ctx.strokeStyle = "rgba(100, 100, 255, 1)"
      ctx.lineWidth = 2
      ctx.stroke()

      // Draw vector
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(x, y)
      ctx.strokeStyle = "rgba(100, 100, 255, 0.6)"
      ctx.lineWidth = 2
      ctx.stroke()

      angle += 0.02

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <section id="qubits" className="py-24 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">{"O que é um Qubit?"}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {"Enquanto um bit clássico pode ser 0 ou 1, um qubit pode ser os dois ao mesmo tempo!"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
            <h3 className="text-2xl font-bold mb-6 text-primary">{"Superposição Quântica"}</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {
                  "Um qubit em superposição existe simultaneamente em múltiplos estados até ser medido. Esta propriedade fundamental permite que computadores quânticos processem informações de forma exponencialmente mais eficiente."
                }
              </p>
              <p>
                {
                  "A esfera de Bloch (visualizada ao lado) representa todos os possíveis estados de um qubit. O vetor em rotação mostra como um qubit pode existir em qualquer ponto desta esfera."
                }
              </p>
              <div className="bg-muted/30 p-4 rounded-lg border border-primary/20 mt-6">
                <p className="font-mono text-sm text-primary">{"|ψ⟩ = α|0⟩ + β|1⟩"}</p>
                <p className="text-xs mt-2">{"Onde α e β são amplitudes de probabilidade complexas"}</p>
              </div>
            </div>
          </Card>

          <div className="flex justify-center">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 quantum-border">
              <h4 className="text-center text-lg font-bold mb-4 text-secondary">{"Esfera de Bloch"}</h4>
              <canvas ref={canvasRef} className="w-full h-auto" />
              <p className="text-center text-sm text-muted-foreground mt-4">
                {"Visualização de um qubit em superposição"}
              </p>
            </Card>
          </div>
        </div>

        <Card className="mt-12 p-8 bg-card/50 backdrop-blur-sm border-secondary/20">
          <h3 className="text-2xl font-bold mb-4 text-secondary">{"Onde são feitos os computadores quânticos?"}</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {
              "Computadores quânticos estão sendo construídos em várias instituições de pesquisa e empresas ao redor do mundo:"
            }
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              "IBM",
              "Google",
              "Microsoft",
              "Universidade de Harvard",
              "Universidade de Oxford",
              "Universidade de Waterloo",
            ].map((org) => (
              <div
                key={org}
                className="bg-muted/30 p-4 rounded-lg border border-secondary/20 text-center hover:border-secondary/50 transition-colors"
              >
                <p className="font-semibold">{org}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}
