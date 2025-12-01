import cn from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import backgroundImage from '@/../public/images/biennial/bg-artist-card.webp'
import { paths } from '@/navigate/paths'

const ArtistCard = ({ hasOverlay = true, title, images, slug, ...props }: any) => {
  return (
    <>
      <Link href={paths.biennialArtistDetail(slug) || '#'} scroll={false}>
        <div className={cn(props.className, 'relative group', { 'pointer-events-none': false })}>
          <div className="overlay-img-artist aspect-square flex justify-center items-center px-5 py-10">
            <span className={'aspect-square relative w-[90%] rounded-full overflow-hidden'}>
              <span
                className={`cursor-pointer pointer-events-none absolute flex justify-center items-center w-full h-full bg-primary/40 
                  rounded-full m-auto z-10 transition-transform duration-300 ease-in-out group-hover:indent-0 group-hover:rounded-full 
                  group-hover:bg-primary group-hover:scale-[.30]`}
              >
                {/* TODO: remove read more  */}
                <span className="select-none scale-[3] opacity-0 group-hover:opacity-100 group-hover:transition-opacity group-hover:duration-300">Read More</span>
              </span>

              {images?.card && (
                <Image
                  className={`bg-white ${hasOverlay ? 'group-hover:scale-105' : ''} transition-transform duration-150`}
                  src={images?.card?.src}
                  width={images?.card?.width}
                  height={images?.card?.height}
                  alt={title}
                  sizes="100vw"
                />
              )}
            </span>
          </div>

          {title && <h6 className={`text-medium underline-offset-0 mt-3 group-hover:underline ${hasOverlay ? 'group-hover:underline-offset-8' : ''} transition-[text-underline-offset] duration-75`}>{title}</h6>}
        </div>
      </Link>

      <style jsx global>{`
        .overlay-img-artist {
          background-image: url('${backgroundImage.src}');
          background-size: cover;
          background-position: center;
        }
      `}</style>
    </>
  )
}

export default ArtistCard
