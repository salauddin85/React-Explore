
import './App.css'
import Grandpa from './components/Grandpa/Grandpa.jsx'
import HookForm from './components/HookForm/HookForm.jsx'
import ReusableForm from './components/ReusableForm/ReusableForm.jsx'
// import SimpleForm from './components/SimpleForm/SimpleForm'
import SimpleForm from './components/SimpleForm/SimpleForm.jsx'
import StatefulForm from './components/StatefulForm/StatefulForm.jsx'

function App() {

  const handleSignUpSubmit = (data) => {
    // e.preventDefault();
    console.log("Sign up Data",data.email, data.password);
  }
  const handleProfileUpdateSubmit = (data) => {
    // e.preventDefault();
    console.log("Profile Update Data",data.email, data.password);
  }

  return (
    <>
     
      <h1 className="text-3xl font-bold underline text-amber-600 mb-3">Vite + React</h1>
      {/* <SimpleForm />
      <p className="text-2xl font-bold text-red-600">Hello Vite + React!</p>
      <StatefulForm /> */}
      {/* <HookForm /> */}
      {/* <ReusableForm formtitle={"Sign up"} submitbtnText = {"Sign up"} handleSubmit={handleSignUpSubmit} />
      <ReusableForm formtitle={"Profile update"} submitbtnText = {"Update"} handleSubmit={handleProfileUpdateSubmit} /> */}
      <Grandpa />

    </>
  )
}

export default App
