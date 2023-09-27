import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="contents">
        <h3>Hey!!! Greeting</h3>
        <form onSubmit={handleSubmit} data-testid="form">
          <label data-testid = "label">Enter name : </label>
          <input type="text" value={name} onChange={handleChange}/>
          <button type="submit" data-testid = "buttonElement"></button>
        </form>
      </div>
    </div>
  );
}

export default App;
