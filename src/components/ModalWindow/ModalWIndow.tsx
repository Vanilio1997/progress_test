import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import styles from './ModalWIndow.module.css'

export const ModalWIndow = () => {

  const [volumeInput, setVolumeInput] = useState('');

  const dispatch = useDispatch()
  function closeModal(){
    dispatch({type:"MODAL_WINDOW_STATUS" , payload: false })
  }

  function makeDeal(){
    const dealTime = new Date()
    dispatch({type:"MAKE_DEAL", payload: {dealTime: dealTime, dealSide: operationType, dealPrice: currentPrice, dealVolume: volumeInput, dealInstrument: currentInstrument}})
    closeModal()
  }

  function chekNumberInput(value:any){
    if(/[0-9]/g.test(value)){
      setVolumeInput(value)
    }
  }
  

  const tradeinfo = useTypedSelector(state => state.tradeInfo)


  const {currentPrice,currentInstrument,operationType}=tradeinfo
  return (
    <div className={styles.modal_window_container}>
        <div className={styles.header}>
            <div>Make order</div>
            <div className={styles.cross_container}>
              <div className={styles.cross} onClick={closeModal}></div>
            </div>
        </div>
        <div>
          <div className={styles.body}>
            <div>
              <span className={operationType === 'buy' ? styles.green_color : styles.red_color}>{operationType}</span> {currentPrice?.toFixed(4)} {currentInstrument}
            </div>
            <div>
                <label>Volume<input className={styles.input} value={volumeInput} onChange={(e) => chekNumberInput(e.target.value) } type="text" /></label>
            </div>
            <div className={styles.btn_container}>
                <button className={styles.grey_color} onClick={closeModal}>Cancel</button>
                <button className={styles.blue_color} onClick={makeDeal}>OK</button>
            </div>
          </div>
        </div>
    </div>
  )
}
