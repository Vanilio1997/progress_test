import React from 'react'
import {Route , Routes} from 'react-router-dom'
import {config} from './config'

export const AppRouter = () => {
    
  return (
    <Routes>
        {
            config.map( (routeInfo, index) =>(
                <Route key={index} path={routeInfo.link}  element={routeInfo.element}/>
            ))
        }
    </Routes>
  )
}
