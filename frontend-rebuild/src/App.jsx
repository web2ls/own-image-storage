import './App.css';
import { Routes, Route } from "react-router-dom";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Layout from './components/Layout';
import Login from './components/Login';

function App() {
  return (
    <div className='App'>
      <DndProvider backend={HTML5Backend}>
        <Routes>
          <Route path='/*' element={<Layout />}>
        </Route>
          <Route path='/login' element={<Login />} />
        </Routes>
      </DndProvider>
    </div>
  );
}

export default App;
