import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
      
      <h1>Vite + React</h1>
      <div >
        <Person />
        <Person />
        <Person />

      </div>
      
      
    </>
  )
}
function Person(){
  const age = 20;
  const person = { name: 'John', age: 20 }
  return (
    
    <>
      <h1>I am a {person.name} {person.age} with age {age}</h1>
      <Student />
    </>
  )
}
function Student(){
  const student = { student_id: 1, name: 'John', age: 20 }
  return (
    
    <div>
      <h1>I am a {student.name} {student.age} with student id {student.student_id}</h1>
    </div>
  )
}
export default App
