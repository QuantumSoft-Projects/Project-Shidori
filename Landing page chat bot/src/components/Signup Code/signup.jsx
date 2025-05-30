import React, { useState } from "react";
import logo from "../images/Final logo.jpg"
import { FaGoogle, FaFacebook, FaLinkedin } from "react-icons/fa";
import "./signup.css";

const AuthForm = () => {
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

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        if (validateSignup()) {
            setRegisteredUsers([...registeredUsers, { email: signupData.email, password: signupData.password }]);
            alert("Signup successful!");
            setSignupData({ name: "", email: "", num: "", address: "", password: "", confirmPassword: "" });
        }
    };

    const handleSigninSubmit = (e) => {
        e.preventDefault();
        if (validateSignin()) {
            alert("Sign-in successful!");
            setSigninData({ email: "", password: "" }); // Clear form fields after successful login
        }
    };

    return (
        <div className="auth-container">
        <div className="ma mt-cals[100vw-60px]">
            <img className="img" src={logo} alt="logo" />

            <div className={`auth-wrapper ${isRightPanelActive ? "right-panel-active" : ""}`} id="main">
                {/* Signup Form */}
                <div className="signup">
                    <form onSubmit={handleSignupSubmit}>
                        <h1 className="font-bold mb-[15px] text-[29px]">Sign-up</h1>
                        <input
                            className="bg-white p-3 mb-4 w-full rounded-lg border border-gray-300 outline-none text-base shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg hover:border-[#ff6700]"
                            type="text"
                            placeholder="Name"
                            value={signupData.name}
                            onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
                            required
                        />
                        {errors.name && <p className="error">{errors.name}</p>}

                        <input
                          className="bg-white p-3 mb-4 w-full rounded-lg border border-gray-500 outline-none text-base shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg hover:border-[#ff6700]" 
                          type="email"
                            name="email"
                            placeholder="Email"
                            value={signupData.email}
                            onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                            required
                        />
                        {errors.email && <p className="error">{errors.email}</p>}

                        <input
                            className="bg-white p-3 mb-4 w-full rounded-lg border border-gray-300 outline-none text-base shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg hover:border-[#ff6700]" 
                            type="text"
                            name="num"
                            placeholder="Mobile Number"
                            value={signupData.num}
                            onChange={(e) => setSignupData({ ...signupData, num: e.target.value })}
                            required
                        />
                        {errors.num && <p className="error">{errors.num}</p>}

                        <input
                         className="bg-white p-3 mb-4 w-full rounded-lg border border-gray-300 outline-none text-base shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg hover:border-[#ff6700]" 
                          
                            type="text"
                            name="address"
                            placeholder="Address"
                            value={signupData.address}
                            onChange={(e) => setSignupData({ ...signupData, address: e.target.value })}
                            required
                        />
                        {errors.address && <p className="error">{errors.address}</p>}

                        <input
                            className="bg-white p-3 mb-4 w-full rounded-lg border border-gray-300 outline-none text-base shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg hover:border-[#ff6700]"
                            
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={signupData.password}
                            onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                            required
                        />
                        {errors.password && <p className="error">{errors.password}</p>}

                        <input
                            className="bg-white p-3 mb-4 w-full rounded-lg border border-gray-300 outline-none text-base shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg hover:border-[#ff6700]" 
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={signupData.confirmPassword}
                            onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                            required
                        />
                        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

                        <button
                         className="bg-[#ff4b2b] text-white text-xs font-bold py-3 px-10 my-3 -mt-[5px] rounded-[20px] border border-[#ff4b2b] outline-none tracking-wider uppercase transition-transform duration-75 ease-in cursor-pointer hover:bg-[#e85c00] hover:shadow-[0_4px_10px_rgba(255,103,0,0.5)] active:scale-90"

                         type="submit">Sign Up</button>
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
                        <h1 className="mb-[20px] font-bold text-[28px]" >Sign in</h1>
                        <input
                             className="bg-white p-3 mb-4 w-full rounded-lg border border-gray-300 outline-none text-base shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg hover:border-[#ff6700]"
                            
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={signinData.email}
                            onChange={(e) => setSigninData({ ...signinData, email: e.target.value })}
                            required
                        />
                        {errors.email && <p className="error">{errors.email}</p>}

                        <input
                          className="bg-white p-3 mb-4 w-full rounded-lg border border-gray-300 outline-none text-base shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg hover:border-[#ff6700]"
                            
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={signinData.password}
                            onChange={(e) => setSigninData({ ...signinData, password: e.target.value })}
                            required
                        />
                        {errors.password && <p className="error">{errors.password}</p>}

                        <a href="#">Forget your Password?</a>
                        <button 
                         className="bg-[#ff4b2b] text-white text-xs font-bold py-3 px-10 my-3 -mt-[5px] rounded-[20px] border border-[#ff4b2b] outline-none tracking-wider uppercase transition-transform duration-75 ease-in cursor-pointer hover:bg-[#e85c00] hover:shadow-[0_4px_10px_rgba(255,103,0,0.5)] active:scale-90"

                        type="submit">Sign In</button>
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
                            <h1 className="text-[24px] font-semibold">Welcome Back!</h1>
                            <p  className="text-[14px] font-thin leading-[20px] tracking-[0.5px] my-[15px] mb-[20px]">To keep connected with us please log in with your personal info</p>
                            <button id="signIn"  onClick={handleSignIn}>Sign In</button>
                        </div>
                        <div className="overlay-right">
                            <h1 className="text-[24px] font-semibold">Hello, Friend</h1>
                            <p  className="text-[14px] font-thin leading-[20px] tracking-[0.5px] my-[15px] mb-[20px]">Enter your personal details and start the journey with us</p>
                            <button id="signUp"  onClick={handleSignUp}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AuthForm;
