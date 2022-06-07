import './App.css';
import Analysis from './components/Analysis';
import Navigation from './components/Navigation.js';
import Visitors from './components/Visitors';
import "./styles.css"

function App(props) {
  return (
    <div className="App">
      <Navigation whichData="Nav"/>
      <Analysis whichData="Reviews" info1="1,281"/>
      <Analysis whichData="Rating" info1="4.6"/>
      <Analysis whichData="Analytics" info1="960" info2="122" info3="321"/>
      <Visitors whichData="Website Visitors" info1="821"/>
    </div>
  );
}

export default App;
