"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

interface RadioPlayerProps {
  streamUrl: string
}

export default function RadioPlayer({ streamUrl }: RadioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(0.7)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = async () => {
    if (!audioRef.current) return

    try {
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
      alert("No se pudo conectar con la señal de radio. Intenta nuevamente.")
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

  const handleVolumeChange = (newVolume: number) => {
    if (audioRef.current) {
      audioRef.current.volume = newVolume
      setVolume(newVolume)
    }
  }

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleLoadStart = () => setIsLoading(true)
    const handleCanPlay = () => setIsLoading(false)
    const handleError = () => {
      setIsLoading(false)
      setIsPlaying(false)
      console.error("Error loading radio stream")
    }

    audio.addEventListener("loadstart", handleLoadStart)
    audio.addEventListener("canplay", handleCanPlay)
    audio.addEventListener("error", handleError)

    return () => {
      audio.removeEventListener("loadstart", handleLoadStart)
      audio.removeEventListener("canplay", handleCanPlay)
      audio.removeEventListener("error", handleError)
    }
  }, [])

  return (
    <div className="flex items-center space-x-4">
      <audio ref={audioRef} src={streamUrl} preload="none" crossOrigin="anonymous" />

      <Button
        onClick={togglePlay}
        disabled={isLoading}
        className="bg-[#acd600] hover:bg-[#9bc400] text-[#333440] font-bold px-6 py-2 rounded-full flex items-center space-x-2"
      >
        {isLoading ? (
          <div className="animate-spin rounded-full h-4 w-4 border-2 border-[#333440] border-t-transparent" />
        ) : isPlaying ? (
          <Pause className="h-4 w-4" />
        ) : (
          <Play className="h-4 w-4" />
        )}
        <span>{isLoading ? "Conectando..." : isPlaying ? "EN VIVO" : "ESCUCHAR EN VIVO"}</span>
      </Button>

      <Button onClick={toggleMute} variant="ghost" size="icon" className="text-[#fffffe] hover:bg-[#333440]">
        {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
      </Button>

      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={volume}
        onChange={(e) => handleVolumeChange(Number.parseFloat(e.target.value))}
        className="w-20 accent-[#acd600]"
      />
    </div>
  )
}
