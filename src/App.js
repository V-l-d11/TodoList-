import React , {useEffect} from 'react'
import TodoList from './Todo/TodoList'
import Context from './context';
import Modal from './Modal/Modal';
import './App.css';

import Loader from './Loader';

const AddTodo = React.lazy(()=> import('./Todo/Addtodo'))

function App() {
  const [todos , setTodos]= React.useState([])
  const [loading , setLoading] = React.useState(true)
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(response => response.json())
    .then(todos =>{
      setTimeout(()=>{
        setTodos(todos)
        setLoading(false)
      },2000)
     
    })
  },[])

  function toggleTodo(id){
    setTodos(
      todos.map(todo=>{
     if(todo.id === id){
       todo.complited = !todo.complited
     }
     return todo
   }))
  }
  function addTodo(title){
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }

  function removeTodo(id){
    setTodos(todos.filter(todo=> todo.id !== id))
  }
  return (
    <Context.Provider value={{removeTodo}}>
     <div className="wrapper">
       <h1>TO DO LIST</h1>
       <Modal />
       <React.Suspense fallback={<p>Loading...</p>}>
       <AddTodo onCreate={addTodo} />
       </React.Suspense>
      
       {loading && <Loader />}
      {todos.length ?  <TodoList todos={todos} onToggle={toggleTodo} /> : (loading ? null: (<p>No todos!</p>)) }
      
     </div>
     </Context.Provider>
  );
}

export default App;
