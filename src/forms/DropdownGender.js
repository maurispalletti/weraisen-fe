import React from 'react'
import PropTypes from 'prop-types'
import { Field, ErrorMessage } from 'formik'

export default function DropdownGender(props) {

  console.log(props.options)
  return (
    <div>
      <label className="dopdown-label">{props.title}</label>
      <Field className={props.styleName} name={props.name} component="select">
        <option value="">{props.placeholder}</option>
        {props.options && props.options.length > 0
          ? props.options.map(option => {
            return (
              <option key={option.name} value={option.name}>
                {option.name}
              </option>
            )
          })
          : []}
      </Field>
      <ErrorMessage className="form-error" component="div" name={props.name} />
    </div>
  )
}

DropdownGender.propTypes = {
  name: PropTypes.string.isRequired,
  styleName: PropTypes.string,
  value: PropTypes.string
}
