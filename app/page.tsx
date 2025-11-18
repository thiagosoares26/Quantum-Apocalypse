import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { QuantumSection } from "@/components/quantum-section"
import { QubitSection } from "@/components/qubit-section"
import { ShorAlgorithm } from "@/components/shor-algorithm"
import { CryptographyBreak } from "@/components/cryptography-break"
import { EthicsSection } from "@/components/ethics-section"
import { Conclusion } from "@/components/conclusion"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <QuantumSection />
      <QubitSection />
      <ShorAlgorithm />
      <CryptographyBreak />
      <EthicsSection />
      <Conclusion />
      <Footer />
    </main>
  )
}
