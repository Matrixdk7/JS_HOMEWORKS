import React, { useState } from 'react';
import { Form, Button, InputGroup, Container, Row, Col } from 'react-bootstrap';

const TodoForm = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (text.trim() === '') return;
        addTodo(text);
        setText('');
    };

    const textChangeHandler = (event) => {
        setText(event.target.value);
    }

    return (
        <Container className="mt-3">
            <Row className="justify-content-center">
                <Col xs={12} md={6}>
                    <Form onSubmit={handleSubmit}>
                        <InputGroup>
                            <Form.Control
                                type="text"
                                placeholder="Write text"
                                value={text}
                                onChange={textChangeHandler}
                            />
                            <Button type="submit" variant="primary">
                                Add todo
                            </Button>
                        </InputGroup>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default TodoForm;