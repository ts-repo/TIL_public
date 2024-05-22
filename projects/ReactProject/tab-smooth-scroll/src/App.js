import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
// import Tabs from './Tabs';
import TabContainer from './components/TabContainer';

function App() {
  // return (
  //   <div className="App">
  //     <TabContainer />
  //   </div>
  // );
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/tabs" element={<TabContainer />} />
        <Route path="/" element={<Navigate to="/tabs" />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
