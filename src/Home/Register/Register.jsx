import  { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';


const Register = () => {
    const {createUser,updateUserData} =useContext(AuthContext)
    // console.log(createUser);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const location =useLocation();
    // console.log(location);
    const navigate = useNavigate();
    let from =  "/";

    const handleSubmit =(event)=>{
        event.preventDefault()
        setError('')
        setSuccess('')
        const form = event.target;
        const name =form.name.value;
        const photo =form.photo.value;
        const email =form.email.value;
         const password = form.password.value;

        if(!email){
          setError("Please Provide an email")
          return;
        }else if(!password){
          setError("Please type a password")
          return;
        }
        
        createUser(email,password)
        .then(result=>{
            const loggedUser = result.user;
            // console.log(loggedUser);
            navigate(from)
            updateUserData(result.user,name,photo)
          
            form.reset()
            setSuccess('Account has been created successfully')
        })
        .catch(error=>{
            setError(error.message)
        })
        
    }
    return (
    <div className="gray p-5">
          <Container className='mb-5'>
      
      <Form onSubmit={handleSubmit} className='w-50 mx-auto'>
      <h3 className='mb-5'>Please Register</h3>
<Form.Group className="mb-3" controlId="formBasicName">
  <Form.Label>Name</Form.Label>
  <Form.Control type="text" name="name" placeholder="Your Name" required />

</Form.Group>
<Form.Group className="mb-3" controlId="formBasicPhoto">
  <Form.Label>Photo Url</Form.Label>
  <Form.Control type="text" name="photo" placeholder="Photo Url" required  />

</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Email address</Form.Label>
  <Form.Control type="email" name="email" placeholder="Enter email"   />

</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Password</Form.Label>
  <Form.Control type="password" name="password" placeholder="Password" />

</Form.Group>
<Form.Group className="mb-3" controlId="formBasicCheckbox">
  <Form.Check type="checkbox" label="Accept all terms & condition" />
</Form.Group>
<Button  className='mb-2' variant="primary" type="submit" >
 Register
</Button>
<br />
<Form.Text>
  Already have an account?Go <Link to="/login">Login</Link>
</Form.Text>
<br />
<Form.Text className="green  fs-5">
  {success}
  </Form.Text>
<br />
<Form.Text className="text-danger  fs-5">
  {error}
  </Form.Text>
</Form>
  </Container>
    </div>
    );
};

export default Register;