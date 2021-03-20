import React from 'react';
import { Link } from 'react-router-dom';
import { 
    Form,
    FormGroup,
     Label,
    Button,
     Input

} from "reactstrap";


function AddUser() {
  return (
    <Form>
        <FormGroup>
            <Label>
                NAME
            </Label>
                <Input type="text" placeholder="Please Enter Your name"></Input>
        </FormGroup>
        <Button type="submit"> Submit </Button>
        <Link to="/" className="btn btn-danger ml-2"> Cancel</Link>
    </Form>
  )
}

export default AddUser;
