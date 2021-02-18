import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  addTask,
  removeTask
} from './actions'

const App = () => {
  const list = useSelector(state => state.list);
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");
  
  const onHandleQuery = (event) => {
    setQuery(event.target.value);
  }

  return(
    <div className="container">
      <div className="form-input-task">
        <p>Put your task:</p>
        <input type="text" value={query} onChange={onHandleQuery}/>
        <button onClick={()=> dispatch(addTask(query))}>Submit</button>
        <button onClick={()=> dispatch(removeTask("hello"))}>remove</button>
      </div>
      <div>
        {list}
      </div>      
      
    </div>
  )
}

export default App;