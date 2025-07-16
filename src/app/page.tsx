"use client"

import NavigationMenu from "@/components/navigation-menu"
import RadioPlayer from "@/components/radio-player"
import ProgramSchedule from "@/components/program-schedule"
import NosotrosSection from "@/components/nosotros-section"
import SocialFooter from "@/components/social-footer"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  // URL correcta de tu radio
  const RADIO_STREAM_URL = "https://streaming.radiosenlinea.com.ar/8080/stream"

  return (
    <div className="min-h-screen bg-[#333440]">
      {/* Header */}
      <header className="sticky top-0 z-40 flex items-center justify-between px-4 py-4 md:px-6 bg-[#333440] border-b border-gray-600 shadow-lg">
        <NavigationMenu />

        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/img/COLOR N HORIZONTAL.png"
            alt="Portal del Sol 88.1 FM"
            width={120}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>

        <RadioPlayer streamUrl={RADIO_STREAM_URL} />
      </header>

      {/* Navigation Tabs - También fijo debajo del header */}
      <nav className="sticky top-[72px] z-30 flex justify-center space-x-8 py-4 bg-[#333440] border-b border-gray-600 shadow-md">
        <button
          onClick={() => {
            const element = document.getElementById("programacion")
            if (element) {
              element.scrollIntoView({ behavior: "smooth" })
            }
          }}
          className="text-[#acd600] hover:text-[#9bc400] font-medium border-b-2 border-[#acd600] pb-1"
        >
          PROGRAMAS
        </button>
        <Link href="/en-vivo">
          <button className="text-[#fffffe] hover:text-[#acd600] font-medium border border-gray-600 px-4 py-1 rounded">
            EN VIVO
          </button>
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-[#333440] to-[#2a2a35]">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <Image
              src="/img/COLOR-V.png"
              alt="Portal del Sol 88.1 FM"
              width={200}
              height={200}
              className="mx-auto mb-6 w-32 h-32 md:w-48 md:h-48 object-contain"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#fffffe] mb-4">Portal del Sol 88.1</h1>
          <p className="text-xl text-[#fffffe] opacity-75 mb-8">Tu radio de confianza en La Paz, Argentina</p>
          <Link href="/en-vivo">
            <button className="bg-[#acd600] hover:bg-[#9bc400] text-[#333440] font-bold px-8 py-3 rounded-full text-lg transition-colors shadow-lg hover:shadow-xl">
              Escuchar Ahora
            </button>
          </Link>
        </div>
      </section>

      {/* Sección Nosotros */}
      <NosotrosSection />

      {/* Sección Programación */}
      <section id="programacion" className="py-16 bg-[#333440]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-[#fffffe] mb-2">Programación</h2>
            <p className="text-[#fffffe] opacity-75">Conoce todos nuestros programas y horarios</p>
          </div>
          <ProgramSchedule />
        </div>
      </section>

      {/* Footer con redes sociales */}
      <SocialFooter />
    </div>
  )
}
