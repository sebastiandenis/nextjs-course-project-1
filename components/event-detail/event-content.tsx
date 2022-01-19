import classes from './event-content.module.css';

const EventContent = (props: {children: any}) => {
  return (
    <section className={classes.content}>
      {props.children}
    </section>
  );
}

export default EventContent;
