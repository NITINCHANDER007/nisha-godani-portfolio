import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { Breadcrumb } from '@/components/layout/Breadcrumb'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { JsonLd } from '@/components/layout/JsonLd'
import { MmeHero } from '@/components/sections/mme/MmeHero'
import { AudienceGrid } from '@/components/sections/mme/AudienceGrid'
import { ClassFeatures } from '@/components/sections/mme/ClassFeatures'
import { DeliveryModes } from '@/components/sections/mme/DeliveryModes'
import { PastPrograms } from '@/components/sections/mme/PastPrograms'
import { Testimonials } from '@/components/sections/mme/Testimonials'
import { YouTubeChannelBlock } from '@/components/sections/mme/YouTubeChannelBlock'
import { MmeContactBlock } from '@/components/sections/mme/MmeContactBlock'
import { WhatsAppButton } from '@/components/interactive/WhatsAppButton'
import { mmeDetails } from '@/data/mme'
import { mmeMetadata } from '@/lib/metadata'
import { generateMMESchema } from '@/lib/schema'

export const metadata: Metadata = mmeMetadata()

export default function MakeMathsEasyPage() {
  const schema = generateMMESchema()

  return (
    <PageWrapper>
      <JsonLd data={schema} />
      <Breadcrumb items={[{ label: 'Make Maths Easy', href: '/make-maths-easy' }]} />
      <MmeHero />

      <SectionWrapper background="primary">
        <AudienceGrid />
      </SectionWrapper>

      <SectionWrapper background="secondary">
        <ClassFeatures />
      </SectionWrapper>

      <SectionWrapper background="primary">
        <DeliveryModes />
      </SectionWrapper>

      <SectionWrapper background="secondary">
        <PastPrograms />
      </SectionWrapper>

      <SectionWrapper background="primary">
        <Testimonials />
      </SectionWrapper>

      <SectionWrapper background="secondary">
        <YouTubeChannelBlock />
      </SectionWrapper>

      <SectionWrapper background="primary">
        <MmeContactBlock />
      </SectionWrapper>

      {/* Floating WhatsApp — mobile only */}
      <WhatsAppButton
        variant="floating"
        phone={mmeDetails.whatsapp}
        message={mmeDetails.whatsappMessage}
      />
    </PageWrapper>
  )
}
