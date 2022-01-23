import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';

const FilteredEvents: NextPage = () => {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear < 2021 ||
    numYear > 2030 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p>Invalid filter!!!</p>;
  }

  const events = getFilteredEvents({ year: numYear, month: numMonth });

  if (!events || events.length === 0) {
    return <p>No events found!</p>;
  }

  return (
    <div>
      <h1>FilteredEvents</h1>
    </div>
  );
};

export default FilteredEvents;
