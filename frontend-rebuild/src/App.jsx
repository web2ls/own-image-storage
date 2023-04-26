import './App.css';
import { Routes, Route } from "react-router-dom";

import Layout from './components/Layout';
import Login from './components/Login';
import FilesList from './components/FilesList';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/*' element={<Layout />}>
      </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
