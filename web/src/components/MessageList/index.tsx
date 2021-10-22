import styles from './styles.module.scss'

import logoImg from '../../assets/logo.svg'
export function MessageList() {
  return (
    <div className={styles.messageListWrapper}>
      <img src="{logoImg}" alt="" />

      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}></p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="" alt="" />
            </div>
            <span>Leonardo</span>
          </div>
        </li>
      </ul>
    </div>
  )
}
