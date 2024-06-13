import React from 'react';
import ReactDOM from 'react-dom';
import MainView from './components/main-view/main-view';

// Rendering the MainView component
ReactDOM.render(<MainView />, document.getElementById('app'));

// Importing SCSS for styling
import "./index.scss";

// Main component
const MyFlixApplication = () => {
  return (
    <div className="my-flix">
      {/* Greeting can be a separate component for reusability */}
      <Greetings /> {/* Assuming a Greetings component */}
      <MainView />
    </div>
  );
};

// Optional: Separate component for greeting message
const Greetings = () => {
  return (
    <div>
      <h2>Welcome to my React App!</h2>
    </div>
  );
};
