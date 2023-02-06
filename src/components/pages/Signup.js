import Illustration from "../Illustration";
import Form from "../Form";
import classes from "../../styles/Signup.module.css";
import TextInput from "../common/TextInput";
import Checkbox from "../common/Checkbox";
import Button from "../common/Button";
import {Link} from "react-router-dom";
import SignupForm from "../SignupForm";

export default function Signup() {
    return (
        <>
            <h1>Create an account</h1>

            <div className="column">
                <Illustration/>
                <SignupForm/>
            </div>
        </>
    );
}