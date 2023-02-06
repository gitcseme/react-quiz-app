import Form from "./Form";
import TextInput from "./common/TextInput";
import Button from "./common/Button";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {useAuth} from "../contexts/AuthContext";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const {login} = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);

            await login(email, password);
            navigate("/");
        }
        catch (err) {
            console.log("Error in login", err);
            setError("Failed to login!!");
        }
        finally {
            setLoading(false);
        }
    }
    
    return (
        <Form className="login" onSubmit={handleSubmit}>
            <TextInput
                value={email}
                onChange={e => setEmail(e.target.value)}
                icon="alternate_email"
                type="text"
                placeholder="Enter email"
            />

            <TextInput
                value={password}
                onChange={e => setPassword(e.target.value)}
                icon="lock"
                type="password"
                placeholder="Enter password"
            />

            <Button disabled={loading} type="submit">
                <span>Submit Now</span>
            </Button>

            {error && <p className="error">{error}</p>}
            
            <div className="info">
                Don't have an account? <Link to="/signup">Signup</Link> instead.
            </div>
        </Form>
    );
}