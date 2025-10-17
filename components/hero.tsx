import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/5 to-background">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3ABcefOziDEjlck16SeBGduAuXEwTM.png"
          alt="Flores Petén Guatemala"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      <div className="container relative z-10 px-4 py-20 mx-auto text-center">
        <div className="flex justify-center mb-8">
          <Image src="/logo.png" alt="Casas G&V Logo" width={200} height={200} className="rounded-full" priority />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance text-foreground">Casas G&V</h1>

        <p className="text-xl md:text-2xl mb-4 text-muted-foreground max-w-3xl mx-auto text-balance">
          Tu hogar en el corazón de Petén
        </p>

        <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto text-pretty">
          Apartamentos cómodos en Flores, Petén. Cerca de Tikal, Yaxha y el Aeropuerto Internacional Mundo Maya
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="text-lg px-8" asChild>
            <a href="#reservar">Reservar Ahora</a>
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
            <a href="#apartamentos">Ver Apartamentos</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
