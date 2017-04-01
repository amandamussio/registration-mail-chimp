import React, { Component } from 'react';
import { connect } from 'react-redux';
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

	handleSubmit(event) {
		event.preventDefault();
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
				submit={this.handleSubmit.bind(this)}
				/>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({

})

export default connect ()(Registration);