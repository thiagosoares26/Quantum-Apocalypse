import { Card } from "@/components/ui/card"
import { AlertTriangle, Lock, Unlock } from "lucide-react"

export function ShorAlgorithm() {
  return (
    <section id="shor" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">{"Algoritmo de Shor"}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {"O algoritmo que pode quebrar a criptografia moderna"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
            <Lock className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-primary">{"Computação Clássica"}</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {
                "Fatorar números grandes em seus primos componentes é extremamente difícil para computadores clássicos. Um número de 2048 bits levaria milhões de anos para ser fatorado."
              }
            </p>
            <div className="bg-muted/30 p-4 rounded-lg border border-primary/20">
              <p className="font-mono text-sm text-muted-foreground">{"Tempo: ~10^9 anos"}</p>
              <p className="text-xs mt-2 text-muted-foreground">{"Para fatorar um número RSA-2048"}</p>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-destructive/20 quantum-border">
            <Unlock className="h-12 w-12 text-destructive mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-destructive">{"Computação Quântica"}</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {
                "O Algoritmo de Shor pode fatorar números grandes em tempo polinomial usando um computador quântico suficientemente poderoso, quebrando a segurança do RSA."
              }
            </p>
            <div className="bg-destructive/10 p-4 rounded-lg border border-destructive/20">
              <p className="font-mono text-sm text-destructive">{"Tempo: ~horas/dias"}</p>
              <p className="text-xs mt-2 text-muted-foreground">{"Com um computador quântico adequado"}</p>
            </div>
          </Card>
        </div>

        <Card className="p-8 bg-card/50 backdrop-blur-sm border-destructive/20">
          <div className="flex items-start gap-4 mb-6">
            <AlertTriangle className="h-8 w-8 text-destructive flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold mb-4 text-destructive">
                {"Problemas que a Computação Quântica pode gerar"}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {
                  "O Algoritmo de Shor representa uma ameaça existencial para a segurança digital moderna. Quando computadores quânticos suficientemente poderosos forem construídos, eles poderão:"
                }
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-destructive mt-1">{"⚠"}</span>
                <div>
                  <h4 className="font-bold mb-1">{"Quebrar RSA e ECC"}</h4>
                  <p className="text-sm text-muted-foreground">
                    {"Sistemas de criptografia de chave pública usados em toda a internet"}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-destructive mt-1">{"⚠"}</span>
                <div>
                  <h4 className="font-bold mb-1">{"Comprometer comunicações"}</h4>
                  <p className="text-sm text-muted-foreground">
                    {"HTTPS, VPNs, e-mails criptografados, mensagens seguras"}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-destructive mt-1">{"⚠"}</span>
                <div>
                  <h4 className="font-bold mb-1">{"Ameaçar infraestrutura crítica"}</h4>
                  <p className="text-sm text-muted-foreground">{"Sistemas bancários, governamentais e militares"}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-destructive mt-1">{"⚠"}</span>
                <div>
                  <h4 className="font-bold mb-1">{"Invalidar assinaturas digitais"}</h4>
                  <p className="text-sm text-muted-foreground">
                    {"Certificados SSL/TLS, blockchain, contratos digitais"}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-destructive mt-1">{"⚠"}</span>
                <div>
                  <h4 className="font-bold mb-1">{"Expor dados históricos"}</h4>
                  <p className="text-sm text-muted-foreground">
                    {"Dados criptografados armazenados hoje podem ser descriptografados no futuro"}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-destructive mt-1">{"⚠"}</span>
                <div>
                  <h4 className="font-bold mb-1">{"Criar instabilidade global"}</h4>
                  <p className="text-sm text-muted-foreground">{"Corrida armamentista quântica entre nações"}</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
