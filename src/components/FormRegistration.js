import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const FormRegistration = () => (
	<form>
		<FormGroup>
          <Label for="firstName">Primeiro Nome</Label>
          <Input type="text" name="firstName" id="firstName" placeholder="Digite o primeiro nome" />
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Último Nome</Label>
          <Input type="text" name="lastName" id="lastName" placeholder="Digite o último nome" />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="email@email.com" />
        </FormGroup>
        <FormGroup>
          <Label for="birth">Setor</Label>
          <Input type="text" name="session" id="session" placeholder="Setor de trabalho" />
        </FormGroup>
        <FormGroup>
          <Label for="birth">Data de Aniversário</Label>
          <Input type="date" name="birth" id="birth" placeholder="DD/MM" />
        </FormGroup>
        <Button>Enviar</Button>
	</form>
);

export default FormRegistration;