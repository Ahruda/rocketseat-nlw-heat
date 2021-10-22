import styles from './App.module.css'
import { LoginBox } from './components/LoginBox'
import { MessageList } from './components/MessageList'

export function App() {
  return (
    <main className={styles.contentWrapper}>
      <MessageList></MessageList>
      <LoginBox></LoginBox>
    </main>
  )
}
