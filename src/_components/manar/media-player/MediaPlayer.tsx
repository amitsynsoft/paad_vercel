'use client'

import { Button } from '@heroui/react'
import { Play, Pause } from 'lucide-react'
import { useRef, useState } from 'react'
import Section from '../_ui/section/Section'
import Image from 'next/image'
import { ManarButton } from '../_ui/buttons/ManarButton'

export default function MediaPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleTimeUpdate = () => {
    const audio = audioRef.current
    if (audio) {
      setProgress(audio.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    const audio = audioRef.current
    if (audio) {
      setDuration(audio.duration)
    }
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current
    if (audio) {
      audio.currentTime = Number(e.target.value)
      setProgress(Number(e.target.value))
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  return (
    <Section>
      <h2 className="font-bold text-lg text-primary mb-4">Media</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        {/* 🎧 Audio Player */}
        <div className="flex items-center gap-2 border-2 border-primary rounded-full p-2 h-16 w-full">
          <Button isIconOnly radius="full" variant="light" onPress={togglePlay} className="text-primary">
            {isPlaying ? <Image src="/images/ic_pause-primary.svg" width={24} height={24} alt="pause" /> : <Image src="/images/ic_play-primary.svg" width={24} height={24} alt="play" />}
          </Button>

          <input type="range" min="0" max={duration} value={progress} onChange={handleSeek} className="w-full accent-primary" />

          <span className="text-sm text-primary min-w-[50px] text-right">{formatTime(duration)}</span>

          <audio ref={audioRef} src="/sample-audio.mp3" onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleLoadedMetadata} />
        </div>

        {/* 🎥 Video Player */}
        <div className="relative bg-black w-full aspect-video flex items-center justify-center overflow-hidden">
          <video src="/sample-video.mp4" className="w-full aspect-video overflow-hidden" />
          <ManarButton isIconOnly radius="full" className="w-20 h-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-center flex items-center justify-center text-primary z-10">
            <Image src="/images/ic_play-primary.svg" width={100} height={100} alt="play" />
          </ManarButton>
        </div>
      </div>
    </Section>
  )
}
