import './App.css';
import { Cards } from './components/Cards';
import { useEffect, useState } from 'react';
import axios from 'axios';

const baseURL = "http://localhost:5000/cards";

function App() {

  const [cards, setCards] = useState(null);

  const loadCards = () => {
    axios.get(baseURL).then((resp) => {
      setCards(resp.data);
    })
  }

  useEffect( () => {
    loadCards();
  }, []);

  if (!cards) return null;
  
  const onDelete = (item) => {
    axios.delete(`${baseURL}/${item.id}`).then(()=>{
      setCards(null);
      loadCards();
    });
  }

  const addCard = (message) => {
    let id;
    if(cards.length === 0){
      id = 1;
    } else {
      id = cards[cards.length-1].id + 1;
    }
    
    axios.post(baseURL, {
      id : id,
      message : message
    })
    .then((resp) => {
      setCards(resp.data.conversations)
      loadCards();
    });
  }
 
  return (
    <div className="container">
      <Cards addCard={addCard} cards={cards} onDelete={onDelete}/>
    </div>
  );
}

export default App;
