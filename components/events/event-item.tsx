import Image from 'next/image';
import Link from 'next/link';
import { IEvent } from '../../dummy-data';

const EventItem = (props: { event: IEvent }) => {
  const { event } = props;
  const humanReadableDate = new Date(event.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const formattedAddress = event.location.replace(', ', '\n');

  const exploreLink = `/events/${event.id}`;

  return (
    <li>
      <Image src={'/' + event.image} alt={event.title} width={300} height={200}/>
      <div>
        <div>
          <h2>{event.title}</h2>
          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
