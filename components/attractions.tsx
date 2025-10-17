import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Landmark, Mountain, ListEnd as Island, Droplet } from "lucide-react"

export function Attractions() {
  const attractions = [
    {
      icon: Landmark,
      title: "Tikal",
      description:
        "Explora las majestuosas ruinas mayas, una de las ciudades antiguas más importantes de la civilización maya",
      distance: "65 km",
      image: "/tikal-mayan-ruins-guatemala.jpg",
    },
    {
      icon: Mountain,
      title: "Yaxhá",
      description: "Descubre este impresionante sitio arqueológico con vistas espectaculares del lago",
      distance: "30 km",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xUfT6BRVJrlh56ldnDiJcWEwtl12ze.png",
    },
    {
      icon: Island,
      title: "Isla de Flores",
      description: "Disfruta del encanto colonial de esta pintoresca isla en el lago Petén Itzá",
      distance: "5 km",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-Zd9fniO66uqZ0WxT5JJ1kaCSGwkrBE.jpeg",
    },
    {
      icon: Droplet,
      title: "Cráter Azul",
      description: "Sumérgete en las aguas cristalinas de este cenote natural rodeado de vegetación",
      distance: "45 km",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-08SwB1bk7i9Xhy1J88tRr1LYOC7Tmg.jpeg",
    },
  ]

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Atracciones Cercanas</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Descubre las maravillas de Petén desde nuestra ubicación privilegiada
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {attractions.map((attraction, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={attraction.image || "/placeholder.svg"}
                  alt={attraction.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <attraction.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{attraction.title}</CardTitle>
                </div>
                <CardDescription className="text-sm font-medium text-accent">
                  {attraction.distance} de distancia
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-pretty">{attraction.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
