import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import uuid from 'react-uuid'
import TodosForm from './TodosForm';
import List from './List';

class Todos extends React.Component {
    state = {
        items: [
            {
                id: uuid(),
                item: 'Learn react route',
                done: true,
            },
            {
                id: uuid(),
                item: 'Learn react props',
                done: true,
            },
            {
                id: uuid(),
                item: 'Learn react state',
                done: true,
            },
            {
                id: uuid(),
                item: 'Implement redux in react',
                done: false,
            }
        ],
    }

    removeItem = id => {
        const { items } = this.state
        this.setState({
            items: items.filter(item => {
                return item.id !== id
            }),
        })
    }

    doneItem = id => {
        let items = this.state.items
        let targetItem = items.find(item => {return item.id == id})
        targetItem.done = true
        this.setState({items:items})
    }

    handleSubmit = item => {
        this.setState({ items: [...this.state.items, {id: uuid(), item: item, done: false}] })
    }
    
    render() {
        const { items } = this.state
        return (
            <Container>
                <Row className="">
                    <Col md={{ span: 6, offset: 3 }}>
                        <Card className="my-5 pb-2">
                            <Card.Header className="text-uppercase" as="h5"><i className="fa fa-calendar-minus-o"></i> Simple Todo App</Card.Header>
                            <Card.Body>
                                <TodosForm handleSubmit={this.handleSubmit} />
                            </Card.Body>
                            <List items={items} removeItem={this.removeItem} doneItem={this.doneItem} />
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Todos