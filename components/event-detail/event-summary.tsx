import classes from './event-summary.module.css';

const EventSummary = (props: { title: string }) => {
  const { title } = props;

  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
};

export default EventSummary;
