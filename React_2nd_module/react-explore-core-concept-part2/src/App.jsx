
import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Users from './Users'
import Friend from './Friend'
// import Friends from './Friends'
function App() {
  function handleClick() {
    alert('Button clicked!')
  }
  function handleClick2(number) {
    alert('Button clicked ' + number)
  }
  // event handler
  return (
    <>
      {/* <Users></Users> */}
      <Friends />

      <h1>Explore React core concepts part 2</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div style={{ color: 'white', border: '2px solid red', margin: '10px' }}>
      <Counter  />
      </div>
      <button onClick={handleClick}>Click me</button>
      <button onClick={() => handleClick2(2)}>Click me2</button>
      <button onClick={() => alert('Button clicked 3')}>Click me3</button>
    </>
  )
}

export default App
