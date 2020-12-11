import React from 'react'
import { useFormikContext } from 'formik'
import ImageInputList from '../ImageInputList'
import ErrorMessage from './ErrorMessage'

const FormImagePicker = ({ name }) => {
  const { values, setFieldValue, errors, touched} = useFormikContext()
  const imageUris = values[name]

  const handleAdd = uri => {
    setFieldValue(name, [...imageUris, uri])
  }

  const handleDelete = uri => {
    setFieldValue(name, imageUris.filter(imgUrl => imgUrl !== uri))
  }

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onDeleteImage={handleDelete}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />

    </>
  )
}

export default FormImagePicker