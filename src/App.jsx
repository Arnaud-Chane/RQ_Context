import { useState } from 'react';
import UserContext from "./contexts/UserContext";
import UserProfile from "./components/UserProfile";

import './App.css';

function App() {
  const [isOnline, setIsOnline] = useState(false);

  return (
    <div className="App">
      <UserContext.Provider value={{ isOnline, setIsOnline }} >
        <UserProfile />
      </UserContext.Provider>
    </div>
  )
}

export default App;