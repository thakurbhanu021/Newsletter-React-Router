import { useParams } from "react-router-dom";

const EventDetailPage = () => {
  const param = useParams();

  return (
    <>
      <h1>EventDetailt Page</h1>
      <p>{param.someId}</p>
    </>
  );
};

export default EventDetailPage;
