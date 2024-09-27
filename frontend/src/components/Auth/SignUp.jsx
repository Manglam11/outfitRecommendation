import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../../context/AuthContext";
import "../../styles/auth.css"; // Import the styles

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { user } = useAuth(); // Get user from context

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/"); // Redirect after signup
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleSignUp}>
                <h2>Sign Up</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Sign Up</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    );
};

export default SignUp;
