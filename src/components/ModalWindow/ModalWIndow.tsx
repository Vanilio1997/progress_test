import React from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'

export const ModalWIndow = () => {
  const dispatch = useDispatch()
  function closeModal(){
    dispatch({type:"MODAL_WINDOW_STATUS" , payload: false })
  }

  function makeDeal(){
    const dealTime = new Date()
    dispatch({type:"MAKE_DEAL", payload: {dealTime: dealTime,dealSide:operationType, dealPrice: currentPrice,dealVolume:}})
    
  }
  

  const tradeinfo = useTypedSelector(state => state.tradeInfo)
  console.log(tradeinfo);
  
  const {currentPrice,currentInstrument,operationType}=tradeinfo


  
  return (
    <div>
        <div>
            <div>Make order</div>
            <button onClick={closeModal}>close</button>
        </div>
        <div>
          {operationType} {currentPrice?.toFixed(4)} {currentInstrument}
        </div>
        <div>
            <label>Volume<input type="text" /></label>
        </div>
        <div>
            <button onClick={closeModal}>Cancel</button>
            <button>OK</button>
        </div>
    </div>
  )
}
