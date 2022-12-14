import React from "react";
import { Form, Col } from "react-bootstrap";

let uri = `https://striveschool-api.herokuapp.com/api/comments/`;
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzczOGE4NjNhN2ZjNDAwMTU5N2VjMzAiLCJpYXQiOjE2NjkyOTE3NjAsImV4cCI6MTY3MDUwMTM2MH0.IobujS2A7uPHc4D0mQlDJoQr_Vd5WcJFKdaM64qtkaE`;
const opts = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

class AddComment extends React.Component {
  state = {
    rating: "1",
    text: "",
  };

  async addComment() {}

  render() {
    return (
      <Form
        onSubmit={async (e) => {
          e.preventDefault();

          let response = await fetch(uri, {
            headers: {
              ...opts.headers,
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
              comment: this.state.text,
              rate: this.state.rating,
              elementId: this.props.asin,
            }),
          });

          if (response.ok) {
            //OK!
            this.props.fetchComments(this.props.asin);
          } else {
            console.log("Error posting comment");
          }
        }}
      >
        <Form.Row>
          <Form.Group as={Col} controlId="formGridComment">
            <Form.Label>Comment</Form.Label>
            <Form.Control
              onChange={(e) => {
                this.setState({
                  ...this.state,
                  text: e.target.value,
                });
              }}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridRating">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              as="select"
              defaultValue="Choose..."
              onChange={(e) => {
                this.setState({
                  ...this.state,
                  rating: e.target.value,
                });
              }}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
      </Form>
    );
  }
}

export default AddComment;
