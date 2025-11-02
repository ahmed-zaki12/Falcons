import ResourcesHero from "../Components/ResourcesHero"
import Resources from "../Components/Resources"
import ResourcesSoftware from "../Components/ResourcesSoftware"

const ResourcesPage = () => {
  return (
    <section className="flex flex-col">
      <ResourcesHero />
      <Resources />
      <ResourcesSoftware/>
    </section>
  )
}
export default ResourcesPage
