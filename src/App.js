import './App.css';
import AddItem from './components/AddItem';
import List from './components/List';

function App() {  
  return (
    <div className="App">
      <div className="content">
        <h1>My Bookstore</h1>
        <AddItem />
        <List />
      </div>
     </div>
  );
}

export default App;
