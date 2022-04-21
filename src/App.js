import { useDispatch, useSelector } from 'react-redux';
import { addToStore } from './actions';
import './App.css';

const samplejson = {
  "title": "Sample",
  "author": "DummyS",
  "description": "Sample json",
  "rating": 5
}

function App() {
  const dispatch = useDispatch()
  const state = useSelector(selector => {
    console.log('selector', selector)
    return selector
  })
  
  return (
    <div className="App">
      <button onClick={() => dispatch(addToStore(samplejson))}>add sample element</button>
      <p>{JSON.stringify(state)}</p>
     </div>
  );
}

export default App;
