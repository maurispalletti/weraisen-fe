import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'formik'

export default function Checkbox (props) {
  return (
    <Field name={props.name}>
      {({ field, form }) => (
        <label>
          <input
            type="checkbox"
            {...props}
            checked={field.value.includes(props.value.value)}
            onChange={() => {
              {debugger}
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
      )}
    </Field>
  )
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.object
}
