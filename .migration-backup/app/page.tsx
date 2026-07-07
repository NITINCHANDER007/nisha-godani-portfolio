import { PageWrapper } from '@/components/layout/PageWrapper'
import { HeroSection } from '@/components/sections/home/HeroSection'
import { IdentityBridgeSection } from '@/components/sections/home/IdentityBridgeSection'
import { AboutSnapshotSection } from '@/components/sections/home/AboutSnapshotSection'
import { ResearchSnapshotSection } from '@/components/sections/home/ResearchSnapshotSection'
import { AwardsSpotlightSection } from '@/components/sections/home/AwardsSpotlightSection'
import { TeachingSnapshotSection } from '@/components/sections/home/TeachingSnapshotSection'
import { YouTubeSection } from '@/components/sections/home/YouTubeSection'
import { CollaborationsPreviewSection } from '@/components/sections/home/CollaborationsPreviewSection'
import { ConferencesPreviewSection } from '@/components/sections/home/ConferencesPreviewSection'
import { GalleryPreviewSection } from '@/components/sections/home/GalleryPreviewSection'
import { MmePreviewSection } from '@/components/sections/home/MmePreviewSection'
import { ContactFooterSection } from '@/components/sections/home/ContactFooterSection'

export default function HomePage() {
  return (
    <PageWrapper noPaddingTop>
      <HeroSection />
      <IdentityBridgeSection />
      <AboutSnapshotSection />
      <ResearchSnapshotSection />
      <AwardsSpotlightSection />
      <TeachingSnapshotSection />
      <YouTubeSection />
      <CollaborationsPreviewSection />
      <ConferencesPreviewSection />
      <GalleryPreviewSection />
      <MmePreviewSection />
      <ContactFooterSection />
    </PageWrapper>
  )
}
