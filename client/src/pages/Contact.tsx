import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../styles/Contact.css';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Contact = () => {
  return (
    <div className="contactWrapper">
      <Form className="contactForm">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Title" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Body</Form.Label>
          <Form.Control as="textarea" type="text" placeholder="Title" />
        </Form.Group>
        <Form.Group>
          <Button variant="primary">Send inquiry</Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Contact;
