"use client"

import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Code } from "lucide-react"
import Image from "next/image"

// Enlaces de redes sociales reales
const socialLinks = {
  facebook: "https://www.facebook.com/share/18R8LKH2AH/?mibextid=wwXIfr",
  instagram: "https://www.instagram.com/radioportaldelsol?igsh=MTFuNmh0MzIxYmw4ag==",
  youtube: "https://youtube.com/@lapazmunicipio?si=kFMQ4KMYC86IzHsd",
}

const contactInfo = {
  address: "La Paz, Argentina",
  phone: "+54 9 2634 36-0262",
  email: "radioportaldelsollapaz@gmail.com",
}

export default function SocialFooter() {
  const handleSocialClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const handleContactClick = (type: string, value: string) => {
    switch (type) {
      case "phone":
        window.open(`tel:${value}`, "_self")
        break
      case "email":
        window.open(`mailto:${value}`, "_self")
        break
      case "address":
        window.open(`https://maps.google.com/?q=${encodeURIComponent(value)}`, "_blank")
        break
    }
  }

  return (
    <footer id="contacto" className="bg-gradient-to-t from-[#1a1a1a] to-[#333440] border-t border-gray-600 py-8">
      <div className="container mx-auto px-4">
        {/* Título de la sección de contacto */}
        <div className="text-center mb-8">
          <div className="mb-4">
            <Image
              src="/img/NEGATIVO N HORIZONTAL.png"
              alt="Portal del Sol 88.1 FM"
              width={150}
              height={50}
              className="mx-auto h-12 w-auto object-contain"
            />
          </div>
          <h2 className="text-3xl font-bold text-[#fffffe] mb-2">Contacto</h2>
          <p className="text-[#fffffe] opacity-75">Ponte en contacto con nosotros</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <Image
                src="/img/COLOR N.png"
                alt="Portal del Sol"
                width={40}
                height={40}
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl font-bold text-[#fffffe]">Portal del Sol</span>
              <span className="bg-[#acd600] text-[#333440] px-2 py-1 rounded text-sm">88.1</span>
            </div>
            <p className="text-[#fffffe] opacity-75 text-sm">
              Tu radio de confianza en La Paz, Argentina. Música, noticias y entretenimiento las 24 horas.
            </p>
          </div>

          {/* Información de contacto */}
          <div className="text-center">
            <h3 className="text-[#acd600] font-bold mb-4">Información de Contacto</h3>
            <div className="space-y-3">
              <button
                onClick={() => handleContactClick("address", contactInfo.address)}
                className="flex items-center justify-center space-x-2 text-[#fffffe] opacity-75 hover:opacity-100 hover:text-[#acd600] transition-colors w-full"
              >
                <MapPin className="h-4 w-4" />
                <span className="text-sm">{contactInfo.address}</span>
              </button>
              <button
                onClick={() => handleContactClick("phone", contactInfo.phone)}
                className="flex items-center justify-center space-x-2 text-[#fffffe] opacity-75 hover:opacity-100 hover:text-[#acd600] transition-colors w-full"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm">{contactInfo.phone}</span>
              </button>
              <button
                onClick={() => handleContactClick("email", contactInfo.email)}
                className="flex items-center justify-center space-x-2 text-[#fffffe] opacity-75 hover:opacity-100 hover:text-[#acd600] transition-colors w-full"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">{contactInfo.email}</span>
              </button>
            </div>
          </div>

          {/* Redes sociales */}
          <div className="text-center md:text-right">
            <h3 className="text-[#acd600] font-bold mb-4">Síguenos</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <Button
                onClick={() => handleSocialClick(socialLinks.facebook)}
                variant="ghost"
                size="icon"
                className="text-[#fffffe] hover:text-[#acd600] hover:bg-[#acd600] hover:bg-opacity-20 rounded-full transition-colors"
                title="Síguenos en Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                onClick={() => handleSocialClick(socialLinks.instagram)}
                variant="ghost"
                size="icon"
                className="text-[#fffffe] hover:text-[#acd600] hover:bg-[#acd600] hover:bg-opacity-20 rounded-full transition-colors"
                title="Síguenos en Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                onClick={() => handleSocialClick(socialLinks.youtube)}
                variant="ghost"
                size="icon"
                className="text-[#fffffe] hover:text-[#acd600] hover:bg-[#acd600] hover:bg-opacity-20 rounded-full transition-colors"
                title="Síguenos en YouTube"
              >
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright y Creadora */}
        <div className="border-t border-gray-600 mt-8 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-[#fffffe] opacity-50 text-sm">
              © 2024 Radio Portal del Sol 88.1 FM. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-2 text-[#fffffe] opacity-50 text-sm">
              <Code className="h-4 w-4" />
              <span>Desarrollado por Castellano Virginia</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
