import React from 'react'
import PropTypes from 'prop-types'
import { Field, ErrorMessage } from 'formik'

export default function DropdownGender(props) {
  return (
    <div>
      <label className="dopdown-label">{props.title}</label>
      <Field className={props.styleName} name={props.name} component="select" placeholder="Select...">
        <option value="">Género...</option>
        {props.options && props.options.length > 0
          ? props.options.map(opt => {
            return (
              <option key={opt.value} value={opt.value}>
                {opt.description}
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
