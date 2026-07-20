import { PageWrapper } from '@/components/layout/PageWrapper'
import { Breadcrumb } from '@/components/layout/Breadcrumb'
import { ResearchHero } from '@/components/sections/research/ResearchHero'
import { ResearchAreasGrid } from '@/components/sections/research/ResearchAreasGrid'
import { ResearchTimeline } from '@/components/sections/research/ResearchTimeline'
import { FeaturedPapers } from '@/components/sections/research/FeaturedPapers'
import { CollaborationNetwork } from '@/components/sections/research/CollaborationNetwork'
import { ResearchCTA } from '@/components/sections/research/ResearchCTA'

export default function ResearchPage() {
  return (
    <PageWrapper>
      

      <ResearchHero />
      <ResearchAreasGrid />
      <ResearchTimeline />
      <FeaturedPapers />
      <CollaborationNetwork />
      <ResearchCTA />
    </PageWrapper>
  )
}
