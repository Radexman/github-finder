import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User';
import NotFound from './pages/NotFound';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { GithubProvider } from './context/github/GithubContext';
import { AlertProvider } from './context/alert/AlertContext';

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className='flex h-screen flex-col justify-between'>
            <Navbar />
            <main className='container mx-auto flex flex-col justify-center px-5 pb-12'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/user/:login' element={<User />} />
                <Route path='/notfound' element={<NotFound />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
