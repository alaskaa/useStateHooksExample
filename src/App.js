import React, { useState } from "react";
import ListWrapper from "./ListWrapper";

// Following tutorial from Robin Wieruch on https://www.robinwieruch.de/react-hooks/

// sets up our initial list
const INITIAL_LIST = [
  {
    id: "0",
    title: "React is bau5",
    url: "https://github.com"
  },
  {
    id: "1",
    title: "React is awesome",
    url: "https://google.com"
  }
];

const App = () => {
  // the use State hook accepts an initial State as an argument (here InitialList)
  const [list, setList] = useState(INITIAL_LIST);

  /* we can destructure this state (by using array destructuring) into
  two variables
  - list --> the actual state here
  - setList --> the function to update state by providing new State

  these can be named as anything you want
  */

  // we don't need to pass list and setList as arguments as they are available from the outer scope of the component
  const onRemoveItem = id => {
    // remove item from list
    // set new list in state with "setList"

    const newList = list.filter(item => item.id !== id);
    setList(newList);
  };

  return (
    <ListWrapper>
      <h1> This list is gonna be made with awesome hooks!</h1>
      <p> This uses the useState() hook</p>
      <ul>
        {list.map(item => (
          <li key={item.id}>
            <a href={item.url}>{item.title}</a>
            <button type="button" onClick={() => onRemoveItem(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </ListWrapper>
  );
};

export default App;
