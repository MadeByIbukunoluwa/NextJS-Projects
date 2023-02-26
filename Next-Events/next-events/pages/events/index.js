import { getAllEvents } from "../../dummy-data"
import EventList from "../../components/events/event-list"
import EventSearch from '../../components/events/events-search'

function AllEventsPage(){
    const events = getAllEvents()
    return (
        <>
             <EventSearch/>
            <EventList items = {events} />
        </>
    )
}

export default AllEventsPage 