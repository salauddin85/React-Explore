

// export default function Todo({task,isDone}) { 
    
//     const todoStyle = {
//         color: 'blue',
//         fontSize: '20px',
//         fontWeight: 'bold',
//         border: '2px solid black',
//         padding: '10px',
//         margin: '20px',
//         borderRadius: '10px',
//         backgroundColor: 'lightgray',
//         textAlign: 'center',
//     }
//     // conditional rendering option 
//     if (isDone) {
//         todoStyle.textDecoration = 'line-through';
//         todoStyle.color = 'red';
//         return <h1 style={todoStyle}>I am a Todo {task} - Done</h1>;
//     }
//     todoStyle.textDecoration = 'none';
//     todoStyle.color = 'green';
//     return <h1 style={todoStyle}>I am a Todo {task} - Not Done</h1>;
// }

// export default function Todo({ task, isDone }) {
//   const todoStyle = {
//     color: "blue",
//     fontSize: "20px",
//     fontWeight: "bold",
//     border: "2px solid black",
//     padding: "10px",
//     margin: "20px",
//     borderRadius: "10px",
//     backgroundColor: "lightgray",
//     textAlign: "center",
//   };
//   return (
    
//     <div>
//         <li>{isDone ? "Finished" : "Not Finished"}</li>
//         <h1 style={todoStyle}>
//         I am a Todo {task} - {isDone ? "Done" : "Not Done"}
//         </h1>
//     </div>
//   );
// }

// export default function Todo({ task, isDone }) {
//   const todoStyle = {
//     color: "blue",
//     fontSize: "20px",
//     fontWeight: "bold",
//     border: "2px solid black",
//     padding: "10px",
//     margin: "20px",
//     borderRadius: "10px",
//     backgroundColor: "lightgray",
//     textAlign: "center",
//   };
//   return (
//     <div>
//       <li>{isDone  && ': Done'}</li> 
//       <h1 style={todoStyle}>
//         I am a Todo {task} - {isDone ? "Done" : "Not Done"}
//       </h1>
//     </div>
//   );
// }

export default function Todo({ task, isDone }) {
  const todoStyle = {
    color: "blue",
    fontSize: "20px",
    fontWeight: "bold",
    border: "2px solid black",
    padding: "10px",
    margin: "20px",
    borderRadius: "10px",
    backgroundColor: "lightgray",
    textAlign: "center",
  };
  return (
    <div>
      <li>{task}{isDone || ": Do it"}</li>
      <h1 style={todoStyle}>
        I am a Todo {task} - {isDone ? "Done" : "Not Done"}
      </h1>
    </div>
  );
}