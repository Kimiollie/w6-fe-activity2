// App.js
import SingleCounter from "./SingleCounter"; // Import the SingleCounter component
import "./App.css"; // Import styles for the app

const App1 = () => {
  return (
    <div className="app-container">
      <SingleCounter />
      <SingleCounter />
      <SingleCounter />
    </div>
  );
};

export default App1;
