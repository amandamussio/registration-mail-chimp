import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Home extends Component {
	render() {
		return(
			<div className="mt-4">
				<Jumbotron>
					<h1 className="display-3">Cadastro de Funcionários</h1>
			        <p className="lead">App feito para facilitar o endomarketing da empresa, cadastrando, alterando e excluindo 
			        funcionários do MailChimp, e podendo consultar os aniversáriantes do mês</p>
			        <hr className="my-2" />
			       		<Link className="btn btn-primary" to="registration">Cadastros</Link>{' '}
			          	<Link className="btn btn-warning" to="registration">Aniversariantes do mês</Link>
				</Jumbotron>
			</div>
		);
	}
}

export default Home;