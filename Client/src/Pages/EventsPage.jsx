import EventsHero from "../Components/EventsHero"
import Events from "../Components/Events"
import EventsCategories from "../Components/EventsCategories"

const EventsPage = () => {
  return (
    <section className="flex flex-col">
      <EventsHero />
      <Events />
      <EventsCategories />
    </section>
  )
}
export default EventsPage
