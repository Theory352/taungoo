import "./App.css";
import Header from "./components/common/header/Header";
import { Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Team from "./components/team/Team";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import { PostContextProvider } from "./components/context/PostContext";
import Auth from "./components/auth/Auth";

// admin
import AdminAbout from "./components/admin/AdminAbout";
import AdminHome from "./components/admin/AdminHome";
import AdminSettings from "./components/admin/AdminSettings";
import AdminUserList from "./components/admin/AdminUserList";

function App() {
  const CURRENT_USER = "Admin";
  return (
    <>
      <PostContextProvider>
        <Header CURRENT_USER={CURRENT_USER} />
        <Routes>
          {/* user  */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/courses" element={<CourseHome />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/faq" element={<Pricing />} />
          <Route exact path="/journal" element={<Blog />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/auth" element={<Auth />} />
          {/* ///// */}

          {/* admin  */}

          <Route exact path="/admin" element={<AdminHome />} />
          <Route exact path="/admin/settings" element={<AdminSettings />} />
          <Route exact path="/admin/about" element={<AdminAbout />} />
          <Route exact path="/admin/userlist" element={<AdminUserList />} />

          {/* ///// */}
        </Routes>
        <Footer />
      </PostContextProvider>
    </>
  );
}

export default App;
