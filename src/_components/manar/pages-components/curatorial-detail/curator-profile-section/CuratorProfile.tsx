import ImageGuard from '@/_components/_globalUI/image-guard/ImageGuard.component'

import { useTranslations } from 'next-intl'
import Section from '@/_components/manar/_ui/section/Section'
import { placeholderImageLoading } from '@/utils'
import { CuratorProfileProps } from './CuratorProfile.type'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import BackButton from '@/_components/manar/pageHeaders/BackButton'
import { paths } from '@/navigate/paths'

export const CuratorProfile: React.FC<CuratorProfileProps> = ({ name, about, imageUrl, workPlace, description = '', residence }) => {
  const t = useTranslations('Manar.UnderConstruction')
  return (
    <Section className="!pt-10 !pb-16">
      <div className="max-w-4xl mx-auto mt-12 lg:mt-0">
        <BackButton label={t('buttonText')} link={paths.manarHome() + '#curatorial-team'} />
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-16 mt-4">
          {/* Left Column: Text Content (takes 3/5 of width on lg screens) */}
          <div className="lg:col-span-2">
            <h1 className="text-lg sm:text-base font-bold text-foreground tracking-tight">{name}</h1>

            <div className="mt-2 lg:mt-6 text-base text-foreground font-bold">
              <p>{about}</p>
              <p>{residence}</p>
              <p>{workPlace}</p>
            </div>
          </div>

          {/* Right Column: Image (takes 2/5 of width on lg screens) */}
          <div className="lg:col-span-3 mt-12 lg:mt-0 relative ml-auto w-full max-w-110 h-140">
            <ImageGuard src={imageUrl} alt={'artist image'} fill className="object-cover top-center" placeholder="blur" blurDataURL={placeholderImageLoading} />
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-20 text-foreground text-[18px] md:text-[25px] leading-6 md:leading-8 prose text-semibold">
          <ReactMarkdown rehypePlugins={[rehypeRaw]} components={{ p: ({ node, ...props }) => <p {...props} className="mb-4" /> }}>
            {description}
          </ReactMarkdown>
        </div>
      </div>
    </Section>
  )
}
