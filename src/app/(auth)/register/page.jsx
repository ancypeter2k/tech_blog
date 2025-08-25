import styles from "./register.module.css";
import RegisterForm from '../../components/RegisterForm/RegisterForm.jsx';

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <RegisterForm/>
      </div>
    </div>
  );
};

export default RegisterPage;