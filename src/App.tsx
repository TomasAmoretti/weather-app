import useCities from "./hooks/useCities";
import './App.css';

function App() {
  const { cities } = useCities();
  console.log(cities)
  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
