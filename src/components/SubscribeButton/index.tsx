import styles from './styles.module.scss'

import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

export function SubscribeButton () {
  return(
    <button
      type="button"
      className={styles.subscribeButton}
    >
      Subscribe now
    </button>
  )
}