import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Splash from './components/userAccess/splash';
import Navigation from './components/Nav/navigation';
import Doctors from './components/pages/doctors';
import NewReservation from './components/pages/newReservation';
import MyReservations from './components/pages/myReservations';
import AddDoctor from './components/pages/addDoctor';
import DeleteDoctor from './components/pages/deleteDoctor';
import DoctorDetails from './components/doctor/doctorDetails';
import Layout from './components/Nav/layout';
import { useUser } from './components/userAccess/userContext';

function App() {
  const { setUser } = useUser();
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUser(user);
    }
  }, [setUser]);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route
            element={<Layout />}
          >
            <Route path="navigation" element={<Navigation />} />
            <Route path="doctors" element={<Doctors />} />
            <Route path="/:doctorDetails" element={<DoctorDetails />} />
            <Route path="New-reservation" element={<NewReservation />} />
            <Route path="My-reservations" element={<MyReservations />} />
            <Route path="Add-doctor" element={<AddDoctor />} />
            <Route path="Delete-doctor" element={<DeleteDoctor />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
