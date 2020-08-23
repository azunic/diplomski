import React from 'react';
import LoginForm from '../../components/auth/LoginForm';
import SignupForm from '../../components/auth/SignupForm';
import ForgotPasswordForm from '../../components/auth/ForgotPasswordForm';
import CarouselImages from '../../components/auth/Carousel';

export default function AuthPage(props) {
  const { formType } = props;

  const getForm = () => {
    switch (formType) {
      case 'forgot':
        return ForgotPasswordForm;
      case 'signup':
        return SignupForm;
      case 'login':
        return LoginForm;
      default:
        return LoginForm;
    }
  };

  const AuthForm = getForm();

  return (
    <section className="auth">
      <CarouselImages />
      <AuthForm />
    </section>
  );
}
