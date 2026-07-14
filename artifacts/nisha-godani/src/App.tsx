import { Route, Switch, Router as WouterRouter } from 'wouter'
import { ReducedMotionProvider } from '@/components/providers/ReducedMotionProvider'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { MotionProvider } from '@/components/providers/MotionProvider'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { SkipToContent } from '@/components/ui/SkipToContent'
import { ScrollToTop } from '@/components/interactive/ScrollToTop'

import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import ResearchPage from '@/pages/ResearchPage'
import PublicationsPage from '@/pages/PublicationsPage'
import AwardsPage from '@/pages/AwardsPage'
import TeachingPage from '@/pages/TeachingPage'
import GalleryPage from '@/pages/GalleryPage'
import MakeMathsEasyPage from '@/pages/MakeMathsEasyPage'
import ContactPage from '@/pages/ContactPage'
import NotFoundPage from '@/pages/NotFoundPage'

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/research" component={ResearchPage} />
      <Route path="/publications" component={PublicationsPage} />
      <Route path="/awards" component={AwardsPage} />
      <Route path="/teaching" component={TeachingPage} />
      <Route path="/gallery" component={GalleryPage} />
      <Route path="/make-maths-easy" component={MakeMathsEasyPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFoundPage} />
    </Switch>
  )
}

function App() {
  return (
    <ReducedMotionProvider>
      <ThemeProvider>
        <MotionProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
            <SkipToContent />
            <ScrollProgress />
            <Navbar />

            <ScrollToTop />

            <Router />
            <Footer />
          </WouterRouter>
        </MotionProvider>
      </ThemeProvider>
    </ReducedMotionProvider>
  )
}

export default App
