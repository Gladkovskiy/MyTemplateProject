import {observer} from 'mobx-react-lite'
import React from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'

import {publicRoutes, authRotes} from '../routes'
import UserStorage from '../store/UserStorage'

const AppRouter = () => {
  return (
    <>
      <Routes>
        {UserStorage.isAdmin && (
          <Route path={authRotes[0].path} element={authRotes[0].element} />
        )}
        {UserStorage.isUser && (
          <Route path={authRotes[1].path} element={authRotes[1].element} />
        )}
        {publicRoutes.map(({path, element}) => (
          <Route key={path} path={path} element={element} />
        ))}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default observer(AppRouter)
