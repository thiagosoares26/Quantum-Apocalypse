import { Card } from "@/components/ui/card"
import { Scale, Users, Globe, AlertCircle } from "lucide-react"

export function EthicsSection() {
  const questions = [
    {
      icon: Users,
      question: "Quem deve controlar a computação quântica?",
      description: "O acesso a esta tecnologia deve ser democratizado ou restrito?",
    },
    {
      icon: Globe,
      question: "Empresas privadas devem ter acesso irrestrito?",
      description: "Qual o papel do setor privado no desenvolvimento quântico?",
    },
    {
      icon: Scale,
      question: 'Deveria existir um "Tratado de Não-Proliferação Quântica"?',
      description: "Similar aos tratados nucleares, para prevenir corrida armamentista?",
    },
    {
      icon: AlertCircle,
      question: "Como proteger países que não têm acesso à tecnologia?",
      description: "Evitar que a desigualdade tecnológica crie vulnerabilidades globais.",
    },
  ]

  return (
    <section id="ethics" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">{"Aspectos Éticos"}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {"A responsabilidade ética sobre o uso dessa tecnologia é tão importante quanto o desenvolvimento dela"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {questions.map((item, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/50 transition-all duration-300"
            >
              <item.icon className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3 text-accent">{item.question}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-card/50 backdrop-blur-sm border-accent/20">
          <h3 className="text-2xl font-bold mb-6 text-accent text-center">
            {"Princípios para o Desenvolvimento Responsável"}
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-accent/30">
                <Scale className="h-8 w-8 text-accent" />
              </div>
              <h4 className="font-bold mb-2">{"Transparência"}</h4>
              <p className="text-sm text-muted-foreground">
                {"Desenvolvimento aberto e auditável por comunidade científica internacional"}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-accent/30">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h4 className="font-bold mb-2">{"Cooperação"}</h4>
              <p className="text-sm text-muted-foreground">
                {"Colaboração internacional para garantir benefícios compartilhados"}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-accent/30">
                <Globe className="h-8 w-8 text-accent" />
              </div>
              <h4 className="font-bold mb-2">{"Responsabilidade"}</h4>
              <p className="text-sm text-muted-foreground">
                {"Consideração dos impactos sociais, econômicos e de segurança"}
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-accent/5 rounded-lg border border-accent/20">
            <p className="text-center text-muted-foreground leading-relaxed">
              {
                "A ciência deve ser guiada por ética, cooperação e responsabilidade. O futuro da computação quântica depende das escolhas que fazemos hoje."
              }
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
