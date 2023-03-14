import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import PageProgressBar from "./components/shared/PageProgressBar";
import NavMobileContainer from "./components/Header/Nav/NavMobile/NavMobileContainer";
import { useSelector } from "react-redux";
import { getIsOpenState } from "./features/navbarSlice";

function App() {
  const isOpen = useSelector(getIsOpenState);

  if (isOpen) {
    document.body.classList.add("nav-open");
    document.getElementsByTagName("html")[0].classList.add("nav-open");
  }
  if (!isOpen) {
    document.body.classList?.remove("nav-open");
    document.getElementsByTagName("html")[0].classList.remove("nav-open");
  }

  return (
    <main className={`App dark`}>
      <NavMobileContainer />
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
