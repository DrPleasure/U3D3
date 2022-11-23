import { Alert } from "react-bootstrap";

const WarningSign = (props) => (
  <Alert variant="warning">This text is generic // {props.text}</Alert>
);
export default WarningSign;
