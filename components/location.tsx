import { MapPin, Plane } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Location() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Ubicación</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">Flores, Petén, Guatemala</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="flex items-start gap-4 p-6 rounded-lg bg-card">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">Dirección</h3>
                <p className="text-muted-foreground text-pretty">
                  Tercera Lotificación, 11 avenida, Flores 17001, Petén
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-lg bg-card">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Plane className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">Aeropuerto</h3>
                <p className="text-muted-foreground text-pretty">Cerca del Aeropuerto Internacional Mundo Maya</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg h-96 bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.5237891234567!2d-89.89123456789012!3d16.931234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5c2e6e8e8e8e8e%3A0x8e8e8e8e8e8e8e8e!2sCasa%20G%26V%20Pet%C3%A9n!5e0!3m2!1ses!2sgt!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Casa G&V Petén"
            />
          </div>

          <div className="text-center mt-8">
            <Button size="lg" variant="outline" asChild>
              <a href="https://maps.app.goo.gl/vRWUNhkq7zV74gNN9" target="_blank" rel="noopener noreferrer">
                Ver en Google Maps
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
