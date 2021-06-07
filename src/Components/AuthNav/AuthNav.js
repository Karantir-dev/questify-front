import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import authSelectors from '../../Redux/auth/auth-selectors'
import styles from './AuthNav.module.css'

export default function Navigation() {

  return (
    <nav className={styles.navigation}>
      <NavLink to="/login" exact className={styles.navigationLink}>
        Login
      </NavLink>
    </nav>)
}