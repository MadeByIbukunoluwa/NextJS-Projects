import { getFeaturedEvents } from "../dummy-data"
import EventList from "../components/events/event-list";


export default function HomePage() { 
  const featuredEvents = getFeaturedEvents()
  return (
    <div>
          <ul>
              <EventList items = {featuredEvents} />
          </ul>
    </div>
  )
}