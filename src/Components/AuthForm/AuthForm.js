import { useState } from 'react'
import { useDispatch } from 'react-redux'
import authOperations from '../../Redux/auth/auth-operations'
import authActions from '../../Redux/auth/auth-actions'
import 'react-toastify/dist/ReactToastify.css'
import styles from './AuthForm.module.css'
import IconButton from '../IconButton/IconButton'

export default function AuthForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const handleChange = event => {
    const { name, value } = event.target

    switch (name) {
      case 'name':
        setName(value)
        break

      case 'email':
        setEmail(value)
        break

      case 'password':
        setPassword(value)
        break

      default:
        return
    }
  }

  const handleSubmit = event => {
    event.preventDefault()

    if (name.length < 2) {
      dispatch(authActions.registerError('Enter a name at least 2 characters!'))
    } else if (email === '') {
      dispatch(authActions.registerError('Enter email!'))
    } else if (password.length < 8) {
      dispatch(
        authActions.registerError('Enter a password at least 8 characters!'),
      )
    } else {
      dispatch(authOperations.register({ name, email, password }))
      clear()
    }
  }

  const clear = () => {
    setName('')
    setEmail('')
    setPassword('')
  }

  return (
    <div className={styles.registerPage}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            className={styles.inputForm}
            type="text"
            name="name"
            id="name"
            placeholder=" "
            value={name}
            onChange={handleChange}
          />
          <label htmlFor="name" className={styles.labelForm}>
            Name
          </label>
        </div>

        <div className={styles.inputContainer}>
          <input
            className={styles.inputForm}
            type="email"
            name="email"
            id="email"
            placeholder=" "
            value={email}
            onChange={handleChange}
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
            onChange={handleChange}
          />
          <label htmlFor="password" className={styles.labelForm}>
            Password
          </label>
        </div>

        <IconButton
          disabled={!name || !email || password < 1}
          className={styles.buttonReg}
          type="submit"
        >
          go!
        </IconButton>
      </form>
    </div>
  )
}
