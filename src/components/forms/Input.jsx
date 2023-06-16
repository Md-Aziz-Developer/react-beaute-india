import { createElement, Fragment } from 'react'
import { Form, FormGroup } from 'react-bootstrap'

const Input = ({ field, InputGroup, variant = 'default', className, size = 'md', icon, form: { touched, errors }, ...props }) => {
	const isInvalid = touched[field.name] && errors[field.name]
	const type = props.type && props.type === 'textarea' ? 'textarea' : 'input'
	const sizes = {
		sm: '-checkout',
		md: '-sign',
		lg: '',
	}

	return (
		<Fragment>
			{
				variant === 'default' ? (
					<FormGroup className="form-group mb-3">
						{props.label && (
							<Form.Label>{props.label}</Form.Label>
						)}
						<Form.Control
							as={type}
							{...field}
							{...props}
							isInvalid={isInvalid}
						/>
						{isInvalid &&
							<Form.Control.Feedback type="invalid">{errors[field.name]}</Form.Control.Feedback>}
					</FormGroup>
				) : (
					<div className={`input-icons${sizes[size]} mb-3`}>
						{icon && (createElement(icon))}
						<input
							className={className ? className : 'fc-sign checkbr'}
							type={type}
							{...field}
							{...props}
							isInvalid={isInvalid}
							placeholder={props.label}
						/>
						{isInvalid &&
							<Form.Control.Feedback type="invalid">{errors[field.name]}</Form.Control.Feedback>}
					</div>
				)
			}

		</Fragment>
	)
}

export default Input
