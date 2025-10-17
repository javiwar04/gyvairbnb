import Image from "next/image"
import { Instagram, MessageCircle, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col items-center md:items-start">
            <Image src="/logo.png" alt="Casas G&V Logo" width={80} height={80} className="rounded-full mb-4" />
            <h3 className="text-xl font-bold mb-2">Casas G&V</h3>
            <p className="text-primary-foreground/80 text-center md:text-left text-pretty">Tu hogar en Flores, Petén</p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/50254853063"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors justify-center md:justify-start"
              >
                <MessageCircle className="h-4 w-4" />
                +502 5485-3063
              </a>
              <a
                href="https://www.instagram.com/casagvpeten/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors justify-center md:justify-start"
              >
                <Instagram className="h-4 w-4" />
                @casagvpeten
              </a>
              <div className="flex items-center gap-2 text-primary-foreground/80 justify-center md:justify-start">
                <MapPin className="h-4 w-4" />
                Flores, Petén, Guatemala
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <div className="space-y-2">
              <a
                href="#apartamentos"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Apartamentos
              </a>
              <a
                href="#reservar"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Reservar
              </a>
              <a
                href="https://maps.app.goo.gl/r8mV5Tujq7aCMfzS7"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Ubicación
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Casas G&V. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
