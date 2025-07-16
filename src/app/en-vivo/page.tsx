import LivePlayer from "@/components/live-player"
import Link from "next/link"
import { ArrowLeft, Radio, Headphones, Music } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function EnVivoPage() {
  // Misma URL que en la página principal
  const RADIO_STREAM_URL = "https://streaming.radiosenlinea.com.ar/8080/stream"

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#333440] via-[#2a2a35] to-[#1a1a1a] overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#acd600] rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#acd600] rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#acd600] rounded-full opacity-3 blur-3xl"></div>
      </div>

      {/* Header con navegación */}
      <header className="relative z-10 flex items-center justify-between p-6">
        {/* Back Button */}
        <Link href="/">
          <Button
            variant="ghost"
            size="icon"
            className="text-[#fffffe] hover:bg-[#acd600] hover:text-[#333440] rounded-full transition-all duration-300 shadow-lg backdrop-blur-sm bg-white/10"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>

        {/* Logo principal en el header */}
        <div className="flex items-center space-x-4">
          <Image
            src="/img/COLOR N HORIZONTAL.png"             alt="Portal del Sol 88.1 FM"
            width={200}
            height={60}
            className="h-8 md:h-10 w-auto object-contain"
            priority
          />
        </div>

        {/* Indicador EN VIVO */}
        <div className="flex items-center space-x-2 bg-red-500 px-3 py-1 rounded-full">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <span className="text-white text-sm font-bold">EN VIVO</span>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-4">
        {/* Logo principal grande */}
        <div className="text-center mb-8">
          <div className="mb-6 relative">
            <Image
              src="/img/COLOR N.png"
              alt="LA 88 Portal del Sol"
              width={300}
              height={300}
              className="mx-auto w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-2xl"
              priority
            />
            {/* Efecto de brillo */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse rounded-full"></div>
          </div>

          {/* Texto principal */}
          <h1 className="text-3xl md:text-5xl font-bold text-[#fffffe] mb-2 drop-shadow-lg">Estás escuchando</h1>
          <h2 className="text-xl md:text-2xl text-[#acd600] font-semibold mb-6">Portal del Sol 88.1 FM</h2>

          {/* Información adicional */}
          <div className="flex items-center justify-center space-x-6 text-[#fffffe] opacity-75 mb-8">
            <div className="flex items-center space-x-2">
              <Radio className="h-4 w-4" />
              <span className="text-sm">La Paz, Argentina</span>
            </div>
            <div className="flex items-center space-x-2">
              <Music className="h-4 w-4" />
              <span className="text-sm">88.1 FM</span>
            </div>
            <div className="flex items-center space-x-2">
              <Headphones className="h-4 w-4" />
              <span className="text-sm">24/7</span>
            </div>
          </div>
        </div>

        {/* Reproductor de audio */}
        <LivePlayer streamUrl={RADIO_STREAM_URL} stationName="PORTAL DEL SOL 88.1" />

        {/* Información adicional */}
        <div className="mt-8 text-center">
          <p className="text-[#fffffe] opacity-60 text-sm max-w-md">
            Disfruta de la mejor música, noticias locales y entretenimiento las 24 horas del día.
          </p>
        </div>
      </main>

      {/* Footer con logo horizontal */}
      <footer className="relative z-10 p-6 text-center">
        <Image
          src="/img/COLOR V HORIZONTAL.png"
          alt="88.1 Portal del Sol"
          width={250}
          height={80}
          className="mx-auto h-8 w-auto object-contain opacity-60"
        />
      </footer>
    </div>
  )
}
