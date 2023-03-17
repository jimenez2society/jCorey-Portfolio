import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import PageProgressBar from "./components/shared/PageProgressBar";
import NavMobileContainer from "./components/Header/Nav/NavMobile/NavMobileContainer";
import { useSelector } from "react-redux";
import { getIsOpenState } from "./features/navbarSlice";
import ToTheTopButton from "./components/TotheTopButton/ToTheTopButton";

function App() {
  // getting the getIsOpenState from navbarSlice initally = false
  const isOpen = useSelector(getIsOpenState);

  // if "isOpen = true" set classes on the body and html for scroll, overflow and placement of navbar, if false remove classes
  if (isOpen) {
    document.body.classList.add("nav-open");
    document.getElementsByTagName("html")[0].classList.add("nav-open");
  }
  if (!isOpen) {
    document.body.classList?.remove("nav-open");
    document.getElementsByTagName("html")[0].classList.remove("nav-open");
  }

  return (
    // classList of App dark so later on light mode and dark mode can be implemented
    <main className={`App dark`}>
      <NavMobileContainer />
      <ToTheTopButton />
      <PageProgressBar />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
