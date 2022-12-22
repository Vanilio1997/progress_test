import Time from "./Time"
import Trade from "./Trade"
import Option from "./Select"
import styles from "./Trading.module.css"

const Trading = () => {
  return (
    <div className={styles.container}>
      <Time />
      <Option />
      <Trade />
    </div>
  )
}

export default Trading
