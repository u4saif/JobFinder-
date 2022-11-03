import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Error } from "./pages/Error";
import { Landing } from "./pages/Landing";
import { Register } from './pages/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
AllJobs,
AddJob,
Profile,
Stats,
SharedLayout
} from './pages/dashboard/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Stats />} />
          <Route path='/alljobs' element={<AllJobs />} />
          <Route path='/addjob' element={<AddJob />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
        <Route path='landing' element={<Landing />} />
        <Route path='register' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <ToastContainer position='top-center' />
    </BrowserRouter>
  );
}

export default App;
