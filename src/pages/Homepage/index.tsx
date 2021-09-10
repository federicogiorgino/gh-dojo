import React, { useState, FC } from "react";
import { History } from "history";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import homepageStyles from "./styles.module.css";

interface IProps {
  history: History;
}

const Homepage: FC<IProps> = ({ history }) => {
  const [username, setUsername] = useState("");
  return (
    <Container className="vh-100 flex-center">
      <div className={`mb-3 ${homepageStyles.logoContainer}`}>
        <img
          src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
          alt="Logo"
          className={homepageStyles.logo}
        />
      </div>
      <h1 className="text-main text-xl-center">Git Dojo</h1>
      <Form
        className="flex-center"
        onSubmit={(e) => {
          e.preventDefault();
          history.push(`/user/${username}`);
        }}
      >
        <Row className="mt-3 mb-3">
          <Col>
            <Form.Control
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Col>
        </Row>
        <Row className="mt-3 mb-3">
          <Col>
            <Button variant="info" type="submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Homepage;
