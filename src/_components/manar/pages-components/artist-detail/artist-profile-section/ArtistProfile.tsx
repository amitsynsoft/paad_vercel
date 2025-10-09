import ImageGuard from '@/_components/manar/_ui/image-guard/ImageGuard.component'
import { ArtistProfileProps } from './ArtistProfile.type'

export const ArtistProfile: React.FC<ArtistProfileProps> = ({ name, birthYear, birthPlace, residence, tags, imageUrl, imageAlt, bio, backLinkUrl }) => {
  return (
    <>
      <div className="max-w-4xl mx-auto mt-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-16">
          {/* Left Column: Text Content (takes 3/5 of width on lg screens) */}
          <div className="lg:col-span-3">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">{name}</h1>

            <div className="mt-3 text-base text-foreground">
              <p>
                b. {birthYear}, {birthPlace}
              </p>
              <p>Lives and works in {residence}</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="bg-transparent border border-primary text-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Image (takes 2/5 of width on lg screens) */}
          <div className="lg:col-span-2 mt-10 lg:mt-0 relative w-full h-120">
            <ImageGuard src={imageUrl} alt={imageAlt} fill className="object-cover" />
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="mt-8 text-foreground text-base leading-relaxed prose">{bio}</div>
        </div>
      </div>
    </>
  )
}
