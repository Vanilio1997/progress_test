import TradeWindowHeader from './TradeWindowHeader'
import styles from './tradeWindow.module.css'
import ModalWIndow from '../ModalWindow'
import { useTypedSelector } from '../../hooks/useTypedSelector'

import { AppRouter } from '../../AppRouter'


 

const TradeWindow = () => {
  const isModalOpen = useTypedSelector(state => state.tradeInfo.isTradeModal)
  console.log(isModalOpen);

  return (
    <>
      <div className={styles.wrapper}>
        <TradeWindowHeader />
        <AppRouter />
        {
          isModalOpen ?
            <div className={styles.modalWindow}>
            <ModalWIndow />
            </div>
          : 
          null
        }
      </div>
    </>
  )
}

export default TradeWindow