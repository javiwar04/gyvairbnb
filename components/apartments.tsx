import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Home, Bed } from "lucide-react"
import Image from "next/image"

export function Apartments() {
  return (
    <section id="apartamentos" className="py-20 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Nuestros Apartamentos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Espacios cómodos y bien equipados para tu estadía en Flores
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-64">
              <Image src="/images/sala-1.png" alt="Casa completa - Sala de estar" fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">Casa Completa</CardTitle>
              <CardDescription className="text-base">Perfecta para grupos grandes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Capacidad: 8 personas</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Home className="h-5 w-5 text-primary" />
                  <span>Casa completa con todas las comodidades</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Bed className="h-5 w-5 text-primary" />
                  <span>Múltiples habitaciones</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-64">
              <Image
                src="/images/habitacion-cabecera.png"
                alt="Habitaciones - Recámara confortable"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">Habitaciones</CardTitle>
              <CardDescription className="text-base">Ideal para familias pequeñas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Capacidad: 6 personas</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Home className="h-5 w-5 text-primary" />
                  <span>Espacio acogedor y privado</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Bed className="h-5 w-5 text-primary" />
                  <span>Habitaciones confortables</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
