"use client"

import { useEffect, useState } from "react"

export default function Clock() {
  const [time, setTime] = useState<Date | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setTime(new Date())

    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  // Format hours to ensure it's always 2 digits
  const hours = time?.getHours().toString().padStart(2, "0") || "00"
  const minutes = time?.getMinutes().toString().padStart(2, "0") || "00"
  const seconds = time?.getSeconds().toString().padStart(2, "0") || "00"

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-5xl  font-bold text-purple-200 font-mono tracking-wider mb-4">
        {!mounted ? (
          // Static placeholder during server rendering
          <div className="opacity-0">00:00:00</div>
        ) : (
          // Actual clock only rendered client-side
          <>
            <span className="inline-block w-[1.1em] text-center">{hours}</span>
            <span className="animate-pulse">:</span>
            <span className="inline-block w-[1.1em] text-center">{minutes}</span>
            <span className="animate-pulse">:</span>
            <span className="inline-block w-[1.1em] text-center">{seconds}</span>
          </>
        )}
      </div>
    </div>
  )
}

