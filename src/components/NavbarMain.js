import React, {Component} from 'react';
import { Navbar, Nav, NavbarToggler, Collapse, NavbarBrand} from 'reactstrap';

export default class NavbarMain extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="inverse" inverse toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">Registration Mail Chimp</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {this.props.children}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}