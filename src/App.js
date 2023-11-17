import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './View/Home/Home';
import SignIn from './View/Auth/SignIn/SignIn';
import SignUp from './View/Auth/SignUp/SignUp';
import Createpost from './Components/CreatePost/CreatePost';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/createPost" element={<Createpost />} />
        </Routes>
      </Router>
   
  );
}

export default App;
