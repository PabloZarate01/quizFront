import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap';
class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
    }


    
    render() {
        return (
            <React.Fragment>
            <NavBar/>
            <Container>
                <h2>Sign Up</h2>
                <Form className="form">
                <Col>
                    <FormGroup>
                    <Label>Username</Label>
                    <Input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Username"
                    />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                    <Label>Email</Label>
                    <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="email@email.com"
                    />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="********"
                    />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                    <Label for="conf_password">Confirm password</Label>
                    <Input
                        type="password"
                        name="conf_password"
                        id="conf_password"
                        placeholder="********"
                    />
                    </FormGroup>
                </Col>
                <Button>Sign Up</Button>
                </Form>
            </Container>
            </React.Fragment>
        );
    }
}

export default RegisterPage;