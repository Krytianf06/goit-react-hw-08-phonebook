import SignUpForm from 'components/SignUpForm';
import s from './SignUpFormView.module.css';

const SignUpFormView = () => {
  return (
    <main className={s.view}>
      <div className={s.wrapper}>
        <SignUpForm />
      </div>
    </main>
  );
};

export default SignUpFormView;
