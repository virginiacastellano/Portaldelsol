"use client"

import { Radio, Users, Heart, Mic } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function NosotrosSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contacto")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="nosotros" className="py-16 bg-gradient-to-b from-[#2a2a35] to-[#333440]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="mb-6">
              <Image
                src="/img/COLOR N.png"
                alt="Portal del Sol 88.1 FM"
                width={150}
                height={150}
                className="mx-auto w-24 h-24 md:w-32 md:h-32 object-contain"
              />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#fffffe] mb-4">Nosotros</h2>
            <p className="text-xl text-[#fffffe] opacity-75">Conoce la historia de Portal del Sol 88.1 FM</p>
          </div>

          {/* About Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <Radio className="h-8 w-8 text-[#acd600]" />
                <h3 className="text-2xl font-bold text-[#fffffe]">Nuestra Historia</h3>
              </div>
              <p className="text-[#fffffe] opacity-90 leading-relaxed">
                Portal del Sol 88.1 FM nació en La Paz, Argentina, con la misión de ser la voz de nuestra comunidad.
                Desde nuestros inicios, nos hemos comprometido a brindar entretenimiento de calidad, información veraz y
                acompañar a nuestros oyentes en cada momento del día.
              </p>
              <p className="text-[#fffffe] opacity-90 leading-relaxed">
                Somos más que una radio; somos el punto de encuentro donde la música, las noticias locales y la cultura
                se unen para crear una experiencia única para toda la familia.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <Heart className="h-8 w-8 text-[#acd600]" />
                <h3 className="text-2xl font-bold text-[#fffffe]">Nuestra Misión</h3>
              </div>
              <p className="text-[#fffffe] opacity-90 leading-relaxed">
                Conectar a la comunidad de La Paz a través de la radio, ofreciendo contenido de calidad que informe,
                entretenga y acompañe a nuestros oyentes las 24 horas del día.
              </p>
              <div className="bg-[#acd600] bg-opacity-10 p-6 rounded-lg border border-[#acd600] border-opacity-30 relative overflow-hidden">
                <div className="absolute top-2 right-2 opacity-20">
                  <Image
                    src="/img/NEGATIVO N.png"
                    alt="Portal del Sol Logo"
                    width={60}
                    height={60}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h4 className="text-[#acd600] font-bold mb-2">88.1 FM</h4>
                <p className="text-[#fffffe] opacity-90 text-sm">Tu frecuencia de confianza en La Paz, Argentina</p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-[#fffffe] mb-4">Nuestros Valores</h3>
              <p className="text-[#fffffe] opacity-75">Los principios que nos guían cada día</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#fffffe] bg-opacity-5 p-6 rounded-lg border border-gray-600 hover:bg-opacity-10 transition-all">
                <Users className="h-12 w-12 text-[#acd600] mb-4" />
                <h4 className="text-[#fffffg] font-bold text-lg mb-2">Comunidad</h4>
                <p className="text-[#fffffg] opacity-75 text-sm">
                  Somos parte de La Paz y trabajamos para fortalecer los lazos de nuestra comunidad.
                </p>
              </div>

              <div className="bg-[#fffffe] bg-opacity-5 p-6 rounded-lg border border-gray-600 hover:bg-opacity-10 transition-all">
                <Mic className="h-12 w-12 text-[#acd600] mb-4" />
                <h4 className="text-[#fffffg] font-bold text-lg mb-2">Calidad</h4>
                <p className="text-[#fffffg] opacity-75 text-sm">
                  Nos comprometemos a ofrecer contenido de excelencia en cada programa.
                </p>
              </div>

              <div className="bg-[#fffffe] bg-opacity-5 p-6 rounded-lg border border-gray-600 hover:bg-opacity-10 transition-all">
                <Heart className="h-12 w-12 text-[#acd600] mb-4" />
                <h4 className="text-[#fffffg] font-bold text-lg mb-2">Pasión</h4>
                <p className="text-[#fffffg] opacity-75 text-sm">
                  Amamos lo que hacemos y esa pasión se refleja en cada transmisión.
                </p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center bg-[#acd600] bg-opacity-10 p-8 rounded-lg border border-[#acd600] border-opacity-30 relative overflow-hidden">
            <div className="absolute top-4 right-4 opacity-10">
              <Image
                src="/img/COLOR V HORIZONTAL.png"
                alt="Portal del Sol Logo"
                width={100}
                height={40}
                className="w-20 h-8 object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold text-[#fffffe] mb-4">¿Quieres ser parte de Portal del Sol?</h3>
            <p className="text-[#fffffe] opacity-90 mb-6">
              Contáctanos para propuestas, sugerencias o si quieres formar parte de nuestro equipo.
            </p>
            <Button
              onClick={scrollToContact}
              className="bg-[#acd600] hover:bg-[#9bc400] text-[#333440] font-bold px-8 py-3 shadow-lg hover:shadow-xl transition-all"
            >
              Contáctanos
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
