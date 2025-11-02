import AboutHero from "../Components/AboutHero";
import AboutMission from "../Components/AboutMission";
import AboutVision from "../Components/AboutVision";
import Teams from "../Components/Teams";

const AboutPage = () => {
  return (
    <section className="flex flex-col">
      <AboutHero />
      <AboutMission />
      <AboutVision />
      <Teams />
    </section>
  )
}
export default AboutPage