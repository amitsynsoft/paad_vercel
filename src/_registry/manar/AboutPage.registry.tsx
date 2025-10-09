'use client'

import PageBanner from '@/_components/manar/pages-components/about/page-banner/PageBanner'
import VideoContentBlock from '@/_components/manar/pages-components/about/video-content-block/VideoContentBlock'
import MarkdownRenderer from '@/_components/manar/pages-components/about/markdown-renderer/MarkdownRenderer'
import InfoContentList from '@/_components/manar/pages-components/about/info-content-list/InfoContentList'

export const AboutPageRegistry: Record<string, React.FC<{ data: any }>> = {
  'page-banner': PageBanner,
  'video-content-block': VideoContentBlock,
  'markdown-renderer': MarkdownRenderer,
  'info-content-list': InfoContentList,
}
