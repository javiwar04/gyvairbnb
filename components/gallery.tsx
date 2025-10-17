"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  // Baños
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-x7TPeuSOMb6HVLARAaG7Job76n3M7B.png",
    alt: "Baño moderno con acabados en madera y ducha",
    category: "Baños",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1pMOnZsIiyR8uolgNnkV4lDp1M18o6.png",
    alt: "Baño completo con ducha de vidrio",
    category: "Baños",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tL6s77CRnqF5ZpmbUtczHO4P9pwQcW.png",
    alt: "Baño compacto con lavabo de diseño",
    category: "Baños",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LGUzPByGGDl62i0zTM6ARZNGUk1I6y.png",
    alt: "Baño con ducha y estantería",
    category: "Baños",
  },
  { src: "/images/ducha-madera.png", alt: "Ducha con acabados en madera", category: "Baños" },
  { src: "/images/bano-moderno.png", alt: "Baño moderno con lavabo de diseño", category: "Baños" },
  { src: "/images/ducha-madera-moderna.png", alt: "Ducha moderna con acabados en madera y mosaico", category: "Baños" },

  // Habitaciones
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3wYT5Ru4P2TpcnfxUWQyELoH3rCbqm.png",
    alt: "Habitación minimalista con aire acondicionado",
    category: "Habitaciones",
  },
  { src: "/images/habitacion-escritorio.png", alt: "Habitación con área de trabajo y TV", category: "Habitaciones" },
  { src: "/images/habitacion-gris.png", alt: "Habitación moderna con pared gris", category: "Habitaciones" },
  { src: "/images/habitacion-cabecera.png", alt: "Habitación con cabecera decorativa", category: "Habitaciones" },
  { src: "/images/habitacion-tv.png", alt: "Habitación con escritorio y TV", category: "Habitaciones" },
  { src: "/images/habitacion-verde.png", alt: "Habitación con almohadas verdes", category: "Habitaciones" },
  { src: "/images/habitacion-ventana.png", alt: "Habitación con ventana amplia", category: "Habitaciones" },
  {
    src: "/images/habitacion-moderna-gris.png",
    alt: "Habitación moderna con pared gris y aire acondicionado",
    category: "Habitaciones",
  },
  {
    src: "/images/habitacion-literas-blancas.png",
    alt: "Habitación con literas blancas y almohadas verdes",
    category: "Habitaciones",
  },
  { src: "/images/habitacion-simple-gris.png", alt: "Habitación sencilla con pared gris", category: "Habitaciones" },
  {
    src: "/images/habitacion-escritorio-lampara.png",
    alt: "Habitación con escritorio y lámpara de trabajo",
    category: "Habitaciones",
  },
  { src: "/images/habitacion-closet-tv.png", alt: "Habitación con closet, escritorio y TV", category: "Habitaciones" },
  {
    src: "/images/habitacion-ventana-grande.png",
    alt: "Habitación con ventana grande y escritorio",
    category: "Habitaciones",
  },
  {
    src: "/images/habitacion-escritorio-verde.png",
    alt: "Habitación con escritorio y cortinas amarillas",
    category: "Habitaciones",
  },

  // Áreas Exteriores
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yIIi8xilOXlXCwUARKj6edXGUio6gY.png",
    alt: "Jardín con pérgola cubierta de plantas",
    category: "Áreas Exteriores",
  },

  // Fachada
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EYGXOaV4aALwkdpoEkUNzimMuagDB7.png",
    alt: "Fachada principal de la propiedad",
    category: "Fachada",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ApuAK6trWe9FiGCfPuQCFkNWWCjY4P.png",
    alt: "Vista de la calle y entrada",
    category: "Fachada",
  },

  // Salas
  { src: "/images/sala-1.png", alt: "Sala de estar principal con muebles cómodos", category: "Salas" },
  { src: "/images/sala-2-1.png", alt: "Sala de estar con cocina abierta", category: "Salas" },
  { src: "/images/sala-3.png", alt: "Sala de estar con escaleras y comedor", category: "Salas" },
  { src: "/images/sala-4.png", alt: "Sala de estar amplia con múltiples áreas", category: "Salas" },
  { src: "/images/sala-5.png", alt: "Sala de estar con ventanas grandes", category: "Salas" },

  // Cocinas
  { src: "/images/cocina-1.png", alt: "Cocina completa con gabinetes de madera", category: "Cocinas" },
  { src: "/images/cocina-2.png", alt: "Cocina moderna con isla", category: "Cocinas" },
  { src: "/images/cocina-3.png", alt: "Cocina equipada con electrodomésticos", category: "Cocinas" },
  { src: "/images/cocina-4.png", alt: "Cocina con gabinetes de madera y encimera", category: "Cocinas" },

  // Comedores
  { src: "/images/comedor-1.png", alt: "Comedor principal con mesa de madera", category: "Comedores" },
  { src: "/images/comedor-2.png", alt: "Comedor secundario", category: "Comedores" },
  { src: "/images/comedor-exterior.png", alt: "Comedor con vista al exterior", category: "Comedores" },
  { src: "/images/comedor-escaleras.png", alt: "Comedor con vista a escaleras", category: "Comedores" },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas")
  const [showAll, setShowAll] = useState(false)

  const categories = ["Todas", ...Array.from(new Set(galleryImages.map((img) => img.category)))]

  const filteredImages =
    selectedCategory === "Todas" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  const displayedImages = showAll ? filteredImages : filteredImages.slice(0, 6)

  const handlePrevious = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1)
    }
  }

  const handleNext = () => {
    if (selectedImage !== null && selectedImage < filteredImages.length - 1) {
      setSelectedImage(selectedImage + 1)
    }
  }

  return (
    <section id="galeria" className="py-20 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Galería de Fotos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">Conoce nuestras instalaciones</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => {
                setSelectedCategory(category)
                setShowAll(false)
              }}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {displayedImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
          ))}
        </div>

        {!showAll && filteredImages.length > 6 && (
          <div className="flex justify-center mt-8">
            <Button onClick={() => setShowAll(true)} size="lg" variant="outline">
              Ver más ({filteredImages.length - 6} fotos más)
            </Button>
          </div>
        )}

        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl p-0 bg-black/95 border-none">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4 z-50 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>

            {selectedImage !== null && (
              <div className="relative w-full h-[80vh]">
                <Image
                  src={filteredImages[selectedImage].src || "/placeholder.svg"}
                  alt={filteredImages[selectedImage].alt}
                  fill
                  className="object-contain"
                />

                {selectedImage > 0 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                    onClick={handlePrevious}
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </Button>
                )}

                {selectedImage < filteredImages.length - 1 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                    onClick={handleNext}
                  >
                    <ChevronRight className="h-8 w-8" />
                  </Button>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
