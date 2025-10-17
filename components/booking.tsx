import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Calendar, Instagram } from "lucide-react"

export function Booking() {
  return (
    <section id="reservar" className="py-20 bg-primary/5">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Reserva Tu Estadía</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Elige tu plataforma preferida para hacer tu reservación
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>WhatsApp</CardTitle>
              <CardDescription>Reservación directa</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 text-pretty">
                Contáctanos directamente para reservar y obtener atención personalizada
              </p>
              <Button className="w-full" asChild>
                <a href="https://wa.me/50254853063" target="_blank" rel="noopener noreferrer">
                  Chatear en WhatsApp
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                  <path d="M12 6c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z" />
                </svg>
              </div>
              <CardTitle>Airbnb</CardTitle>
              <CardDescription>Plataforma internacional</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 text-pretty">
                Reserva a través de Airbnb con todas las garantías de la plataforma
              </p>
              <div className="space-y-2">
                <Button className="w-full bg-transparent" variant="outline" asChild>
                  <a href="https://es-l.airbnb.com/rooms/1112291172783248059" target="_blank" rel="noopener noreferrer">
                    Apartamento
                  </a>
                </Button>
                <Button className="w-full bg-transparent" variant="outline" asChild>
                  <a href="https://www.airbnb.mx/rooms/1259472217160282707" target="_blank" rel="noopener noreferrer">
                    Alojamiento Entero
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Booking.com</CardTitle>
              <CardDescription>Reserva global</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 text-pretty">Encuentra las mejores tarifas en Booking.com</p>
              <Button className="w-full bg-transparent" variant="outline" asChild>
                <a
                  href="https://booking.com/hotel/gt/casa-g-amp-v-x-8-personas.es.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver en Booking
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">Síguenos en Instagram</p>
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://www.instagram.com/casagvpeten/"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <Instagram className="h-5 w-5" />
              @casagvpeten
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
