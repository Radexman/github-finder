import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Router>
      <div className='flex h-screen flex-col justify-between'>
        <Navbar />
        <main>Content</main>
      </div>
    </Router>
  );
}

export default App;
