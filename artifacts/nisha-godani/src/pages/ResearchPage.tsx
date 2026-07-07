import { PageWrapper } from '@/components/layout/PageWrapper'
import { Breadcrumb } from '@/components/layout/Breadcrumb'
import { ResearchHero } from '@/components/sections/research/ResearchHero'
import { ResearchAreasGrid } from '@/components/sections/research/ResearchAreasGrid'
import { ResearchTimeline } from '@/components/sections/research/ResearchTimeline'
import { FeaturedPapers } from '@/components/sections/research/FeaturedPapers'
import { CollaborationNetwork } from '@/components/sections/research/CollaborationNetwork'

export default function ResearchPage() {
  return (
    <PageWrapper>
      <Breadcrumb items={[{ label: 'Research', href: '/research' }]} />
      <ResearchHero />
      <ResearchAreasGrid />
      <ResearchTimeline />
      <FeaturedPapers />
      <CollaborationNetwork />
    </PageWrapper>
  )
}
