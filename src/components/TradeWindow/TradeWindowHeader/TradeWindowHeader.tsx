import styles from './TradeWindowHeader.module.css'
import {useState} from 'react'
import { ITabsInfoInterface } from './types'
import {Link} from 'react-router-dom'

const TradeWindowHeader = () => {


  const [activeTab, setActiveTab] = useState(0);
  const tabInfo :ITabsInfoInterface[]  =  [ {value: 'Trading' , link: '/' , className: 'left_tab'} , {value: 'Archive' , link: '/archive', className: 'middle_tab'}]

  return (
    <div className={styles.container} >
       {
        tabInfo.map((item , index) => (
          <div className={index === activeTab ? styles.activeTab  : styles.tab }>
            <Link onClick={()=> setActiveTab(index)} to={item.link}>{item.value}</Link> 
          </div>
        ))
       }
    </div>
  )
}

export default TradeWindowHeader