import styles from '../AuthPage/AuthPage.module.css'
import AuthForm from '../../Components/AuthForm'
import LoginForm from '../../Components/LoginForm'
import { useState } from "react"

export default function Landing() {

  const [showSignup, setShowSignup] = useState(true)

  const loginHandler = event => {
    event.preventDefault()
    console.log("login handler")
  };

  const signupHandler = event => {
    event.preventDefault();
    console.log("signup handler")
  };

  const switchButtonHandler = () => {
    setShowSignup(!showSignup)
  };

  return (
    <div className={styles.containerLanding}>
      <div className={styles.containerQuest}>
        <div className={styles.containerForm}>
          <a className={styles.logo} href="/">
            Questify
          </a>
          <p className={styles.description}>
            Questify will turn your life into a thrilling game full of amazing
            quests and exciting challenges.
          </p>
          <p className={styles.descriptionRegister}>
            Write your email to sign up or log in
          </p>
           
          {showSignup ? (<AuthForm onSubmit={signupHandler}/>) : (<LoginForm onSubmit={loginHandler}/>)}
      
          <button className={styles.switchButton} onClick={switchButtonHandler}>
            {showSignup ? "SWITCH TO LOGIN" : "SWITCH TO SIGNUP"}
          </button>
        </div>
      </div>
    </div>
  )
}
