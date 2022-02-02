import { useAlert } from '../../state/alertContext';
import styles from './alert.module.css';

const Alert = () => {
  const [alert, setAlert] = useAlert();
  const dismiss = () => {
    setAlert('');
  };
  if (!alert) return <></>;
  return (
    <div className={styles.root}>
      <div
        className="alert alert-danger alert-dismissible fade show"
        role="alert"
      >
        {alert}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={dismiss}
        ></button>
      </div>
    </div>
  );
};

export default Alert;
