import TextInput from "./common/TextInput";
import Checkbox from "./common/Checkbox";
import Button from "./common/Button";
import {Link, useNavigate} from "react-router-dom";
import Form from "./Form";
import {useState} from "react";
import {useAuth} from "../contexts/AuthContext";

export default function SignupForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [agree, setAgree] = useState(false);
    
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    
    const {signup} = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        
        if (password !== confirmPassword) {
            return setError("Passwords didn't matched!");
        }
        
        try {
            setError("");
            setLoading(true);
            
            await signup(email, password, username);
            navigate("/");
        }
        catch (err) {
            console.log("Error in signup", err);
            setError("Error creating an account!!");
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <Form style={{height: '500px'}} onSubmit={handleSubmit}>
            <TextInput
                value={username}
                onChange={e => setUsername(e.target.value)}
                type="text"
                placeholder="Enter name"
                icon="person"
                required
            />
            <TextInput
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="text"
                placeholder="Enter email"
                icon="alternate_email"
                required
            />
            <TextInput
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
                placeholder="Enter password"
                icon="lock"
                required
            />
            <TextInput
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                type="password"
                placeholder="Confirm password"
                icon="lock_clock"
                required
            />

            <Checkbox
                value={agree}
                onChange={e => setAgree(e.target.value)}
                text="I agree to the Terms &amp; Conditions"
                required
            />

            <Button disabled={loading} type="submit">
                <span>Submit Now</span>
            </Button>

            { error && <p className="error">{error}</p> }

            <div className="info">
                Already have an account? <Link to="/login">Login</Link> instead.
            </div>
        </Form>
    );
}