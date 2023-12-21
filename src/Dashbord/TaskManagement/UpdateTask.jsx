import { Button, Container, Form } from "react-bootstrap";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateTask = () => {
    const task =useLoaderData()
    const location =useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";
    console.log(task)
    const handleUpdate=(e)=>{
        e.preventDefault();
        const form = e.target;
        
        const status = form.status.value;
        
        const data={   
            status:status
        }
        fetch(`https://task-management-server-iota.vercel.app/taskUpdate/${task._id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((data) => {
            console.log(data);
                if(data.modifiedCount>0){
                  navigate(from, { replace: true })
                    Swal.fire({
              title: 'success!',
              text: 'Update Succesfull',
              icon: 'success',
              confirmButtonText: 'Cool'
            })}
             
        });
    }
    return (
        <div>
                <Container className="p-5 ">
              <Form onSubmit={handleUpdate}  className="w-50 mx-auto">
                <h3 className="mb-5 text-center">Update Task</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    defaultValue={task.title}
                    readOnly
                    placeholder="Title"
                   
                  />
                </Form.Group>
        
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    type="text"
                    name="status"
                    defaultValue={task.status}
                
                    
                    placeholder="Status"
                   
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" name="description"  defaultValue={task.description} readOnly
                   rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit" size="lg">
        Update Task
      </Button>
        
              </Form>
            </Container>
        </div>
    );
};

export default UpdateTask;