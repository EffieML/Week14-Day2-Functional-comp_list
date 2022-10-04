import { moves } from "./data";
import PokeMoveCard from "./PokeMoveCard";

const PokeMoves = () => {
  //const newArray = [1, 2, 3].map((item) => (
  // <div key={`item+${item.id}`}>
  //   <button>thing</button>
  //  </div>
  //  ));
  return (
    <div className="moves">
      <h1>PokeMoves</h1>
      <ul>
        {moves.map((item) => (
          // <li key={item.id}>
          // {item.id}. {item.move}
          // </li>
          <PokeMoveCard key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default PokeMoves;

// {
//   /* <li key={item.id}>
// {item.id}. {item.move}
// </li> */
// }
