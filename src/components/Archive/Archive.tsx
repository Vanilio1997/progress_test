import { useTypedSelector } from "../../hooks/useTypedSelector"
import styles from "./Archive.module.css"

const Archive = () => {
  const dealData = useTypedSelector(state => state.tradeInfo.dealData)
  

  return (
    <div className={styles.table_container}>
      <table className={styles.table}>
        <tr className={styles.tableHeader}>
          <th>Side</th>
          <th>Price</th>
          <th>Instrument</th>
          <th>Volume</th>
          <th>Timestamp</th>
        </tr>
        {
          dealData.length ?
            dealData.map((dealInfo) =>
              <tr>
                <td className={ dealInfo.dealSide === "buy" ? styles.green_color : styles.red_color}>{dealInfo.dealSide}</td>
                <td>{dealInfo.dealPrice.toFixed(4)}</td>
                <td>{dealInfo.dealInstrument}</td>
                <td>{dealInfo.dealVolume}</td>
                <td>{dealInfo.dealTime.toLocaleDateString('en-GB', {
                  hour: 'numeric',
                  minute: 'numeric',
                  second: 'numeric',
                })}
                </td>
              </tr>
            )
            :
            <p>No deal yet</p>
        }
      </table>
    </div>
  )
}

export default Archive