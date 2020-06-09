import React from 'react';
import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap';
import StaticBottom from "../StaticBottom";
import './Home.css'
const Home = (props) => {
    return (
        <Container fluid={true}>
            <Row className="top-content">
                <Container className="align-everything-center">

                    <div>
                        <Row >
                            <Col>
                                <Card>
                                    <img alt="icon" src="https://via.placeholder.com/28" />
                                    <span>All interactive sessions</span>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <img alt="icon" src="https://via.placeholder.com/28" />
                                    <span>Practice Questions</span>
                                </Card>
                            </Col>
                        </Row>
                        <Row >
                            <Col>
                                <Card>
                                    <img alt="icon" src="https://via.placeholder.com/28" />
                                    <span>Downloads</span>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <img alt="icon" src="https://via.placeholder.com/28" />
                                    <span>Ask Questions</span>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Row>
            <Row>
                <StaticBottom />
            </Row>
            <Row>
                <Container className="bottom-content" >
                    <Card>
                        <CardHeader>Performance</CardHeader>
                        <CardBody className="body-card"></CardBody>
                    </Card>
                </Container>
            </Row>
        </Container>
    )
}
export default Home