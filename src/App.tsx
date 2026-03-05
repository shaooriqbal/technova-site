import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Careers from './pages/Careers';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AccountInfo from './pages/AccountInfo';
import TabularDetails from './pages/TabularDetails';

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="about" element={<About />} />
            <Route path="careers" element={<Careers />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="account" element={<AccountInfo />} />
            <Route path="data" element={<TabularDetails />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}
