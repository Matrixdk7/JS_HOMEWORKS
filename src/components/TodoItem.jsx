import { ListGroup } from 'react-bootstrap';

const TodoItem = ({todo, toggleTodo }) => {

    return (
        <ListGroup.Item
            style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer',
                    backgroundColor: todo.completed ? '#d4edda' : '#f8d7da'}}

            className="mb-2 shadow-sm rounded"
            onClick={() => toggleTodo(todo.id)}
        >
            {todo.text}
        </ListGroup.Item>
    );
};

export default TodoItem;