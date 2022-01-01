import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import RegisterDriver from './Pages/Register/RegisterDriver';
import RegisterLearner from './Pages/Register/RegisterLearner';
import Home from './Pages/Home/Home/Home';
import Profile from './Pages/Profile/Profile';
import Login from './Pages/Login/Login';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import AdminRoute from './Pages/AdminRoute/AdminRoute';
import Driver from './Pages/Driver/Driver';
import Learner from './Pages/Learner/Learner';
import Payment from './Pages/Payment/Payment';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path='/registerDriver' element={<RegisterDriver />}></Route>
            <Route path='/registerLearner' element={<RegisterLearner />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/payment/:serviceId' element={<Payment />}></Route>
            <Route path='/makeAdmin' element={
              <AdminRoute>
                <MakeAdmin />
              </AdminRoute>
            }></Route>
            <Route path='/driver' element={
              <AdminRoute>
                <Driver />
              </AdminRoute>
            }></Route>
            <Route path='/learner' element={
              <AdminRoute>
                <Learner />
              </AdminRoute>
            }></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
