import React from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <Card 
        title={"Card title"}
        text={"Some quick example text to build on the card title and make up the bulk of the card's content."}
      >
        <img src="https://images.unsplash.com/photo-1664737904691-56c5381ef58a?ixlib=rb-4.0.3&q" class="card-img-top" alt="" />
      </Card>
      <Card 
        title={"Card title"}
        text={"Some quick example text to build on the card title and make up the bulk of the card's content."}
      />
    </>
  );
}

export default App
