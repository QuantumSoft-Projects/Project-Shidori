import React, { useState } from "react";
import { FaGoogle, FaFacebook, FaLinkedin } from "react-icons/fa";
import "./signup.css";


const SignUp = () => {
    const [isRightPanelActive, setIsRightPanelActive] = useState(false);
    
    const [signupData, setSignupData] = useState({
        name: "",
        email: "",
        num: "",
        address: "",
        password: "",
        confirmPassword: "",
    });
    const [signinData, setSigninData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const [registeredUsers, setRegisteredUsers] = useState([]); // Store signed-up users

    const handleSignUp = () => setIsRightPanelActive(true);
    const handleSignIn = () => setIsRightPanelActive(false);

    const validateSignup = () => {
        let newErrors = {};
        if (!signupData.name.trim()) {
            newErrors.name = "Name is required";
        } else if (signupData.name.length > 25) {
            newErrors.name = "Name should not exceed 25 characters";
        }

        if (!signupData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Invalid email format";
        if (!signupData.num.match(/^\d{10}$/)) newErrors.num = "Mobile number must be 10 digits";
        if (!signupData.address.trim()) newErrors.address = "Address is required";
        if (signupData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
        if (signupData.confirmPassword !== signupData.password) newErrors.confirmPassword = "Passwords do not match";
        if (!signupData.name.match(/^[A-Za-z\s]+$/)) newErrors.name = "Name should only contain letters.";
        if (signupData.name.length < 3 || signupData.name.length > 20) newErrors.name = "Name must be between 3 and 20 characters.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateSignin = () => {
        let newErrors = {};
        const user = registeredUsers.find(user => user.email === signinData.email);

        if (!signinData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            newErrors.email = "Invalid email format";
        } else if (!user) {
            newErrors.email = "Email not found. Please sign up first.";
        } else if (user.password !== signinData.password) {
            newErrors.password = "Incorrect password";
        } else if (!/^[A-Za-z\s]+$/.test(signinData.name)) {
          newErrors.name = " Name should only contain letters.";
        } else if (signinData.name.length < 3 ||signinData.name.length > 20) {
        newErrors.name = " Name must be between 3 and 20 characters.";
      }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        if (validateSignup()) {
            const payload = {
                fullName: signupData.name,
                email: signupData.email,
                phoneNumber: signupData.num,
                passwordHash: signupData.password,
                username: signupData.name.toLowerCase().replace(/\s+/g, '') + Math.floor(Math.random() * 1000),
                role: "CUSTOMER",
                address: signupData.address
            };
    
            try {
                const response = await fetch("http://localhost:9090/api/users/add", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(payload)
                });
    
                if (response.ok) {
                    alert("Signup successful! 🎉");
                    console.log(payload);
                    setSignupData({
                        name: "",
                        email: "",
                        num: "",
                        address: "",
                        password: "",
                        confirmPassword: ""
                    });
                } else {
                    const errData = await response.json();
                    alert("Signup failed: " + (errData.message || "Server error"));
                }
            } catch (err) {
                console.error("Signup error:", err);
                alert("Something went wrong while signing up.");
            }
        }
    };
    
    const handleSigninSubmit = async (e) => {
        e.preventDefault();
    
        const { email, password } = signinData;
    
        try {
            const response = await fetch("http://localhost:9090/api/do_login", {
                method: "POST",
                credentials: "include", // important to store session cookies
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });
    
            if (response.ok) {
                alert("Login successful!");
                window.location.href = "/hero"; // redirect
            } else {
                const message = await response.text();
                alert("Login failed: " + message);
            }
        } catch (error) {
            alert("Error: " + error.message);
        }
    };
    
  
    

    return (
        <div className="ma">
            <img className="img" src="./src/Images/logo.png" alt="logo" />

            <div className={`container ${isRightPanelActive ? "right-panel-active" : ""}`} id="main">
                {/* Signup Form */}
                <div className="signup">
                    <form onSubmit={handleSignupSubmit}>
                        <h1 className="signu">Sign-up</h1>
                        <input
                            type="text"
                            placeholder="Name"
                            value={signupData.name}
                            onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
                            required
                        />
                        {errors.name && <p className="error">{errors.name}</p>}

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={signupData.email}
                            onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                            required
                        />
                        {errors.email && <p className="error">{errors.email}</p>}

                        <input
                            type="text"
                            name="num"
                            placeholder="Mobile Number"
                            value={signupData.num}
                            onChange={(e) => setSignupData({ ...signupData, num: e.target.value })}
                            required
                        />
                        {errors.num && <p className="error">{errors.num}</p>}

                        <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            value={signupData.address}
                            onChange={(e) => setSignupData({ ...signupData, address: e.target.value })}
                            required
                        />
                        {errors.address && <p className="error">{errors.address}</p>}

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={signupData.password}
                            onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                            required
                        />
                        {errors.password && <p className="error">{errors.password}</p>}

                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={signupData.confirmPassword}
                            onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                            required
                        />
                        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

                        <button type="submit">Sign Up</button>
                        <p className="or">Or</p>
                        <div className="socialcontainer">
                            <a href="/" className="social"><FaGoogle /></a>
                            <a href="/" className="social"><FaFacebook /></a>
                            <a href="/" className="social"><FaLinkedin /></a>
                        </div>
                    </form>
                </div>

                {/* Signin Form */}
                <div className="signin">
                    <form onSubmit={handleSigninSubmit}>
                        <h1 style={{ marginBottom: "30px" }}>Sign in</h1>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={signinData.email}
                            onChange={(e) => setSigninData({ ...signinData, email: e.target.value })}
                            required
                        />
                        {errors.email && <p className="error">{errors.email}</p>}

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={signinData.password}
                            onChange={(e) => setSigninData({ ...signinData, password: e.target.value })}
                            required
                        />
                        {errors.password && <p className="error">{errors.password}</p>}

                        <a href="#">Forget your Password?</a>
                        <button type="submit">Sign In</button>
                        <p className="or">Or</p>
                        <div className="socialcontainer">
                            <a href="/" className="social"><FaGoogle /></a>
                            <a href="/" className="social"><FaFacebook /></a>
                            <a href="/" className="social"><FaLinkedin /></a>
                        </div>
                    </form>
                </div>

                {/* Overlay */}
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please log in with your personal info</p>
                            <button id="signIn" onClick={handleSignIn}>Sign In</button>
                        </div>
                        <div className="overlay-right">
                            <h1>Hello, Friend</h1>
                            <p>Enter your personal details and start the journey with us</p>
                            <button id="signUp" onClick={handleSignUp}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;