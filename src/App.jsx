function item({name, isPacked=false}){ {
    return 
    <li className="item">{name}</li>;
    
}

console.log(item.isPacked);


export default function App(){
  return(
    <div className="app">
      <h1>Items</h1>
      <ul className="items">
        <item isPacked={true} name="Sleeping Bag" />
      </ul>
    </div>
    
  )
}