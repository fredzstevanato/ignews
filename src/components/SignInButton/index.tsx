import styles from './styles.module.scss'

import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

export function SignInButton () {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button 
    type="button"
    className={styles.singInButton}
    >
      <FaGithub color="#04d361"/>
      SignIn in with Github
      <FiX color="#737380" className={styles.closeIcon}/>
    </button>
    
  ) : (
    <button 
    type="button"
    className={styles.singInButton}
    >
      <FaGithub color="#eba417"/>
      SignIn in with Github
    </button>
  )
}