import './App.css';
import RegistrationForm from './components/RegistrationForm'; // Controlled component
// or
// import FormikForm from './components/FormikForm'; // Formik component

function App() {
  return (
    <div className="App">
      <h1>User Registration</h1>
      
      {/* You can choose which form to render here */}
      <RegistrationForm />
      {/* or */}
      {/* <FormikForm /> */}
    </div>
  );
}

export default App;
