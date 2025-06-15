// src/App.jsx
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom'
import Footer from './components/footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import User from './components/users/User';
import { GithubProvider } from './components/context/github/GithubContext';
function App() {
  return (
    <GithubProvider>
    <Router>
      <div className='flex flex-col min-h-screen'>
        <Navbar title="Github Finder"></Navbar>
        <div className='flex-grow container mx-auto px-4 py-6'>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/notfound' element={<NotFound/>}/>
            <Route path="/users/:login" element={<User/>} />
            <Route path="/*" element={<NotFound/>} />
          </Routes>
        </div>

        <Footer></Footer>
      </div>
    </Router>  
    </GithubProvider>
  );
}

export default App;
