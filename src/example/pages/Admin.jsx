import React, {useState} from 'react'
import AdminPanel from '../components/AdminPanel'
import AddNews from '../components/modalAdminPanel/EditNews/AddNews'
import DeleteNews from '../components/modalAdminPanel/EditNews/DeleteNews'
import EditNews from '../components/modalAdminPanel/EditNews/EditNews'
import AddUser from '../components/modalAdminPanel/EditUser/AddUser'
import EditUser from '../components/modalAdminPanel/EditUser/EditUser'
import AddTariff from '../components/modalAdminPanel/EditTariff/AddTariff'
import EditTarif from '../components/modalAdminPanel/EditTariff/EditTarif'
import Helmet from '../components/Helmet'

const Admin = () => {
  const [addNews, setAddNews] = useState(false)
  const [editNews, setEditNews] = useState(false)
  const [deleteNews, setDeleteNews] = useState(false)
  const [addUser, setAddUser] = useState(false)
  const [editUser, setEditUser] = useState(false)
  const [addTariff, setAddTariff] = useState(false)
  const [editTariff, setEditTariff] = useState(false)

  const options = {
    setAddNews,
    setEditNews,
    setDeleteNews,
    setAddUser,
    setEditUser,
    setAddTariff,
    setEditTariff,
  }

  return (
    <>
      <Helmet title="Админ панель" description="Powernet" />

      <AdminPanel modalOpen={options} />
      {/* новости */}
      <AddNews show={addNews} handleClose={() => setAddNews(false)} />
      <EditNews show={editNews} handleClose={() => setEditNews(false)} />
      <DeleteNews show={deleteNews} handleClose={() => setDeleteNews(false)} />
      {/* пользователь */}
      <AddUser show={addUser} handleClose={() => setAddUser(false)} />
      <EditUser show={editUser} handleClose={() => setEditUser(false)} />
      {/* тариф */}
      <AddTariff show={addTariff} handleClose={() => setAddTariff(false)} />
      <EditTarif show={editTariff} handleClose={() => setEditTariff(false)} />
    </>
  )
}

export default Admin
