import { Hero } from "@/components/hero"
import { Apartments } from "@/components/apartments"
import { Features } from "@/components/features"
import { Gallery } from "@/components/gallery"
import { Attractions } from "@/components/attractions"
import { Location } from "@/components/location"
import { Booking } from "@/components/booking"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Apartments />
      <Features />
      <Gallery />
      <Attractions />
      <Location />
      <Booking />
      <Footer />
    </main>
  )
}
