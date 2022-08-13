
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import LogIn from './components/LogIn';
import TestPage from './pages/TestPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LogIn from './pages/LogIn';
function App() {
  return (
    <div className="App">
      <div className="bg-danger">
        <Router>
          <Routes>

            <Route path='/' element={<LogIn/>}/>
            <Route path='/testpage' element={<TestPage/>}/>

          </Routes>
      
        </Router>
        {/* <LogIn/> */}
        {/* <TestPage/> */}

      </div>
    </div>
  );
}

export default App;
