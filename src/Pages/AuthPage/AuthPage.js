import { useState } from 'react'
import { useSelector } from 'react-redux'
import AuthForm from '../../Components/AuthForm'
import LoginForm from '../../Components/LoginForm'
import Loader from '../../Components/Loader/Loader'
import Modal from '../../Components/Modal/Modal'
import authSelectors from '../../Redux/auth/auth-selectors'

import styles from '../AuthPage/AuthPage.module.css'

export default function Landing() {
  const [showSignup, setShowSignup] = useState(false)
  const [registerSuccess, setRegisterSuccess] = useState(false)

  const switchButtonHandler = () => {
    setShowSignup(!showSignup)
  }

  const isLoading = useSelector(authSelectors.getIsLoadding)

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

        {isLoading ? (
          <Modal>
            <Loader size={100} />
          </Modal>
        ) : registerSuccess ? (
          <p className={styles.successRegText}>
            You have successfully registered, go to your email to confirm it
          </p>
        ) : (
          <>
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
              <AuthForm onRegister={setRegisterSuccess} />
            ) : (
              <LoginForm />
            )}
          </>
        )}
      </div>
    </div>
  )
}
