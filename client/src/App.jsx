import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HousingProps from './beta-components/HousingProps';
import PopularProperties from './layout/PopularProperties';
import SignUp from './auth/SignUp';
import SignIn from './auth/SignIn';
import PublicLayout from './PublicLayout';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Pages (With Navbar + Footer) */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HousingProps />} />
          <Route path="/popular-properties" element={<PopularProperties />} />
        </Route>

        {/* Auth Pages (No Navbar + Footer) */}
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;