import { IEvent } from '../../dummy-data';
import EventItem from './event-item';

const EventList = (props: { items: Array<IEvent> }) => {
  const { items } = props;

  return (
    <ul>
      {items.map((item: IEvent) => (
        <EventItem event={item} key={item.id} />
      ))}
      ;
    </ul>
  );
};

export default EventList;
