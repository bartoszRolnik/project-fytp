import React from 'react';
import '../App.css';
import { Button, Form, FormGroup, Label, Input, FormText, CustomInput } from 'reactstrap';

export default class FormAboutYou extends React.Component {
  render() {
    return (
        <div className="containerFormAboutYou">
        <Form className="aboutYou">
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0 labelAboutYou">
                <Label for="exampleEmail" className="mr-sm-2">Name</Label>
                <Input type="text" name="name" className="form" placeholder="" />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0 labelAboutYou">
                <Label for="examplePassword" className="mr-sm-2">Surname</Label>
                <Input type="text" name="surname" className="form" placeholder="" />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0 labelAboutYou">
          <Label for="exampleEmail" className="mr-sm-2">E-mail</Label>
          <Input type="email" name="email" className="form" placeholder="" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0 labelAboutYou">
                <Label for="examplePassword" className="mr-sm-2">Age</Label>
                <Input type="number" name="age" className="form" placeholder="" />
            </FormGroup>
            
        <FormGroup className="labelAboutYou">
          <Label for="exampleCheckbox">Sex</Label>
          <div>
            <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="Male" inline/>
            <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="Female" inline/>
          </div>
        </FormGroup>
        <FormGroup className="labelAboutYou">
          <Label for="exampleText">Write something about you</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        </Form>
        {/* <Form>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="exampleEmaill" className="mr-sm-2">Name</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="" />
            </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="exampleEmaill" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Yers old</Label>
          <Input type="number" name="select" id="exampleSelect">
            
          </Input>
        </FormGroup>
        
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>Radio Buttons</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option one is this and that—be sure to include why it's great
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option two can be something else and selecting it will deselect option one
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input type="radio" name="radio1" disabled />{' '}
              Option three is disabled
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Check me out
          </Label>
        </FormGroup>
        <Button>Submit</Button>
      </Form> */}
        </div>
      
    );
  }
}