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
      <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
        <input
          className={styles.inputForm}
          autoComplete="off"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          className={styles.inputForm}
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

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
