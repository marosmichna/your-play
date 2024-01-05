import { SectionContainer } from "./components";
import MainLayout from "./components/MainLayout/MainLayout";
import { AboutSection, HomeSection, GamesSection, AppSection, YourIdeaSection, ContactSection } from "./sections";
import { LayoutSectionIdEnum } from "./types";

const sections = [
  {
    sectionId: LayoutSectionIdEnum.home,
    component: <HomeSection />,
  },
  {
    sectionId: LayoutSectionIdEnum.about,
    component: <AboutSection />,
  },
  {
    sectionId: LayoutSectionIdEnum.games,
    component: <GamesSection />,
  },
  {
    sectionId: LayoutSectionIdEnum.app,
    component: <AppSection />,
  },
  {
    sectionId: LayoutSectionIdEnum.yourIdea,
    component: <YourIdeaSection />,
  },
  {
    sectionId: LayoutSectionIdEnum.contact,
    component: <ContactSection />,
  },
]

const App = () => {
  return (
    <MainLayout>
      {sections.map(({ component, sectionId }) => {
        return (
          <SectionContainer sectionId={sectionId} key={sectionId}>
            {component}
          </SectionContainer>
        )
      })}
    </MainLayout>
  )
}

export default App