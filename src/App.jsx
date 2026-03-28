import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import Groups from './pages/Groups/Groups';
import { initializeTheme } from './utils/themeUtils';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/groups" element={<Groups />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  useEffect(() => {
    // Task 4: Initialize Theme
    initializeTheme();
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen font-sans overflow-hidden">
        
        {/* Animated Background Orbs */}
        <div className="fixed top-[-5%] left-[-10%] w-96 h-96 bg-[var(--accent-purple)] opacity-[var(--glow-opacity)] rounded-full mix-blend-screen filter blur-[128px] animate-blob1 pointer-events-none z-0 transition-all duration-300" />
        <div className="fixed top-[20%] right-[-5%] w-[30rem] h-[30rem] bg-[var(--accent-green)] opacity-[calc(var(--glow-opacity)-0.05)] rounded-full mix-blend-screen filter blur-[128px] animate-blob2 animation-delay-2000 pointer-events-none z-0 transition-all duration-300" />
        <div className="fixed bottom-[-10%] left-[20%] w-[25rem] h-[25rem] bg-[var(--accent-pink)] opacity-[calc(var(--glow-opacity)-0.05)] rounded-full mix-blend-screen filter blur-[128px] animate-blob1 animation-delay-4000 pointer-events-none z-0 transition-all duration-300" />
        
        {/* Grid Overlay */}
        <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none z-0" />

        <Navbar />
        
        <main className="relative flex-1 pt-28 pb-10 px-4 md:px-8 max-w-7xl w-full mx-auto z-10 flex flex-col items-center">
          <AnimatedRoutes />
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
