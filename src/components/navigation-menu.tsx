"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Facebook, Instagram, Youtube } from "lucide-react"

const menuItems = [
  { name: "Nosotros", action: "scroll", target: "nosotros" },
  { name: "Programación", action: "scroll", target: "programacion" },
  { name: "Contacto", action: "scroll", target: "contacto" },
]

// Enlaces de redes sociales reales
const socialLinks = {
  facebook: "https://www.facebook.com/share/18R8LKH2AH/?mibextid=wwXIfr",
  instagram: "https://www.instagram.com/radioportaldelsol?igsh=MTFuNmh0MzIxYmw4ag==",
  youtube: "https://youtube.com/@lapazmunicipio?si=kFMQ4KMYC86IzHsd",
}

export default function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const handleSocialClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const handleMenuClick = (target: string) => {
    setIsOpen(false)

    // Scroll suave a la sección
    setTimeout(() => {
      const element = document.getElementById(target)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  return (
    <>
      <Button onClick={() => setIsOpen(true)} variant="ghost" size="icon" className="text-[#fffffe] hover:bg-[#333440]">
        <Menu className="h-6 w-6" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-[#333440] bg-opacity-95">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4">
              <div className="text-[#fffffe] text-xl font-bold">Portal del Sol 88.1</div>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="icon"
                className="text-[#fffffe] hover:bg-[#acd600] hover:text-[#333440]"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            <nav className="flex-1 px-4">
              {menuItems.map((item, index) => (
                <div key={index} className="border-b border-gray-600 py-6">
                  <button
                    onClick={() => handleMenuClick(item.target)}
                    className="text-[#fffffe] text-left hover:text-[#acd600] transition-colors text-lg font-medium w-full"
                  >
                    {item.name}
                  </button>
                </div>
              ))}
            </nav>

            <div className="p-4 border-t border-gray-600">
              <div className="text-center mb-4">
                <p className="text-[#fffffe] text-sm mb-2">Síguenos en nuestras redes sociales</p>
              </div>
              <div className="flex justify-center space-x-4">
                <Button
                  onClick={() => handleSocialClick(socialLinks.facebook)}
                  variant="ghost"
                  size="icon"
                  className="text-[#fffffe] hover:text-[#acd600] border border-[#fffffe] rounded-full hover:border-[#acd600] transition-colors"
                  title="Síguenos en Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button
                  onClick={() => handleSocialClick(socialLinks.instagram)}
                  variant="ghost"
                  size="icon"
                  className="text-[#fffffe] hover:text-[#acd600] border border-[#fffffe] rounded-full hover:border-[#acd600] transition-colors"
                  title="Síguenos en Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button
                  onClick={() => handleSocialClick(socialLinks.youtube)}
                  variant="ghost"
                  size="icon"
                  className="text-[#fffffe] hover:text-[#acd600] border border-[#fffffe] rounded-full hover:border-[#acd600] transition-colors"
                  title="Síguenos en YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
