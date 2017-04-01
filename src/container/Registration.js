import React, { Component } from 'react';
import FormRegistration from '../components/FormRegistration.js';

class Registration extends Component {

	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			session: '',
			birth: ''
		}
	}

	handleChange(event){
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit() {
		console.log(this.state)
	}

	render() {
		return(
			<div>
				<h2 className="mt-4">Novo Colaborador</h2>
				<hr />
				<FormRegistration
				firstName={this.state.firstName}
				lastName={this.state.lastName}
				email={this.state.email}
				session={this.state.session}
				birth={this.state.birth} 
				change={this.handleChange.bind(this)} 
				/>
			</div>
		)
	}
}

export default Registration;