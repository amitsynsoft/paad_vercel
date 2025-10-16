import ImageGuard from '@/_components/manar/_ui/image-guard/ImageGuard.component'
import { ArtistProfileProps } from './ArtistProfile.type'
import { Chip } from '@heroui/react'

export const ArtistProfile: React.FC<ArtistProfileProps> = ({ name, about, tags, imageUrl, workPlace, description }) => {
  return (
    <>
      <div className="max-w-4xl mx-auto mt-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-16">
          {/* Left Column: Text Content (takes 3/5 of width on lg screens) */}
          <div className="lg:col-span-3">
            <h1 className="text-base sm:text-lg font-bold text-foreground tracking-tight">{name}</h1>

            <div className="mt-3 text-base text-foreground font-bold">
              <p>{about}</p>
              <p>{workPlace}</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {tags?.map((tag) => (
                <Chip
                  key={tag}
                  variant="bordered"
                  color="primary"
                  size="md"
                  classNames={{
                    content: 'font-bold text-sm',
                  }}
                >
                  {tag}
                </Chip>
              ))}
            </div>
          </div>

          {/* Right Column: Image (takes 2/5 of width on lg screens) */}
          <div className="lg:col-span-2 mt-10 lg:mt-0 relative w-full h-120">
            <ImageGuard src={imageUrl} alt={'artist image'} width={500} fill height={500} className="object-cover top-center" />
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="mt-8 text-foreground text-base leading-relaxed prose text-semibold">{description}</div>
        </div>
      </div>
    </>
  )
}
