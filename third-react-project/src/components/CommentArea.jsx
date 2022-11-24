import { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  fetchComments = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzczOGE4NjNhN2ZjNDAwMTU5N2VjMzAiLCJpYXQiOjE2NjkyOTE3NjAsImV4cCI6MTY3MDUwMTM2MH0.IobujS2A7uPHc4D0mQlDJoQr_Vd5WcJFKdaM64qtkaE",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        this.setState({ comments: data });
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  componentDidMount() {
    this.fetchComments();
  }
  render() {
    console.log(this.props.asin);
    return (
      <div>
        <ListGroup>
          {this.state.comments.map((element, i) => (
            <ListGroup.Item key={i}>
              {element.comment} {element.rate}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  }
}

export default CommentArea;
