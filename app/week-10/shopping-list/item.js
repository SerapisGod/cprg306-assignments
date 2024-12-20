function Item({name, quantity, category, onSelect}) {
    return (
      <li className="bg-gray-900 p-2 shadow-md mb-4 max-w-md "
      onClick={() => onSelect(name)} style={{cursor: "pointer"}}>
          <p className="text-white text-lg font-bold">{name}</p>
          <p className="text-white">Buy {quantity} in {category}</p>
      </li>
    );
  }
  export default Item;