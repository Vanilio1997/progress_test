import React,{useEffect} from 'react'
import { optionsData } from './optionsData'
import styles from './Select.module.css'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../../hooks/useTypedSelector'

const Select = () => {
  const dispatch = useDispatch()
  const currentInstrument = useTypedSelector(state => state.tradeInfo.currentInstrument)


  useEffect(()=>{
    dispatch({type: "CHANGE_OPTION" , payload: optionsData[0] })
  }, [])
  
  return (
    <div>
      <select value={currentInstrument} onChange={(e)=> dispatch({type: "CHANGE_OPTION" , payload: e.target.value }) } className={styles.select_container}>
        {
          optionsData.map( optionValue => <option>{optionValue}</option>)
        }
      </select>
    </div>
  )
}

export default Select