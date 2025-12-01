import ImageGuard from '@/_components/_globalUI/image-guard/ImageGuard.component'
import { ArtistProfileProps } from './ArtistProfile.type'
import { Chip } from '@heroui/react'
import BackButton from '@/_components/manar/pageHeaders/BackButton'
import { paths } from '@/navigate/paths'
import { useTranslations } from 'next-intl'
import Section from '@/_components/manar/_ui/section/Section'
import { placeholderImageLoading } from '@/utils'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

export const ArtistProfile: React.FC<ArtistProfileProps> = ({ name, about, tags, imageUrl, workPlace, markdown }) => {
  const t = useTranslations('Manar.ArtistDetail')
  return (
    <Section className="!pt-10 !pb-16">
      <div className="max-w-4xl mx-auto mt-12 lg:mt-0">
        <BackButton label={t('AllArtists')} link={paths.manarArtists()} />
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-16 mt-4">
          {/* Left Column: Text Content (takes 3/5 of width on lg screens) */}
          <div className="lg:col-span-2">
            <h1 className="text-lg sm:text-base font-bold text-foreground tracking-tight">{name}</h1>

            <div className="mt-2 lg:mt-6 text-base text-foreground font-bold">
              <p>{about}</p>
              <p>{workPlace}</p>
            </div>
            {tags?.length > 0 && (
              <div className="mt-6 lg:mt-4 flex flex-wrap gap-2">
                {tags?.map((tag, index) => (
                  <Chip
                    key={index}
                    variant="bordered"
                    color="primary"
                    size="md"
                    classNames={{
                      content: 'font-bold text-caption',
                    }}
                  >
                    {tag}
                  </Chip>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Image (takes 2/5 of width on lg screens) */}
          <div className="lg:col-span-3 mt-12 lg:mt-0 relative ml-auto w-full max-w-110 h-140">
            <ImageGuard src={imageUrl} alt={'artist image'} fill className="object-cover top-center" placeholder="blur" blurDataURL={placeholderImageLoading} />
          </div>
        </div>
        {/* <div className="max-w-4xl mx-auto">
          <div className="mt-8 text-foreground text-[18px] md:text-[25px] leading-6 md:leading-8 prose text-semibold">{description}</div>
        </div> */}

        <div className="max-w-4xl mx-auto mt-24 text-foreground text-[18px] md:text-[25px] leading-6 md:leading-8 prose text-semibold">
          <ReactMarkdown rehypePlugins={[rehypeRaw]} components={{ p: ({ node, ...props }) => <p {...props} className="mb-4" /> }}>
            {markdown}
          </ReactMarkdown>
        </div>
      </div>
    </Section>
  )
}
