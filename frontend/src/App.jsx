import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Registration } from './page/RegistrationPage';
import { NotFound } from './page/NotFound';
import { MainPage } from './page/MainPage';
import { Login } from './page/LoginPage';
import { Dashboard } from './component/Dashboard';
import StudentProfile from './component/StudentProfile';

function App() {

  const user = true ;

  return (
    <BrowserRouter>
      <Routes>
        {/* Main layout with nested routes */}
        <Route path="/" element={user?<MainPage />:<Registration/>}>
          <Route index element={<Dashboard />} />  {/* Default page */}
          <Route path="profile" element={<StudentProfile />} />
        </Route>

        {/* Standalone pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />

        {/* Catch-all for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
