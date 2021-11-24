import React from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'

import {publicRoutes} from '../routes'

const AppRouter = () => {
  return (
    <>
      <Routes>
        {publicRoutes.map(({path, element}) => (
          <Route key={path} path={path} element={element} />
        ))}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default AppRouter
