import React from 'react';

const App = (props: any) => {
  console.log('App rendered')

  return (
      <div>
        <AppTitle/>
        <Rating/>
        <Accordion/>
        <Rating/>
      </div>
  );

  function Rating() {
    console.log('Rating rendered')

    return (
        <>
          <Star/>
          <Star/>
          <Star/>
          <Star/>
          <Star/>
        </>
    )
  }

  function Star() {
    console.log('Star rendered')

    return <div>star</div>
  }

  function Accordion() {

    return (
        <div>
          <h3>Меню</h3>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
    )
  }

  function AppTitle() {
    return <>---App Component---</>
  }
}

export default App

