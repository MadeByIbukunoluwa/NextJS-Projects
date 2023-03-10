import { useRouter } from "next/router"
import EventList from "../../components/events/event-list"
import { getFilteredEvents } from "../../dummy-data"
import ResultsTitle from "../../components/events/results-title"
import { Fragment } from "react"
import Button from "../../components/ui/button"

export default function FilteredEventsPage(){
    const router = useRouter()

    const filterData = router.query.slug 

    if (!filterData) {
        return <p className="center">Loading...</p>
    }

    const filteredYear = filterData[0]
    const filteredMonth = filterData[1]

    const numYear = +filteredYear
    const numMonth = +filteredMonth 

    if(!isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
        return (
          <Fragment>
            <p> Invalid filter. Please adjust your values </p>
            <Button link="/events">Show all Events</Button>
          </Fragment>
        );
    }
    const filteredEvents = getFilteredEvents({
        year:numYear,
        month:numMonth 
    })
    if (filteredEvents || filteredEvents.length === 0) {
        return <p>No events found for the chosen filter </p>
    }
    const date = new Date(numYear, numMonth - 1 )

    return (
        <div>
            <ResultsTitle date = {date} />
            <EventList items ={filteredEvents}/>
        </div>
    )
}