import './App.css';
import {Article} from "./component/index"

function App() {
  return (
    <>
    <Article
    // key={index}
    title={"Title1"}
    content={"コンテンツの内容"}
  />
  </>
    // <div className="App">
        // <Article
        //   // key={index}
        //   title={"a"}
        //   content={"b"}
        // />
        //  </div>
  );
}

export default App;
