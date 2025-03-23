import React from 'react';
import LoginForm from '../component/auth/LoginForm';


const LoginPage = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;