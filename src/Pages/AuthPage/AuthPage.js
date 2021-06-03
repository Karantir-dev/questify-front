import styles from '../AuthPage/AuthPage.module.css';

export default function Landing() {

    return (
        <div className={styles.containerLanding}>
            <div className={styles.containerQuest}>
                <div className={styles.containerForm}>
                        <a className={styles.logo} href="#">
                            Questify
                        </a>
                        <p className={styles.description}>
                            Questify will turn your life into a thrilling
                            game full of amazing quests
                            and exciting challenges.
                        </p>
                        <p className={styles.descriptionRegister}>Write your email to sign up or log in</p>
                
                        <form className={styles.form} /* onSubmit={handleSubmit} */>
            
                            <input className={styles.inputForm}
                                type="text"
                                name="email"
                                //value={email}
                                placeholder="Email"
                                /* id={emailInputId}
                                onChange={handleChange} */
                            />
                    
                            <input className={styles.inputForm}
                                type="number"
                                name="password"
                                /* value={number} */
                                placeholder="Password"
                                /* id={passwordInputId}
                                onChange={handleChange} */
                            />

                            <button
                                /* disabled={!email && !password < 1} */
                                className={styles.btnForm}
                                type="submit">
                                go!
                            </button>
                        </form>
                </div>
            </div>
        </div>
    )
}
