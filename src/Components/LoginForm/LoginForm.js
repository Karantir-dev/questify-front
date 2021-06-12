import { useState } from 'react'
import { useDispatch } from 'react-redux'
import authOperations from '../../Redux/auth/auth-operations'
import authActions from '../../Redux/auth/auth-actions'
import 'react-toastify/dist/ReactToastify.css'
import IconButton from '../IconButton/IconButton'
import styles from '../AuthForm/AuthForm.module.css'

export default function LoginRouter() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = event => {
    event.preventDefault()

    if (email === '') {
      dispatch(authActions.logInError('Enter email!'))
    } else if (password.length < 8) {
      dispatch(authActions.logInError('Enter a password at least 8 characters'))
    } else {
      dispatch(authOperations.login({ email, password }))
      clear()
    }
  }

  const clear = () => {
    setEmail('')
    setPassword('')
  }

  return (
    <div className={styles.loginPage}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            className={styles.inputForm}
            type="email"
            name="email"
            placeholder=" "
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <label htmlFor="email" className={styles.labelForm}>
            Email
          </label>
        </div>

        <div className={styles.inputContainer}>
          <input
            className={styles.inputForm}
            type="password"
            name="password"
            placeholder=" "
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <label htmlFor="password" className={styles.labelForm}>
            Password
          </label>
        </div>

        <IconButton
          disabled={!email || password < 1}
          className={styles.buttonReg}
          type="submit"
        >
          go!
        </IconButton>
      </form>
    </div>
  )
}
