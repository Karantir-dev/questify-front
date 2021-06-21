import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams, NavLink } from 'react-router-dom'

import authOperations from '../../Redux/auth/auth-operations'
import styles from '../AuthPage/AuthPage.module.css'
import s from './VerificationPage.module.css'

export default function VerificationPage() {
  const [isVerify, setIsVerify] = useState(false)

  const dispatch = useDispatch()

  const { verifyToken } = useParams()
  useEffect(() => {
    if (verifyToken) {
      dispatch(authOperations.verifyUser(verifyToken, setIsVerify))
    }
  }, [dispatch, verifyToken])

  return (
    <div className={styles.containerLanding}>
      <div className={styles.containerForm}>
        <a className={styles.logo} href="/">
          Questify
        </a>

        {isVerify ? (
          <p className={s.text}>
            Your mail has been successfully confirmed. You can now{' '}
            <NavLink
              className={`${styles.switchButton} ${s.loginBtn}`}
              to="/auth"
            >
              log into
            </NavLink>{' '}
            your account.
          </p>
        ) : (
          <p className={s.text}>Something went wrong. Send email again</p>
        )}
      </div>
    </div>
  )
}
