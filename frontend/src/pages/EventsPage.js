import EventsList from "../components/EventsList";

const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: "Event 1",
    date: "26 feb 2022",
  },
  {
    id: 'e2',
    title: "Event 2",
    date: "27feb 2022",
  },
  {
    id: 'e3',
    title: "Event 3",
    date: "28 feb 2022",
  },
];

const EventsPage = () => {
  return <EventsList events={DUMMY_EVENTS}/>;
};

export default EventsPage;
