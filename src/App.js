import TopBar from "./components/topbar/TopBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMePage from "./pages/aboutmepage/AboutMePage";
import PortfoliosPage from "./pages/portfoliospage/PortfoliosPage";
import FoodPage from "./pages/foodpage/FoodPage";

function App() {
    return (
        <Router>
            <TopBar />
            <Routes>
                <Route exact path="/" element={<AboutMePage/>} />
            </Routes>
            <Routes>
                <Route exact path="/aboutme" element={<AboutMePage/>} />
            </Routes>
            <Routes>
                <Route exact path="/work" element={<PortfoliosPage/>} />
            </Routes>
            <Routes>
                <Route exact path="/food" element={<FoodPage/>} />
            </Routes>
        </Router>
    )
}

export default App;
