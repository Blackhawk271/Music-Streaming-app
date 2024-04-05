
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Assuming you're using React Router for navigation
import EmployeeList from './EmployeeList'; // Import the EmployeeList component
import './App.css'; // Import your main CSS file

function App() {
  // Assume employees data is passed as props from a parent component or fetched from an API
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/">
            {/* Render the EmployeeList component */}
            {<EmployeeList employees={EmployeeList} />}
          </Route>
          {/* Define other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;