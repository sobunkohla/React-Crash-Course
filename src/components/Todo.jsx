import './Todo.css'

function Todo ({name, del }) {

    
    return (
        <div className='todo'>
      <p>{name}</p>
     <button onClick={del}>delete</button>
     </div>
    )
}

export default Todo