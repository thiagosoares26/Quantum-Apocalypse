import { Card } from "@/components/ui/card"
import { Shield, ShieldAlert, Key } from "lucide-react"

export function CryptographyBreak() {
  return (
    <section id="crypto" className="py-24 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">{"Quebra de Criptografia"}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {"Como a computação quântica ameaça a segurança digital moderna"}
          </p>
        </div>

        <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <Key className="h-10 w-10 text-primary flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">{"Criptografia RSA"}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {
                  "A criptografia RSA depende da dificuldade de fatorar números primos muito grandes. Este sistema protege a maior parte das comunicações seguras na internet hoje."
                }
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-muted/30 p-6 rounded-lg border border-primary/20">
              <h4 className="font-bold mb-3 text-primary">{"Chave Pública"}</h4>
              <p className="font-mono text-sm text-muted-foreground mb-2">{"(n, e)"}</p>
              <p className="text-sm text-muted-foreground">
                {"Usada para criptografar mensagens. Pode ser compartilhada publicamente."}
              </p>
            </div>

            <div className="bg-muted/30 p-6 rounded-lg border border-primary/20">
              <h4 className="font-bold mb-3 text-primary">{"Chave Privada"}</h4>
              <p className="font-mono text-sm text-muted-foreground mb-2">{"(d, n)"}</p>
              <p className="text-sm text-muted-foreground">
                {"Usada para descriptografar mensagens. Deve ser mantida em segredo."}
              </p>
            </div>
          </div>

          <div className="bg-primary/10 p-6 rounded-lg border border-primary/30">
            <p className="font-mono text-center text-primary mb-2">{"n = p × q"}</p>
            <p className="text-center text-sm text-muted-foreground">
              {"Onde p e q são números primos muito grandes (centenas de dígitos)"}
            </p>
          </div>
        </Card>

        <Card className="p-8 bg-card/50 backdrop-blur-sm border-destructive/20 quantum-border">
          <div className="flex items-start gap-4 mb-6">
            <ShieldAlert className="h-10 w-10 text-destructive flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold mb-4 text-destructive">{"O Apocalipse Quântico"}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {
                  "Com um computador quântico grande o suficiente, seria possível quebrar a criptografia RSA e causar um colapso na segurança digital global:"
                }
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-destructive/10 p-6 rounded-lg border border-destructive/30 hover:border-destructive/50 transition-colors">
              <h4 className="font-bold mb-3 text-destructive">{"Senhas Bancárias"}</h4>
              <p className="text-sm text-muted-foreground">
                {
                  "Sistemas bancários online poderiam ser completamente comprometidos, permitindo acesso não autorizado a contas."
                }
              </p>
            </div>

            <div className="bg-destructive/10 p-6 rounded-lg border border-destructive/30 hover:border-destructive/50 transition-colors">
              <h4 className="font-bold mb-3 text-destructive">{"Invasão de Governos"}</h4>
              <p className="text-sm text-muted-foreground">
                {"Comunicações governamentais secretas e sistemas de defesa nacional poderiam ser interceptados."}
              </p>
            </div>

            <div className="bg-destructive/10 p-6 rounded-lg border border-destructive/30 hover:border-destructive/50 transition-colors">
              <h4 className="font-bold mb-3 text-destructive">{"Colapso da Internet"}</h4>
              <p className="text-sm text-muted-foreground">
                {"A infraestrutura de segurança da internet moderna seria desestabilizada completamente."}
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-destructive/5 rounded-lg border border-destructive/20">
            <p className="text-center text-lg font-semibold text-destructive">
              {"⚠ Isso representa um risco real para a segurança global! ⚠"}
            </p>
          </div>
        </Card>

        <Card className="mt-8 p-8 bg-card/50 backdrop-blur-sm border-accent/20">
          <div className="flex items-start gap-4">
            <Shield className="h-10 w-10 text-accent flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold mb-4 text-accent">{"Criptografia Pós-Quântica"}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {
                  "Cientistas já estão desenvolvendo novos sistemas de criptografia resistentes a ataques quânticos. Estes incluem:"
                }
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">{"✓"}</span>
                  <span>{"Criptografia baseada em reticulados (lattice-based)"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">{"✓"}</span>
                  <span>{"Criptografia baseada em códigos"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">{"✓"}</span>
                  <span>{"Criptografia multivariada"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">{"✓"}</span>
                  <span>{"Distribuição quântica de chaves (QKD)"}</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
