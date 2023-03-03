import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [people,setPeople]=useState(data)
  // eslint-disable-next-line jsx-a11y/heading-has-content
  return (
    <main>
    <section className='container'> 
      <h3>{people.length} birthdays today </h3>
      <List people={people}/>
      <button onClick={()=> setPeople([])}>clear all</button>
      </section>
    </main>
  )
  
}

export default App;
