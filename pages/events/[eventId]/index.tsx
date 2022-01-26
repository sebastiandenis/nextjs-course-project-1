import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import EventContent from '../../../components/event-detail/event-content';
import EventLogistics from '../../../components/event-detail/event-logistics';
import EventSummary from '../../../components/event-detail/event-summary';
import ErrorAlert from '../../../components/events/error-alert';
import { getEventById } from '../../../dummy-data';

const EventDetails: NextPage = () => {
  const router = useRouter();

  const eventId = router.query.eventId as string;

  const event = getEventById(eventId);

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title}></EventSummary>
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      ></EventLogistics>
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};

export default EventDetails;
