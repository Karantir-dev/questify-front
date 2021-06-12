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
      
        <div className={styles.containerForm}>
          <a className={styles.logo} href="/">
            Questify
          </a>
          <p className={styles.description}>
            Questify will turn your life into a thrilling game full of amazing
            quests and exciting challenges.
          </p>
          <p className={styles.descriptionRegister}>
            {showSignup
              ? "Write your credentials to sign up, or"
              : "Write your credentials to log in, or"
            }
          </p>
           
          {showSignup ? (<AuthForm onSubmit={signupHandler}/>) : (<LoginForm onSubmit={loginHandler}/>)}
      
          <button className={styles.switchButton} onClick={switchButtonHandler}>
            {showSignup ? "log in" : "sign up"}
          </button>
        </div>
      
    </div>
  )
}
