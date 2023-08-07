import { Outlet } from 'react-router-dom';
import EventsNavigation from '../components/EventsNavigation';

const EventRoot = () => {
    return <>
        <EventsNavigation />
        <div>
            <Outlet/>
        </div>
    </>
}
 export default EventRoot;