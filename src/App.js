import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home";
import Playlists from "./pages/Playlists";
import Favourites from "./pages/Favourites";
import Search from "./pages/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    if (!localStorage.getItem("fav")) {
      localStorage.setItem("fav", JSON.stringify([]));
    }
    if (!localStorage.getItem("playlists")) {
      localStorage.setItem("playlists", JSON.stringify([]));
    }
    if (!localStorage.getItem("fav_ids")) {
      localStorage.setItem("fav_ids", JSON.stringify([]));
    }
  }, []);
  return (
    <div className="App">
      <Sidebar />
      <div className="head-body">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/playlists" element={<Playlists />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
