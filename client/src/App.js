import './App.css';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from './pages/home/Home.jsx';
import SingleTour from './pages/tour/SingleTour.jsx';
import About from './pages/about/About.jsx';
import Login from './pages/forms/Login.jsx';
import Register from './pages/forms/Register.jsx';
import { AuthContext } from './context/authContext.js';
import { useContext } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AdminPanel from './pages/admin/AdminPanel.jsx';
import AddTour from './pages/admin/AddTour.jsx';
import FetchUser from './pages/admin/FetchUser.jsx';
import DeleteTour from './pages/admin/DeleteTour.jsx';
const queryClient = new QueryClient();

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" replace />
    }
    return children;
  }
  const ProtectedAdmin = ({ children }) => {
    if (currentUser?.role !== "admin") {
      return <Navigate to="/" replace />
    }
    return children
  }

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path='/tour/:id' element={
            <ProtectedRoute>
              <SingleTour />
            </ProtectedRoute>
          } />
          <Route path='/admin' element={
            <ProtectedAdmin>
              <ProtectedRoute>
                <AdminPanel />
              </ProtectedRoute>
            </ProtectedAdmin>
          } />
          <Route path='/AddTour' element={
            <ProtectedAdmin>
              <ProtectedRoute>
                <AddTour />
              </ProtectedRoute>
            </ProtectedAdmin>
          } />
          <Route path='/FetchUser' element={
            <ProtectedAdmin>
              <ProtectedRoute>
                <FetchUser />
              </ProtectedRoute>
            </ProtectedAdmin>
          } />
          <Route path='/DeleteTour' element={
            <ProtectedAdmin>
              <ProtectedRoute>
                <DeleteTour />
              </ProtectedRoute>
            </ProtectedAdmin>
          } />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>

  );
}

export default App;
