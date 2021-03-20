import React from 'react';
import { Link } from "react-router-dom";
import { 

    ListGroup,
    ListGroupItem,
    Button,

} from 'reactstrap';

function UsersList() {
    return (
        <ListGroup>
            <ListGroupItem className="d-flex">
            <strong> I am the user one list </strong>
        <div className="ml-auto">
        <Link to='/edituser' className='btn btn-warning mr-1'> edit</Link>
        <Button color="danger">Delete</Button>
        </div> 

        </ListGroupItem>

        </ListGroup>
    )
}

export default UsersList
