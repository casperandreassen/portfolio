import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../styles/Contact.css';
import { useState } from 'react';
import axios, { type AxiosResponse } from 'axios';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Contact = () => {
  const [email, setEmail] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [body, setBody] = useState<string>();

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const sendEmail = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    axios
      .post(
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        `http://localhost:4500/api/v1/email/sendMail?fromEmail=${email}&title=${title}&body=${body}`
      )
      .then((response: AxiosResponse) => {
        console.log(response);
      })
      .catch((response) => {
        console.log(response);
      });
  };

  return (
    <div className="contactWrapper">
      <Form className="contactForm">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Body</Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            placeholder="Title"
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Button variant="primary" onClick={sendEmail}>
            Send inquiry
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Contact;
