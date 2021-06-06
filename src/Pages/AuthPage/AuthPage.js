import styles from '../AuthPage/AuthPage.module.css'
import AuthForm from '../../Components/AuthForm'
import LoginForm from '../../Components/LoginForm'

export default function Landing() {
  return (
    <div className={styles.containerLanding}>
      <div className={styles.containerQuest}>
        <div className={styles.containerForm}>
          <a className={styles.logo} href="/">
            Questify
          </a>
          <p className={styles.description}>
            Questify will turn your life into a thrilling game full of amazing
            quests and exciting challenges.
          </p>
          <p className={styles.descriptionRegister}>
            Write your email to sign up or log in
          </p>

          <AuthForm />
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
