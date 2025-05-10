
import './App.css'
// import SimpleForm from './components/SimpleForm/SimpleForm'
import SimpleForm from './components/SimpleForm/SimpleForm.jsx'
import StatefulForm from './components/StatefulForm/StatefulForm.jsx'

function App() {

  return (
    <>
     
      <h1 className="text-3xl font-bold underline text-amber-600 mb-3">Vite + React</h1>
      <SimpleForm />
      <p className="text-2xl font-bold text-red-600">Hello Vite + React!</p>
      <StatefulForm />
   
     
    </>
  )
}

export default App
