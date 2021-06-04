import { useState, useCallback } from "react"
import { useDispatch } from "react-redux"
import authOperations from '../../Redux/auth/auth-operations'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styles from './AuthForm.module.css'

export default function AuthForm() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const onRegister = useCallback(
    () =>
      dispatch(authOperations.register({ name, email, password })),
      [name, email, password, dispatch],
  );

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
      toast.error('Enter a name at least 2 characters!')
    } 
    
    if (email === '') {
      toast.error('Enter email!')
    }
    
    if (password.length < 8) {
      toast.error('Enter a password at least 8 characters!')
    }
         
      onRegister(name, email, password);
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

        <button
          disabled={!name && !email && password < 1}
          className={styles.btnForm} 
          type="submit"
        >go!
        </button>
      </form>
    </div>
)}