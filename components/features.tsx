import { Car, Users, Wifi, Coffee, Shield, MapPin } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Car,
      title: "Parqueo Gratis",
      description: "Estacionamiento privado y seguro incluido",
    },
    {
      icon: Users,
      title: "Hasta 16 Personas",
      description: "Capacidad máxima para grupos grandes",
    },
    {
      icon: Wifi,
      title: "WiFi Incluido",
      description: "Internet de alta velocidad",
    },
    {
      icon: Coffee,
      title: "Cocina Equipada",
      description: "Prepara tus propias comidas",
    },
    {
      icon: Shield,
      title: "Seguro y Limpio",
      description: "Protocolos de limpieza estrictos",
    },
    {
      icon: MapPin,
      title: "Ubicación Céntrica",
      description: "Cerca del aeropuerto y atracciones",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Comodidades</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Todo lo que necesitas para una estadía perfecta
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-card hover:bg-accent/5 transition-colors"
            >
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">{feature.title}</h3>
              <p className="text-muted-foreground text-pretty">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
