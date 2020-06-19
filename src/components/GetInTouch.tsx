import React, { FormEvent, useState } from "react";
import { Container, Form, Button, Alert } from 'react-bootstrap';

interface IForm {
    fullName: string;
    email: string;
    message: string;
}

const GetInTouch = () => {
    const [validated, setValidated] = useState(false);
    const [formSuccess, setFormSuccess] = useState(false);
    const [formData, setFormData] = useState<IForm | null>({ fullName: "", email: "", message: "" });

    const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
        const form = ev.currentTarget;

        if (form.checkValidity() === false) {
            ev.preventDefault();
            ev.stopPropagation();
        } else {
            ev.preventDefault();
            ev.stopPropagation();
            handleFormSend();
        }
        setValidated(true);
    }

    const handleFormSend = () => {
        fetch('https://formsubmit.co/ajax/skeathly@gmail.com', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);
                setFormSuccess(true);
                setTimeout(() => {
                    setFormSuccess(false);
                    handleFormReset();
                }, 8000);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    const handleFormReset = () => {
        setFormData({ fullName: "", email: "", message: "" });
    }

    return (
        <section className="get-in-touch pt-4 pb-5">
            <Container>
                <h2>Get in Touch</h2>
                <p>Send me a direct message using the contact form below.</p>

                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group controlId="fullName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="fullName"
                            placeholder="Full name"
                            onChange={e => setFormData({ ...formData, fullName: e.target.value })} />
                        <Form.Control.Feedback type="invalid">
                            Please enter your name
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={e => setFormData({ ...formData, email: e.target.value })} />
                        <Form.Control.Feedback type="invalid">
                            Please enter a valid email
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="message">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea"
                            name="message"
                            onChange={e => setFormData({ ...formData, message: e.target.value })} />
                    </Form.Group>
                    <Button className="mt-3" type="submit" variant="primary">Send a message</Button>
                </Form>

                {
                    formSuccess && <Alert className="mt-4" variant="success">Your message was sent successfully!</Alert>
                }
            </Container>
        </section>
    )
}

export default GetInTouch;



