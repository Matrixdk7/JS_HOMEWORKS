import React from 'react';
import TodoItem from "./TodoItem.jsx";
import {Col, Container, ListGroup, Row} from 'react-bootstrap';

const TodoList = ({todos, toggleTodo }) => {

    const items = todos.map(todo =>
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
    )

    return (
        <Container className="mt-4">
            <Row className="justify-content-center">
                <Col xs={12} md={6}>
                    <ListGroup>
                        {items}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default TodoList;