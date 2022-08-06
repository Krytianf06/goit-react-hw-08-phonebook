import LogInForm from 'components/LogInForm';
import s from './LogInFormView.module.css';

const LogInFormView = () => {
  return (
    <main className={s.view}>
      <div className={s.wrapper}>
        <LogInForm />
      </div>
    </main>
  );
};

export default LogInFormView;
