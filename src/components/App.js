import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Quiz from "./pages/Quiz";
import Result from "../components/pages/Result";
import {Routes, Route, Navigate} from "react-router-dom"
import Login from "./pages/Login";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Navigate to="/home"/>}> </Route>
                <Route path="/home" element={<Home/>}> </Route>
                <Route path="/signup" element={<Signup/>}> </Route>
                <Route path="/login" element={<Login/>}> </Route>
                <Route path="/quiz" element={<Quiz/>}> </Route>
                <Route path="/result" element={<Result/>}> </Route>
            </Routes>
        </Layout>
    );
}

export default App;
