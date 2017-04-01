import React from 'react';
import { Row, Col, Button, Form, FormGroup, Label, FormText } from 'reactstrap';

const FormRegistration = (props) => (
	<form>
        <Row>
          <Col md={6}>
              <FormGroup>
                <Label for="firstName">Primeiro Nome</Label>
                <input
                className="form-control" 
                type="text" 
                name="firstName" 
                id="firstName" 
                value={props.firstName}
                onChange={props.change}
                />
              </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="lastName">Último Sobrenome</Label>
              <input 
              className="form-control" 
              type="text" 
              name="lastName" 
              id="lastName" 
              value={props.lastName}
              onChange={props.change}
              />
            </FormGroup>
          </Col>
        </Row>
		    
        <FormGroup>
          <Label for="email">Email</Label>
          <input
          className="form-control" 
          type="email" 
          name="email" 
          id="email" 
          value={props.email}
          onChange={props.change} />
        </FormGroup>
        <FormGroup>
          <Label for="birth">Setor</Label>
          <input
          className="form-control" 
          type="text" 
          name="session" 
          id="session" 
          value={props.session}
          onChange={props.change} />
        </FormGroup>
        <FormGroup>
          <Label for="birth">Data de Aniversário</Label>
          <input
          className="form-control" 
          type="date" 
          name="birth" 
          id="birth" 
          value={props.birth}
          onChange={props.change}
          />
        </FormGroup>
        <Button onClick={props.submit} color="success">Enviar</Button>
	</form>
);

export default FormRegistration;