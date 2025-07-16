"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Play, Pause, Volume2, VolumeX, Facebook, Instagram, Youtube, RotateCcw } from "lucide-react"

interface LivePlayerProps {
  streamUrl: string
  stationName: string
}

// Enlaces de redes sociales reales
const socialLinks = {
  facebook: "https://www.facebook.com/share/18R8LKH2AH/?mibextid=wwXIfr",
  instagram: "https://www.instagram.com/radioportaldelsol?igsh=MTFuNmh0MzIxYmw4ag==",
  youtube: "https://youtube.com/@lapazmunicipio?si=kFMQ4KMYC86IzHsd",
}

export default function LivePlayer({ streamUrl, stationName }: LivePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState([70])
  const [currentTime, setCurrentTime] = useState("0:00")
  const [error, setError] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement>(null)

  const handleSocialClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const togglePlay = async () => {
    if (!audioRef.current) return

    try {
      setError(null)
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        setIsLoading(true)
        await audioRef.current.play()
        setIsPlaying(true)
      }
    } catch (error) {
      console.error("Error playing audio:", error)
      setError("No se pudo conectar con la señal de radio")
    } finally {
      setIsLoading(false)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleVolumeChange = (newVolume: number[]) => {
    if (audioRef.current) {
      audioRef.current.volume = newVolume[0] / 100
      setVolume(newVolume)
    }
  }

  const handleReconnect = () => {
    if (audioRef.current) {
      audioRef.current.load()
      setError(null)
    }
  }

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => {
      if (isPlaying) {
        const minutes = Math.floor(audio.currentTime / 60)
        const seconds = Math.floor(audio.currentTime % 60)
        setCurrentTime(`${minutes}:${seconds.toString().padStart(2, "0")}`)
      }
    }

    const handleLoadStart = () => setIsLoading(true)
    const handleCanPlay = () => setIsLoading(false)
    const handleError = () => {
      setIsLoading(false)
      setIsPlaying(false)
      setError("Error de conexión")
    }
    const handlePlaying = () => {
      setIsPlaying(true)
      setIsLoading(false)
    }
    const handlePause = () => setIsPlaying(false)

    audio.addEventListener("loadstart", handleLoadStart)
    audio.addEventListener("canplay", handleCanPlay)
    audio.addEventListener("error", handleError)
    audio.addEventListener("timeupdate", updateTime)
    audio.addEventListener("playing", handlePlaying)
    audio.addEventListener("pause", handlePause)

    return () => {
      audio.removeEventListener("loadstart", handleLoadStart)
      audio.removeEventListener("canplay", handleCanPlay)
      audio.removeEventListener("error", handleError)
      audio.removeEventListener("timeupdate", updateTime)
      audio.removeEventListener("playing", handlePlaying)
      audio.removeEventListener("pause", handlePause)
    }
  }, [isPlaying])

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      <audio ref={audioRef} src={streamUrl} preload="none" crossOrigin="anonymous" />

      {/* Reproductor principal */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20">
        {/* Botón de reproducción principal */}
        <div className="text-center mb-6">
          <Button
            onClick={togglePlay}
            disabled={isLoading}
            className="w-20 h-20 rounded-full bg-[#acd600] hover:bg-[#9bc400] text-[#333440] shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-8 w-8 border-3 border-[#333440] border-t-transparent" />
            ) : isPlaying ? (
              <Pause className="h-8 w-8" />
            ) : (
              <Play className="h-8 w-8 ml-1" />
            )}
          </Button>
        </div>

        {/* Información de reproducción */}
        <div className="text-center mb-6">
          <div className="text-[#fffffe] text-lg font-medium mb-2">
            {isLoading ? "Conectando..." : isPlaying ? "Reproduciendo" : "Listo para reproducir"}
          </div>
          <div className="text-[#acd600] text-sm">{isPlaying ? currentTime : "0:00"}</div>
        </div>

        {/* Barra de progreso visual */}
        <div className="mb-6">
          <div className="w-full bg-white/20 rounded-full h-2">
            <div
              className="bg-[#acd600] h-2 rounded-full transition-all duration-300"
              style={{ width: isPlaying ? "100%" : "0%" }}
            ></div>
          </div>
        </div>

        {/* Controles de volumen */}
        <div className="flex items-center space-x-4 mb-6">
          <Button
            onClick={toggleMute}
            variant="ghost"
            size="icon"
            className="text-[#fffffe] hover:bg-white/20 rounded-full"
          >
            {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          </Button>
          <div className="flex-1">
            <Slider value={volume} onValueChange={handleVolumeChange} max={100} step={1} className="w-full" />
          </div>
          <span className="text-[#fffffe] text-sm w-8">{volume[0]}%</span>
        </div>

        {/* Error y reconexión */}
        {error && (
          <div className="text-center mb-4">
            <p className="text-red-400 text-sm mb-2">{error}</p>
            <Button onClick={handleReconnect} variant="ghost" size="sm" className="text-[#acd600] hover:bg-white/20">
              <RotateCcw className="h-4 w-4 mr-2" />
              Reintentar
            </Button>
          </div>
        )}
      </div>

      {/* Redes sociales */}
      <div className="flex justify-center space-x-4">
        <Button
          onClick={() => handleSocialClick(socialLinks.facebook)}
          variant="ghost"
          size="icon"
          className="bg-white/10 hover:bg-[#acd600] hover:text-[#333440] text-[#fffffe] rounded-full backdrop-blur-sm transition-all duration-300"
          title="Síguenos en Facebook"
        >
          <Facebook className="h-5 w-5" />
        </Button>
        <Button
          onClick={() => handleSocialClick(socialLinks.instagram)}
          variant="ghost"
          size="icon"
          className="bg-white/10 hover:bg-[#acd600] hover:text-[#333440] text-[#fffffe] rounded-full backdrop-blur-sm transition-all duration-300"
          title="Síguenos en Instagram"
        >
          <Instagram className="h-5 w-5" />
        </Button>
        <Button
          onClick={() => handleSocialClick(socialLinks.youtube)}
          variant="ghost"
          size="icon"
          className="bg-white/10 hover:bg-[#acd600] hover:text-[#333440] text-[#fffffe] rounded-full backdrop-blur-sm transition-all duration-300"
          title="Síguenos en YouTube"
        >
          <Youtube className="h-5 w-5" />
        </Button>
      </div>

      {/* Indicador de estado */}
      {isPlaying && (
        <div className="flex items-center justify-center space-x-2 animate-pulse">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <span className="text-[#fffffe] text-sm font-medium">TRANSMISIÓN EN VIVO</span>
        </div>
      )}
    </div>
  )
}
