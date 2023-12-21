import { Button, Container, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddTask = () => {

  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || "/dashboard";
    const handleSubmit=(e)=>{
        e.preventDefault();
        const form = e.target;
        const title=form.title.value;
        const status = form.status.value;
        const description = form.description.value;
        const deadline = form.deadline.value; // Added this line
        const task={
            title:title,
            status:status,
            description:description,
            deadline:deadline // Added this line
        }
        // console.log(task);
        fetch("https://task-management-server-tan.vercel.app/post-task", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task),
          })
            .then((res) => res.json())
            .then((data) => {
            
                if(data.insertedId){
                  navigate(from, { replace: true })
                    Swal.fire({
                        title: 'Task Added',
                        showClass: {
                          popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                          popup: 'animate__animated animate__fadeOutUp'
                        }
                      })
              
        form.reset()
            }});
    }
    return (
        <div className="bg-secondary">
        <Container className="p-5 ">
              <Form onSubmit={handleSubmit}  className="w-50 mx-auto">
                <h3 className="mb-5 text-center">Add New Task</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    placeholder="Title"
                    required
                  />
                </Form.Group>
        
                <Form.Group className="mb-3" controlId="formBasicStatus">
                  <Form.Label>Priority</Form.Label>
                  <Form.Select name="status" required>
                    <option value="">Select priority</option>
                    <option value="easy">Low</option>
                    <option value="Moderate">Moderate</option>
                    <option value="High">High</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDeadline"> {/* Added this block */}
                  <Form.Label>Deadline</Form.Label>
                  <Form.Control
                    type="date"
                    name="deadline"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="textarea" name="description" rows={3} />
                </Form.Group>

                <div className="text-center">
                  <Button variant="primary" type="submit" size="lg">
                    Add New Task
                  </Button>
                </div>
              </Form>
            </Container>
        </div>
    );
};

export default AddTask;
