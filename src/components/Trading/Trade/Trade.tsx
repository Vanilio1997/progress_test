import React,{useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import styles from './Trade.module.css'

export const Trade = () => {

  const [buyValue , setBuyValue ] = useState((Math.random() * 1000))
  const [sellValue , setSellValue] = useState (buyValue - (buyValue * 0.005))


  const dispatch = useDispatch()
  
  
  useEffect(()=>{
    const interval = setInterval(()=> {
      if(Math.random() >= 0.5){
        setBuyValue(buyValue * 1.01)
        setSellValue(sellValue * 1.01)
      } else{
        setBuyValue(buyValue * 0.99)
        setSellValue(sellValue * 0.99)
      }
    }, 10000)
    return () => clearInterval(interval)

  }, [buyValue])

  function chooseOperation(price: number , operationType: string){
    dispatch({type:"PICK_OPERATION_INFO" , payload: { price: price , operationType: operationType }})
    dispatch({type:"MODAL_WINDOW_STATUS" , payload: true })
  }

  return (
    <div className={styles.trade_container}>
        <div onClick={()=> chooseOperation(buyValue , 'buy') } className={styles.green_color}>
            <div>BUY</div>
            <div>{buyValue.toFixed(4)}</div>
        </div>
        <div onClick={()=> chooseOperation(sellValue, 'sell')} className={styles.red_color}>
            <div>SELL</div>
            <div>{sellValue.toFixed(4)}</div>
        </div>
    </div>
  )
}
