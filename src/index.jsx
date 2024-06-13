import React from 'react';
import ReactDOM from 'react-dom';
import MainView from './components/main-view/main-view';

ReactDOM.render(<MainView />, document.getElementById('app'));
// Import statement to indicate that you need to bundle `./index.scss`
import "./index.scss";

// Main component
const MyFlixApplication = () => {
  return (
    <div className="my-flix">
      <div>Good morning</div>
      <MainView />
    </div>
  );
};

// Finds the root of your app
const container = document.querySelector("#root");
const root = createRoot(container);

// Tells React to render your app in the root DOM element
root.render(<MyFlixApplication />);