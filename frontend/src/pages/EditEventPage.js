import { useRouteLoaderData } from 'react-router-dom';
import EventForm from '../components/EventForm';

const EditEventPage = () => {
  const data = useRouteLoaderData('eventDetail');

  return <EventForm event={data.event} method='PATCH'/>;
};

export default EditEventPage;
