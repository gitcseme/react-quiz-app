import Form from "./Form";
import TextInput from "./common/TextInput";
import Button from "./common/Button";
import {Link} from "react-router-dom";

export default function LoginForm() {
    return (
        <Form className="login">
            <TextInput
                icon="alternate_email"
                type="text"
                placeholder="Enter email"
            />

            <TextInput
                icon="lock"
                type="password"
                placeholder="Enter password"
            />

            <Button>
                <span>Submit Now</span>
            </Button>

            <div className="info">
                {/*Don't have an account? <Link to="/signup">Signup</Link> instead.*/}
            </div>
        </Form>
    );
}