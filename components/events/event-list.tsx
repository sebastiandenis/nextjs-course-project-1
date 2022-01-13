import { IEvent } from '../../dummy-data';
import EventItem from './event-item';
import classes from './event-list.module.css';

const EventList = (props: { items: Array<IEvent> }) => {
  const { items } = props;

  return (
    <ul className={classes.list}>
      {items.map((item: IEvent) => (
        <EventItem event={item} key={item.id} />
      ))}
    </ul>
  );
};

export default EventList;
