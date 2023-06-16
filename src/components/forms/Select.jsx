import { Fragment } from 'react'
import { Form, FormGroup } from 'react-bootstrap'

const Select = ({ field, options = [], form: { touched, errors }, ...props }) => {
	const isInvalid = touched[field.name] && errors[field.name]

	return (
		<Fragment>
			<FormGroup className="form-group mb-3">
				{props.label && (<Form.Label>{props.label}</Form.Label>)}
				<Form.Select
					{...field}
					{...props}
					isInvalid={isInvalid}
				>
					{options.map((option, idx) => (
						<Fragment key={idx}>
							<option value={option?.value}>{option?.label}</option>
						</Fragment>
					))}
				</Form.Select>
				{isInvalid && (
					<Form.Control.Feedback type="invalid">{errors[field.name]}</Form.Control.Feedback>
				)}
			</FormGroup>
		</Fragment>
	)
}

export default Select