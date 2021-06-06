import { useState, useCallback } from "react"
import { useDispatch } from "react-redux"
import authOperations from '../../Redux/auth/auth-operations'
import authActions from '../../Redux/auth/auth-actions'
import 'react-toastify/dist/ReactToastify.css'
import styles from './AuthForm.module.css'
import IconButton from '../IconButton/IconButton'

export default function AuthForm() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;

      switch (name) {
        case 'name':
          setName(value);
          break;

        case 'email':
          setEmail(value);
          break;
      
        case 'password':
          setPassword(value);
          break;
      
        default:
          return;
      }
  }

  const handleSubmit = event => {
    event.preventDefault();

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
          }
         
      clear();
  }
    
  const clear = () => {
    setName('');
    setEmail('');
    setPassword('');
  }

  return (
    <div className={styles.registerPage}>
      <form className={styles.form}
            onSubmit={handleSubmit}
            autoComplete="off"  
      >
        <input className={styles.inputForm}
               autoComplete="off"
               type="text"
               name="name"
               placeholder="Name"
               value={name}
               onChange={handleChange}
        />

        <input className={styles.inputForm}
               autoComplete="off"
               type="email"
               name="email"
               placeholder="Email"
               value={email}
               onChange={handleChange}
        />
        
        <input className={styles.inputForm}
               type="password"
               name="password"
               placeholder="Password"
               value={password}
               onChange={handleChange}
        />

        <IconButton disabled={!name || !email || password < 1}
          className={styles.buttonReg} type="submit">
           go!
         </IconButton>
      </form>
    </div>
)}