import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Quiz from "./pages/Quiz";
import Result from "../components/pages/Result";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import { AuthProvider } from "../contexts/AuthContext";
import PrivateRoute from "./common/PrivateRoute";

function App() {
    return (
        <AuthProvider>
            <Layout>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route 
                        path="/quiz" 
                        element= { <PrivateRoute><Quiz /></PrivateRoute> }
                    />
                    <Route 
                        path="/result" 
                        element={ <PrivateRoute><Result /></PrivateRoute> } 
                    />
                </Routes>
            </Layout>
        </AuthProvider>
    );
}

export default App;
