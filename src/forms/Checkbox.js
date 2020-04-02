import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'formik'
import './Checkbox.css'

export default function Checkbox (props) {
  return (
    <Field name={props.name}>
      {({ field, form }) => (
        <div className="contenedor">
        <label className="label" > <input className="form-check" type="checkbox"
            {...props}
            checked={field.value.includes(props.value.value)}
            onChange={() => {
              if (field.value.includes(props.value.value)) {
                const nextValue = field.value.filter(value => value !== props.value.value)
                form.setFieldValue(props.name, nextValue)
              } else {
                const nextValue = field.value.concat(props.value.value)
                form.setFieldValue(props.name, nextValue)
              }
            }}
          />
          <span>{props.value.description}</span>
        </label>
        </div>
      )}
    </Field>
  )
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.object
}
