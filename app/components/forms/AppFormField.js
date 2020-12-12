import React from 'react'
import { useFormikContext } from 'formik'
import AppTextInput from '../AppTextInput'
import ErrorMessage from './ErrorMessage'

const AppFormField = ({ name, ...otherProps }) => {
  const { setFieldValue, values, setFieldTouched, errors, touched } = useFormikContext()
  return (
    <>
      <AppTextInput
        onChangeText={text => setFieldValue(name, text)}
        onBlur={() => setFieldTouched(name)}
        value={values[name]}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

export default AppFormField
