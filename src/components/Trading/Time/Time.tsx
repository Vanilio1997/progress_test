import React,{useEffect , useState} from 'react'
import styles from './Time.module.css'

const Time = () => {
    const date = new  Date()
    const [currentTime, setCurrentTime] = useState< Date>(date)

 
    useEffect(()=>{
        let currentData = new Date()     
        const interval =  setInterval(() => setCurrentTime( currentData), 1000)
        return () => clearInterval(interval)
    },[currentTime])
    
  return (
    <div className={styles.time}>
        {currentTime.toLocaleTimeString('en-GB', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        })}
    </div>
  )
}

export default Time