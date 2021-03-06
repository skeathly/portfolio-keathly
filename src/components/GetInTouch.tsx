import React, { FormEvent, useState, useRef } from "react";
import { Container, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

interface IForm {
    fullName: string;
    email: string;
    message: string;
}

const GetInTouch: React.FC = () => {
    const [validated, setValidated] = useState<boolean>(false);
    const [formSuccess, setFormSuccess] = useState<boolean>(false);
    const [formData, setFormData] = useState<IForm | null>(null);
    const formRef = useRef<HTMLFormElement>(null);

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
        let formDetails = new FormData();
        formDetails.append('fullName', formData.fullName);
        formDetails.append('email', formData.email);
        formDetails.append('message', formData.message);

        let formConfig = {
            mode: 'no-cors',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
        }

        axios.post('https://formsubmit.co/ajax/skeathly@gmail.com', formData, formConfig)
            .then(response => {
                setFormSuccess(true);
                setTimeout(() => {
                    setFormSuccess(false);
                    handleFormReset();
                }, 8000);
            })
            .catch(error => {
                console.log(error);
                handleFormReset();
            });
    }

    const handleFormReset = () => {
        setValidated(false);
        formRef.current.reset();
    }

    return (
        <section className="get-in-touch pt-4 pb-5">
            <Container>
                <h2>Get in Touch</h2>
                <p>Send me a direct message using the contact form below.</p>

                <Form noValidate validated={validated} onSubmit={handleSubmit} ref={formRef}>
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
                            required
                            minLength={10}
                            name="message"
                            placeholder="Message"
                            onChange={e => setFormData({ ...formData, message: e.target.value })} />
                        <Form.Control.Feedback type="invalid">
                            Please enter at least 10 characters.
                        </Form.Control.Feedback>
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



