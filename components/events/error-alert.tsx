import classes from './error-alert.module.css';

const ErrorAlert = (props: any) => {
  return <div className={classes.alert}>{props.children}</div>;
};

export default ErrorAlert;
