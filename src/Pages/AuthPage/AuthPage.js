import styles from '../AuthPage/AuthPage.module.css'
import AuthForm from '../../Components/AuthForm'
import LoginForm from '../../Components/LoginForm'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

import authOpertaions from '../../Redux/auth/auth-operations'

export default function Landing() {
  const [showSignup, setShowSignup] = useState(true)

  const loginHandler = event => {
    event.preventDefault()
    console.log('login handler')
  }

  const signupHandler = event => {
    event.preventDefault()
    console.log('signup handler')
  }

  const switchButtonHandler = () => {
    setShowSignup(!showSignup)
  }

  let { verifyToken } = useParams()
  let isVerify
  if (verifyToken) {
    isVerify = authOpertaions.verifyUser(verifyToken)
    console.log(isVerify)
  }

  return (
    <div className={styles.containerLanding}>
      <div className={styles.containerQuest}>
        <div className={styles.containerForm}>
          {isVerify && (
            <h2>
              Ваша почта подтверждена, теперь войдите в акаунт, ваш токен{' '}
              {verifyToken}
            </h2>
          )}

          <a className={styles.logo} href="/">
            Questify
          </a>
          <p className={styles.description}>
            Questify will turn your life into a thrilling game full of amazing
            quests and exciting challenges.
          </p>
          <p className={styles.descriptionRegister}>
            {!showSignup
              ? 'Write your credentials to sign up, or'
              : 'Write your credentials to log in, or'}
              
              <button className={styles.switchButton} onClick={switchButtonHandler}>
                {!showSignup ? 'log in' : 'sign up'}
              </button>
          </p>

          {!showSignup ? (
            <AuthForm onSubmit={signupHandler} />
          ) : (
            <LoginForm onSubmit={loginHandler} />
          )}

        </div>
      </div>
    </div>
  )
}
