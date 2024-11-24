import React from 'react';
import RegistrationForm from './components/RegistrationForm';


function App() {
  return (
    <div>
      <h1>User Registration</h1>
      <h2>Controlled Components</h2>
      <RegistrationForm />
      <h2>Formik Form</h2>
      <formikForm/>
    </div>
  );
}

export default App;
