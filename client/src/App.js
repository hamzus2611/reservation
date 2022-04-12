import { Route,BrowserRouter, Routes} from "react-router-dom";
import "./components/style/dark.scss";

import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import HomePage from "./pages/homepage/HomePage";
import Profile from "./pages/profile/Profile";
import EventsList from "./pages/EventsList/EventsList";
import EventPage from "./pages/EventPage/EventPage";

import Home from "./AdminPages/home/Home";
import User from "./AdminPages/User/User";
import Organisateur from "./AdminPages/Organisateur/Organisateur";
import Admin from "./AdminPages/Admin/Admin";
import Event from "./AdminPages/Event/Event";
import Single from "./AdminPages/single/Single";
import New from "./AdminPages/new/New";
import { userInputs } from "./Admins/formSource";

import { useContext } from "react";
// import { DarkModeContext } from "./components/context/darkModeContext";

// import { Switch, Router } from "react-router-dom";

function App() {
  // const { darkMode } = useContext(DarkModeContext);

  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/CreateEvent" element={<EventsList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/event/:id" element={<EventPage />} />
         {/* render={(props) => */}
        {/* //   <EventPage {...props} />} */}
        

        <Route path="/Admin/">
          <Route index element={<Home />} />
          <Route path="User">
            <Route index element={<User />} />
            <Route path=":userId" element={<Single />} />
          </Route>
          <Route path="Organisateur/">
            <Route index element={<Organisateur />} />
            <Route path=":userId" element={<Single />} />
            <Route
              path="new"
              element={<New title="Add New User" />}
            />
          </Route>
          <Route path="Admin">
            <Route index element={<Admin />} />
            <Route path=":userId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add New User" />}
            />
          </Route>
          <Route path="Event">
            <Route index element={<Event />} />
            <Route path=":userId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add New User" />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
