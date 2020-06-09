import React from 'react';
import { Container, Card, CardHeader, Row, Col, CardBody } from 'reactstrap';
const Home = (props) => {
    return (
        <Container className="bottom-content" >
            <Row>
                <Col>
                    <Card>
                        <CardHeader>Topics</CardHeader>
                        <CardBody className="body-card"></CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardHeader>Recent Activities</CardHeader>
                        <CardBody className="body-card"></CardBody>
                    </Card>
                </Col>
            </Row>

        </Container>
    )
}
export default Home