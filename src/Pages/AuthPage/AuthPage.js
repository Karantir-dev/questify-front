import styles from '../AuthPage/AuthPage.module.css'
import AuthForm from '../../Components/AuthForm'
import LoginForm from '../../Components/LoginForm'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import authOperations from '../../Redux/auth/auth-operations'

export default function Landing() {
  const [showSignup, setShowSignup] = useState(false)
  const [isVerify, setIsVerify] = useState(false)

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

  const dispatch = useDispatch()

  const { verifyToken } = useParams()
  useEffect(() => {
    if (verifyToken && !isVerify) {
      dispatch(authOperations.verifyUser(verifyToken, setIsVerify))
    }
  }, [dispatch])

  return (
    <div className={styles.containerLanding}>
      
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
            {showSignup
              ? 'Write your credentials to sign up, or'
              : 'Write your credentials to log in, or'}

            <button
              className={styles.switchButton}
              onClick={switchButtonHandler}
            >
              {showSignup ? 'log in' : 'sign up'}
            </button>
          </p>

          {showSignup ? (
            <AuthForm onSubmit={signupHandler} />
          ) : (
            <LoginForm onSubmit={loginHandler} />
          )}
        </div>
      
    </div>
  )
}
