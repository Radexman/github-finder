import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <div className='flex h-screen flex-col justify-between'>
        <Navbar />
        <main className='container mx-auto px-3 pb-12'>Content</main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
