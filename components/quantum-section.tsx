import { Card } from "@/components/ui/card"
import { Atom, Zap, Waves } from "lucide-react"

export function QuantumSection() {
  const principles = [
    {
      icon: Waves,
      title: "Superposição",
      description: "Um qubit pode estar nos estados |0⟩ e |1⟩ ao mesmo tempo.",
    },
    {
      icon: Zap,
      title: "Entrelaçamento",
      description: "Qubits podem ser correlacionados de forma que a mudança em um afete instantaneamente o outro.",
    },
    {
      icon: Atom,
      title: "Interferência",
      description: "Usada para amplificar as respostas corretas em um cálculo.",
    },
  ]

  return (
    <section id="quantum" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">{"O que é Computação Quântica?"}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {
              "A computação quântica é baseada nos princípios da mecânica quântica, revolucionando a forma como processamos informações."
            }
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {principles.map((principle, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:quantum-glow"
            >
              <principle.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
          <h3 className="text-2xl font-bold mb-4 text-primary">{"O que é um Computador Quântico?"}</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {
              "Um computador quântico é um tipo de computador que usa os princípios da mecânica quântica para resolver problemas complexos. Ao invés de bits que representam 0 ou 1, um computador quântico usa qubits, que podem representar 0, 1, ou uma combinação de ambos. Isso permite que os computadores quânticos realizem cálculos muito mais rápidos do que os computadores clássicos para certos tipos de problemas."
            }
          </p>

          <h4 className="text-xl font-bold mb-4 text-secondary">{"Aplicações Potenciais:"}</h4>
          <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">{"•"}</span>
              <span>{"Descoberta de novos medicamentos e materiais"}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">{"•"}</span>
              <span>{"Otimização de algoritmos de aprendizado de máquina"}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">{"•"}</span>
              <span>{"Criptografia avançada"}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">{"•"}</span>
              <span>{"Análise financeira complexa"}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">{"•"}</span>
              <span>{"Simulações de sistemas complexos"}</span>
            </li>
          </ul>
        </Card>
      </div>
    </section>
  )
}
