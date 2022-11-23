import SingleBook from "./SingleBook";

const BookList = (props) => {
  return (
    <div>
      {props.ListOfBooks.map((book) => (
        <SingleBook book={book} />
      ))}
    </div>
  );
};

export default BookList;
