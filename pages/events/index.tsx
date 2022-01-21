import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import { getAllEvents } from '../../dummy-data';

const Events: NextPage = () => {
  const events = getAllEvents();
  const router = useRouter();

  const findEventsHandler = (year: HTMLSelectElement, month: HTMLSelectElement) => {
    const fullPath = `/events/${year.value}/${month.value}`;
    router.push(fullPath);
  };

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler}/>
      <EventList items={events} />
    </Fragment>
  );
};

export default Events;
