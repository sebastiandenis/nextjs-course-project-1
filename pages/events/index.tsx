import { NextPage } from 'next';
import { Fragment } from 'react';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import { getAllEvents } from '../../dummy-data';

const Events: NextPage = () => {
  const events = getAllEvents();
  return (
    <Fragment>
      <EventsSearch />
      <EventList items={events} />
    </Fragment>
  );
};

export default Events;
