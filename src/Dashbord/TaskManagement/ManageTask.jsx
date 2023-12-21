import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ManageTask = ({t,i,handleDelete}) => {
    const {title,description,status,deadline,_id}=t; // Added 'deadline' to the destructuring
  
    return (
        <>
            <tr>
                <th>{i+1}</th> 
                <td>{title}</td> 
                <td>{status}</td> 
                <td>{description}</td> 
                <td>{deadline}</td> {/* Added this line */}
                <td>
                    <Link to={`/dashboard/update/${_id}`}>
                        <Button variant="secondary" size="sm">
                            Update
                        </Button>
                    </Link>
                </td>
                <td>
                    <Button onClick={()=>handleDelete(_id)} variant="secondary" size="sm">
                        Delete
                    </Button>
                </td>
            </tr>
        </>
    );
};

export default ManageTask;
