import { useState } from "react"

interface Program {
  id: string
  name: string
  time: string
  hosts: string[]
  image: string
  isLive?: boolean
}

interface DailyPrograms {
  day: string
  programs: Program[]
}

const weeklyPrograms: DailyPrograms[] = [
  {
    day: "LUNES",
    programs: [
      {
        id: "1",
        name: "El Portal Informativo",
        time: "08:00 a 10:00 hs",
        hosts: ["Mariela Neira", "Mariangeles Maturano"],
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        id: "2",
        name: "El Break de la Mañana",
        time: "10:00 a 13:00 hs",
        hosts: ["Enrique Chaves", "Carlos Morales"],
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        id: "3",
        name: "Mateando con Nuestra Gente",
        time: "13:00 a 15:00 hs",
        hosts: ["Carlos 'Tito' Nieva"],
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        id: "4",
        name: "Fuera de Lugar",
        time: "17:00 a 19:00 hs (Horario Invierno)",
        hosts: ["Enrique Chavez"],
        image: "/placeholder.svg?height=200&width=400",
        isLive: true,
      },
      {
        id: "5",
        name: "Mil Canciones",
        time: "19:00 a 21:00 hs (Horario Invierno)",
        hosts: ["Cecilia Arpajou"],
        image: "/placeholder.svg?height=200&width=400",
      },
    ],
  },
  {
    day: "MARTES",
    programs: [
      {
        id: "6",
        name: "El Portal Informativo",
        time: "08:00 a 10:00 hs",
        hosts: ["Mariela Neira", "Mariangeles Maturano"],
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        id: "7",
        name: "El Break de la Mañana",
        time: "10:00 a 13:00 hs",
        hosts: ["Enrique Chaves", "Carlos Morales"],
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        id: "8",
        name: "Mateando con Nuestra Gente",
        time: "13:00 a 15:00 hs",
        hosts: ["Carlos 'Tito' Nieva"],
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        id: "9",
        name: "De Regreso a Casa",
        time: "19:00 a 21:00 hs (Horario Invierno)",
        hosts: ["Alejandra Funes"],
        image: "/placeholder.svg?height=200&width=400",
      },
    ],
  },
  {
    day: "MIÉRCOLES",
    programs: [
      {
        id: "10",
        name: "El Portal Informativo",
        time: "08:00 a 10:00 hs",
        hosts: ["Mariela Neira", "Mariangeles Maturano"],
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        id: "11",
        name: "El Break de la Mañana",
        time: "10:00 a 13:00 hs",
        hosts: ["Enrique Chaves", "Carlos Morales"],
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        id: "12",
        name: "Mateando con Nuestra Gente",
        time: "13:00 a 15:00 hs",
        hosts: ["Carlos 'Tito' Nieva"],
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        id: "13",
        name: "Mil Canciones",
        time: "19:00 a 21:00 hs (Horario Invierno)",
        hosts: ["Cecilia Arpajou"],
        image: "/placeholder.svg?height=200&width=400",
      },
    ],
  },
  {
    day: "JUEVES",
    programs: [
      {
        id: "14",
        name: "El Portal Informativo",
        time: "08:00 a 10:00 hs",
        hosts: ["Mariela Neira", "Mariangeles Maturano"],
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        id: "15",
        name: "El Break de la Mañana",
        time: "10:00 a 13:00 hs",
        hosts: ["Enrique Chaves", "Carlos Morales"],
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        id: "16",
        name: "Mateando con Nuestra Gente",
        time: "13:00 a 15:00 hs",
        hosts: ["Carlos 'Tito' Nieva"],
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        id: "17",
        name: "De Regreso a Casa",
        time: "19:00 a 21:00 hs (Horario Invierno)",
        hosts: ["Alejandra Funes"],
        image: "/placeholder.svg?height=200&width=400",
      },
    ],
  },
  {
    day: "VIERNES",
    programs: [
      {
        id: "18",
        name: "El Portal Informativo",
        time: "08:00 a 10:00 hs",
        hosts: ["Mariela Neira", "Mariangeles Maturano"],
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        id: "19",
        name: "El Break de la Mañana",
        time: "10:00 a 13:00 hs",
        hosts: ["Enrique Chaves", "Carlos Morales"],
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        id: "20",
        name: "Mateando con Nuestra Gente",
        time: "13:00 a 15:00 hs",
        hosts: ["Carlos 'Tito' Nieva"],
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        id: "21",
        name: "Mil Canciones",
        time: "19:00 a 21:00 hs (Horario Invierno)",
        hosts: ["Cecilia Arpajou"],
        image: "/placeholder.svg?height=200&width=400",
      },
    ],
  },
  {
    day: "SÁBADO",
    programs: [
      {
        id: "22",
        name: "Programa Parroquia San José",
        time: "09:00 a 10:00 hs",
        hosts: ["Jorge Leiva", "Nicolás de Castro", "Alba Lobato"],
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        id: "23",
        name: "El Portal Deportivo",
        time: "10:00 a 11:30 hs",
        hosts: ["Oscar 'Gato' Demateis"],
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        id: "24",
        name: "Atardecer Campero",
        time: "11:30 a 15:00 hs",
        hosts: ["Matías 'Jano' Sosa"],
        image: "/placeholder.svg?height=200&width=400",
      },
    ],
  },
  {
    day: "DOMINGO",
    programs: [
      {
        id: "25",
        name: "Sabor Latino",
        time: "09:00 a 13:00 hs",
        hosts: ["Enrique Chaves"],
        image: "/placeholder.svg?height=200&width=400",
      },
    ],
  },
]

export default function ProgramSchedule() {
  const [openDay, setOpenDay] = useState<string | null>(null)

  const toggleDay = (day: string) => {
    setOpenDay(openDay === day ? null : day)
  }

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-[#fffffe] mb-6">Programación</h2>
      {weeklyPrograms.map((day) => (
        <div key={day.day} className="space-y-2">
          <button
            className="w-full text-left bg-[#444555] hover:bg-[#555666] text-[#acd600] px-4 py-2 rounded font-semibold uppercase"
            onClick={() => toggleDay(day.day)}
          >
            {day.day}
          </button>
          {openDay === day.day && (
            <div className="space-y-4">
              {day.programs.map((program) => (
                <div
                  key={program.id}
                  className="relative bg-gradient-to-r from-[#acd600] via-[#333440] to-[#333440] rounded-lg overflow-hidden"
                >
                  <div className="flex items-center p-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="text-2xl font-bold text-[#fffffe]">{program.name}</h4>
                      </div>
                      <p className="text-[#fffffe] opacity-90 mb-2">{program.time}</p>
                      <p className="text-[#fffffe] opacity-75 text-sm">
                        Con: {program.hosts.join(", ")}
                      </p>
                    </div>
                    <div className="flex-shrink-0 ml-6">
                      <div className="text-right">
                        <div className="text-[#fffffe] font-bold">
                          <span className="text-2xl">Portal</span>
                          <span className="bg-[#acd600] text-[#333440] px-1 rounded ml-1">88.1</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#acd600] to-transparent opacity-20"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#acd600] transform rotate-45 translate-x-8 translate-y-8 opacity-30"></div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
