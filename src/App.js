import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Login from './components/login/login';
import  Api  from './components/api/api';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/dodgers" element={ < Login /> } />
          <Route path="/iloveLA" element={ < Dashboard /> } />
          <Route path="/stats" element={ < Api /> } />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;