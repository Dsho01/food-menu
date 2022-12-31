import { useState } from 'react';
import './App.css';
import Login from './Login';
import FoodContainer from './FoodContainer';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (isAuthenticated) {
    return (
      <div className="App">
        <FoodContainer />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Login
          setIsAuthenticated={setIsAuthenticated}
        />
      </div>
    );
  }
}
