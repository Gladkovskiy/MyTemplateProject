import React from 'react'
import {Form, FloatingLabel, Button} from 'react-bootstrap'
import {Formik, ErrorMessage} from 'formik'
import {init, validationSchema} from '../../../formik/addUsers.js'
import useGetRole from '../../../http/react-query/role/useGetRole.js'
import useGetTariffs from '../../../http/react-query/tariffs/useGetTariffs.js'
import useAddUser from '../../../http/react-query/user/useAddUser.js'

const AddForm = ({handleClose}) => {
  const role = useGetRole()
  const tariffs = useGetTariffs()
  const addUser = useAddUser()

  const controls = [
    {name: 'fio', label: 'ФИО'},
    {name: 'adress', label: 'Адрес'},
    {name: 'ip', label: 'IP'},
    {name: 'login', label: 'Login'},
    {name: 'password', label: 'Password'},
  ]

  const onSubmit = values =>
    addUser.mutateAsync(values).then(() => handleClose())

  return (
    <Formik
      initialValues={init(role.data[0].id, tariffs.data[0].id)}
      validateOnBlur
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isValid,
        handleSubmit,
        dirty,
        setFieldValue,
      }) => (
        <Form>
          {controls.map(({name, label}) => (
            <FloatingLabel label={label} className="mb-3" key={name}>
              <Form.Control
                type="text"
                placeholder={label}
                value={values[name]}
                onChange={handleChange}
                onBlur={handleBlur}
                name={name}
                isValid={!errors[name] && touched[name]}
                isInvalid={errors[name] && touched[name]}
              />
              <ErrorMessage
                name={name}
                component="div"
                className="text-danger mt-1"
              />
            </FloatingLabel>
          ))}

          <Form.Group className="mb-3">
            <Form.Label>Выберите роль</Form.Label>
            <Form.Select onChange={handleChange} name="roleId">
              {role.data.map(({id, type}, index) => (
                <option key={index} value={id}>
                  {type}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Выберите тариф</Form.Label>
            <Form.Select onChange={handleChange} name="tariffId">
              {tariffs.data.map(({id, name}, index) => (
                <option key={index} value={id}>
                  {name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          {addUser.isError && (
            <div className="text-danger mb-2">
              {addUser.error.response.data.message}
            </div>
          )}

          <Button
            variant="primary"
            type="submit"
            onClick={handleSubmit}
            disabled={!dirty || !isValid}
          >
            Добавить
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default AddForm
