import { BrowserRouter, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { Registration } from './page/RegistrationPage';
import { NotFound } from './page/NotFound';
import { MainPage } from './page/MainPage';
import { Login } from './page/LoginPage';
import { Dashboard } from './component/Dashboard';
import StudentProfile from './component/StudentProfile';
import {Toaster} from 'react-hot-toast'
import { useStyleState } from './stateStore/useStyleState';
import { useDataStore} from './dataStore/useStore';
import { useEffect } from 'react';

function App() {

  const {isClickedAINotes} = useStyleState();

  // console.log("checked AI notes :",isClickedAINotes);
  const{getProfile, profileData} = useDataStore()

  useEffect(()=>{
    getProfile()
  },[getProfile])
 

  return (
    <BrowserRouter>
      <Routes>
        {/* Main layout with nested routes */}
        <Route path="/" element={profileData?<MainPage />:<Navigate to={'/register'}/>}>
          <Route index element={<Dashboard />} />  {/* Default page */}
          <Route path="profile" element={<StudentProfile />} />
        </Route>

        {/* Standalone pages */}
        <Route path="/login" element={!profileData?<Login />:<Navigate to={'/'}/>} />
        <Route path="/register" element={ !profileData?<Registration />:<Navigate to={'/'}/>} /> 

        {/* Catch-all for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
