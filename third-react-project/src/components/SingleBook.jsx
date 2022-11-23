import Card from "react-bootstrap/Card";

const SingleBook = ({ book }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>This book is a {book.category} book.</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
