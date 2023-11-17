import { Link, useNavigate } from "react-router-dom";
import styles from "./signup.module.css";
import logo from "../../../Assets/insta.png";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../config/firebase/firebase";

const SignIn = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (name === "" || email === "" || password === "") {
      return alert("Fill all the details");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          return updateProfile(userCredential.user, {
            displayName: name,
          });
        })
        .then(() => {
          if (auth.currentUser) {
            navigate("/");
            console.log(auth.currentUser, auth.currentUser.displayName);
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
        <label>First Name </label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className={styles.inputBox}>
        <label>Last Name </label>
        <input type="text" />
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
      <div className={styles.signup}>
        <button onClick={handleSignUp}>Create an Account </button>
      </div>
      <div className={styles.login}>
        <p>
          If you already have an account click here to
          <Link to="/signIn">
            <span> Log in </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
