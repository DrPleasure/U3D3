import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
// import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";
import fantasy from "./data/ListOfBooks/fantasy.json";
// import ToggleOnClick from "./components/ToggleOnClick";

console.log(fantasy);

function App() {
  return (
    <div className="App">
      <WarningSign text="This text is generated from a prop" />
      <MyBadge text="Prop Badge Text" bg="danger" />
      {/* <SingleBook
        asin="1945683694"
        title="Destiny Grimoire Anthology, Volume II: Fallen Kingdoms"
        img="https://images-na.ssl-images-amazon.com/images/I/91IHwcEy2DL.jpg"
        price="19.92"
        category="Fantasy"
      /> */}
      {/* <CommentArea /> */}
      <BookList ListOfBooks={fantasy} />
    </div>
  );
}

export default App;
