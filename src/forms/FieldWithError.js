import React from 'react'
import PropTypes from 'prop-types'
import { Field, ErrorMessage } from 'formik'

export default function FieldWithError(props) {
  return (
    <div>
      {props.label && <label>{props.label}</label>}
      <Field {...props} />
      <ErrorMessage className="form-error" component="div" name={props.name} />
    </div>
  )
}

FieldWithError.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string
}

FieldWithError.defaultProps = {
  type: 'text'
}
