import { ExternalLink } from "lucide-react"

export function Footer() {
  const references = [
    {
      title: "IBM Quantum Experience",
      url: "https://quantum-computing.ibm.com/",
    },
    {
      title: "Shor, P. W. (1994). Algorithms for quantum computation",
      url: "#",
    },
    {
      title: "Qiskit Textbook",
      url: "https://qiskit.org/textbook",
    },
    {
      title: "Introdução à Computação Quântica — USP, IFSC",
      url: "#",
    },
  ]

  return (
    <footer className="py-16 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-primary">{"Referências"}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {references.map((ref, index) => (
              <a
                key={index}
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-4 bg-card/50 rounded-lg border border-border hover:border-primary/50 transition-colors group"
              >
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {ref.title}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="text-center pt-8 border-t border-border">
          <p className="text-muted-foreground mb-2">
            {"Projeto de Física: Computação Quântica e o Apocalipse Digital"}
          </p>
          <p className="text-sm text-muted-foreground">{"Tatiana Maturano | Thiago Soares | Victor Gustavo"}</p>
          <p className="text-xs text-muted-foreground mt-2">{"07/10/2025"}</p>
        </div>
      </div>
    </footer>
  )
}
