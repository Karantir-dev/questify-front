import styles from '../AuthPage/AuthPage.module.css'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import authOperations from '../../Redux/auth/auth-operations'

export default function Landing() {
  const [isVerify, setIsVerify] = useState(false)

  const dispatch = useDispatch()

  const { verifyToken } = useParams()
  useEffect(() => {
    if (verifyToken && !isVerify) {
      dispatch(authOperations.verifyUser(verifyToken, setIsVerify))
    }
  }, [dispatch])

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
        </div>
      </div>
    </div>
  )
}
