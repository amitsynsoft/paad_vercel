'use client'
import React from 'react'
import rehypeRaw from 'rehype-raw'
import ReactMarkdown from 'react-markdown'
interface VideoContentBlockProps {
  data: {
    url?: string
    title?: string
    markdown?: string
    autoplay?: boolean
    loop?: boolean
    muted?: boolean
  }
}

const VideoContentBlock: React.FC<VideoContentBlockProps> = ({ data }) => {
  const { url, title = 'manar abu dhabi', markdown, autoplay = true, loop = true, muted = true } = data

  if (!url && !markdown) return null

  return (
    <section className="py-24 px-6 md:px-10 ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* Left: Text content */}
        <div className="text-left text-foreground text-base space-y-5 leading-relaxed"> {markdown && <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>}</div>

        {/* Right: Slanted video container */}
        {url && (
          <div className="relative flex justify-center">
            <div className="relative w-[90%] max-w-[700px] aspect-[4/3] overflow-hidden shadow-xl clip-manar">
              <video title={title} autoPlay={autoplay} loop={loop} muted={muted} playsInline className="w-full h-full object-cover">
                <source src={url} type="video/mp4" />
                {/* TODO: hardcoded */}
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}
      </div>

      {/* Right-slanted shape */}
      <style jsx>{`
        .clip-manar {
          /* Perfect match for that screenshot */
          clip-path: polygon(0% 0%, 60% 0%, 100% 55%, 100% 75%, 30% 100%, 0% 80%);
          background: black;
        }
      `}</style>
    </section>
  )
}

export default VideoContentBlock
