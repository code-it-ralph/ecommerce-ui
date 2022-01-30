import { Container } from "react-bootstrap";

export default function CartHeader(props) {
  return (
    <header className="block row">

      <h1>Your Cart</h1>
      <div>
          Cart{' '}
          {props.countCartItems ? 
          (<button className="badge">{props.countCartItems}</button>)
          :
          ('')
          }
      </div>
    </header>
  );
};
