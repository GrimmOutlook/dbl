import React from "react";

const App = props => {
    const { name } = props;
    return (   
      <>
        <h1>
          Hello {name}
        </h1>
      </>
    )
};

export default App;