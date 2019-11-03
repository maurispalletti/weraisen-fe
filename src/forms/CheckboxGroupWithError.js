import React from 'react'
import PropTypes from 'prop-types'
import { ErrorMessage } from 'formik'
import Checkbox from './Checkbox'

export default function CheckboxGroupWithError (props) {
  const { name, label, values } = props
  return (
    <div className="contenedor">
      {label && <label>{label}</label>}
      {values.map(value => (
        <div className="checkbox-container" key={value.value}>
          <Checkbox name={name} value={value} />
        </div>
      ))}
      <ErrorMessage className="form-error" name={name} component="div" />
    </div>
  )
}

CheckboxGroupWithError.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  values: PropTypes.array.isRequired
}
