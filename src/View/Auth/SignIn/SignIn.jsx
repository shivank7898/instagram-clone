 import { Link, useNavigate } from "react-router-dom";
 import styles from "./signin.module.css";
 import logo from "../../../Assets/insta.png";
 import { useState } from "react";
 import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
 import { auth } from "../../../config/firebase/firebase";

 const SignIn = () => {
   const [name, setName] = useState();
   const [email, setEmail] = useState();
   const [password, setPassword] = useState();
   const navigate = useNavigate();

   const handleSignIn = () => {
     if (name === "" || email === "" || password === "") {
       return alert("Fill all the details");
     } else {
        signInWithEmailAndPassword(auth, email, password)
         .then(() => {
           if (auth.currentUser) {
             navigate("/");
           }
         })
         .catch((error) => {
           alert("invalid email and password");
         });
     }
   };
   return (
     <div className={styles.card}>
       <div className="icon">
         <img src={logo} height="40px" />
       </div>
       <div className={styles.inputBox}>
         <label>Email</label>
         <input
           type="text"
           value={email}
           onChange={(e) => {
             setEmail(e.target.value);
           }}
         />
       </div>
       <div className={styles.inputBox}>
         <label>Password</label>
         <input
           type="password"
           value={password}
           onChange={(e) => {
             setPassword(e.target.value);
           }}
         />
       </div>
       <div className= {styles.signup}>
         <button onClick={handleSignIn}> Login </button>
       </div>
       <div className= {styles.login}>
         <p>
           If you don't have an account click here to
           <Link to="/signUp">
             <span> Sign Up </span>
           </Link>
         </p>
       </div>
     </div>
   );
 };

 export default SignIn;