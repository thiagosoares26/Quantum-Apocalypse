import { Card } from "@/components/ui/card"
import { Lightbulb, AlertTriangle, BookOpen, Users, Scale } from "lucide-react"

export function Conclusion() {
  return (
    <section id="conclusion" className="py-24 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">{"Conclusão"}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {"O futuro da computação quântica está em nossas mãos"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
            <Lightbulb className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-primary">{"Potencial Revolucionário"}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {
                "A computação quântica é uma revolução da física moderna com grande potencial para o bem. Ela pode transformar medicina, ciência dos materiais, inteligência artificial e muito mais."
              }
            </p>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-destructive/20">
            <AlertTriangle className="h-12 w-12 text-destructive mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-destructive">{"Riscos Existenciais"}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {
                "No entanto, seu uso indevido pode levar a um colapso digital global. O chamado Apocalipse Quântico é um alerta para que a ciência seja guiada por ética e responsabilidade."
              }
            </p>
          </Card>
        </div>

        <Card className="p-8 bg-card/50 backdrop-blur-sm border-accent/20 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-accent text-center">{"Pontos-Chave"}</h3>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg border border-accent/20">
              <span className="text-2xl">{"⚛️"}</span>
              <div>
                <h4 className="font-bold mb-1">{"Revolução Tecnológica"}</h4>
                <p className="text-sm text-muted-foreground">
                  {
                    "A computação quântica representa um salto quântico (literalmente) na capacidade de processamento, abrindo possibilidades antes inimagináveis."
                  }
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg border border-accent/20">
              <span className="text-2xl">{"🔐"}</span>
              <div>
                <h4 className="font-bold mb-1">{"Ameaça à Segurança"}</h4>
                <p className="text-sm text-muted-foreground">
                  {
                    "O Algoritmo de Shor pode quebrar a criptografia RSA, ameaçando toda a infraestrutura de segurança digital moderna."
                  }
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg border border-accent/20">
              <span className="text-2xl">{"⚖️"}</span>
              <div>
                <h4 className="font-bold mb-1">{"Responsabilidade Ética"}</h4>
                <p className="text-sm text-muted-foreground">
                  {
                    "Devemos desenvolver esta tecnologia com transparência, cooperação internacional e consideração cuidadosa dos impactos sociais."
                  }
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg border border-accent/20">
              <span className="text-2xl">{"🛡️"}</span>
              <div>
                <h4 className="font-bold mb-1">{"Preparação é Essencial"}</h4>
                <p className="text-sm text-muted-foreground">
                  {
                    "Precisamos investir em criptografia pós-quântica e educação para estar preparados para a era quântica."
                  }
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm border-primary/30 quantum-border">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6 text-glow">{"O Caminho à Frente"}</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
              {
                "Devemos investir não apenas em tecnologia, mas em educação, regulação e consciência coletiva. O futuro da computação quântica será determinado pelas escolhas que fazemos hoje."
              }
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <BookOpen className="h-10 w-10 text-primary mb-3" />
                <h4 className="font-bold mb-2">{"Educação"}</h4>
                <p className="text-sm text-muted-foreground text-center">
                  {"Formar cientistas e engenheiros quânticos"}
                </p>
              </div>

              <div className="flex flex-col items-center">
                <Scale className="h-10 w-10 text-accent mb-3" />
                <h4 className="font-bold mb-2">{"Regulação"}</h4>
                <p className="text-sm text-muted-foreground text-center">{"Criar frameworks legais e éticos"}</p>
              </div>

              <div className="flex flex-col items-center">
                <Users className="h-10 w-10 text-secondary mb-3" />
                <h4 className="font-bold mb-2">{"Consciência"}</h4>
                <p className="text-sm text-muted-foreground text-center">{"Engajar a sociedade no debate"}</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
