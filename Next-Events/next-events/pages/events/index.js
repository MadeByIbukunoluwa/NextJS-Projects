import { useRouter } from "next/router"
import { getAllEvents } from "../../dummy-data"
import EventList from "../../components/events/event-list"
import EventSearch from '../../components/events/events-search'

function AllEventsPage(){
    const events = getAllEvents()
    const router = useRouter()
    function findEventsHandler(year,month){
        // const fullPath = `events/${year}/${month}`;

        
        router.push(`events/${year}/${month}`)
    }
    return (
        <>
            <EventSearch onSearch ={findEventsHandler}/>
            <EventList items = {events} />
        </>
    )
}

export default AllEventsPage 