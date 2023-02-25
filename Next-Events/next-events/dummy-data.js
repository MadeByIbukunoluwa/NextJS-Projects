



const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: "Programming for everyone",
    description:
      "Everyone can learn to code! Yes, everyone! In this live event we are going to have a lot of activties",
    location: "Somestreet 25 12345 San Somewhero",
    date: "2023-05-29",
    image: "images/coding-event.jpg",
    isFeatured: false,
  },
  {
    id: 'e2',
    title: "Networking for introverts",
    description:
      "We know, networking is no fun if you are an introvert person. That's why we came to this wonderful event",
    location: "New Wall Street 5, 98765 New Work",
    date: "2023-05-29",
    image: "images/coding-event.jpg",
    isFeatured: false,
  },
  {
    id: 'e3',
    title: "Networking for extroverts",
    description:
      "We know: Netwokring is no fun if you are an introvert person. Thats why we came",
    location: "Somestreet 25 12345 San Somewhero",
    date: "2023-05-29",
    image: "images/coding-event.jpg",
    isFeatured: true,
  },
  {
    id: 'e4',
    title: "Programming for everyone",
    description:
      "You probably need no help with networking in general. But focusing your energy",
    location: "Somestreet 25 12345 San Somewhero",
    date: "2023-05-29",
    image: "images/coding-event.jpg",
    isFeatured: true,
  },
];


export function getFeaturedEvents () {
    return DUMMY_EVENTS.filter((event)=> event.isFeatured)
}

export function getAllEvents() {
    return DUMMY_EVENTS
}

export function getFilteredEvents (dateFilter) {
    const {year,month} = dateFilter

    let filteredEvents = DUMMY_EVENTS.filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
      );
    });
}

