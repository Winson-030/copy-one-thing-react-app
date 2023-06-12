//react imports
import { useState } from 'react';
import { React } from 'react';


// libraries
import JSConfetti from 'js-confetti'

//custom imports
import Form from './components/Form';
import OneThing from './components/OneThing';

const jsConfetti = new JSConfetti()
const getSuccessMessage = () => {


  const  messages =  ["Congrats!", "Great job!", "Don’t ya feel great?!", "Up, up, and up!", "Um…okay", "Did you though?", "Don’t feel like you tried your best…", "FAget about it!"];

 
  return messages[Math.floor(Math.random() * messages.length)];
}
const getEmoji = () => {
  const emojis = ["🫡", "📈", "🚀", "💻", "😄", "🕳️", "🐮", "⚡️", "🇲🇴", "😯", "🏃"]
  const newEmojis = [];
  const len = Math.floor(Math.random() * 10) + 1;
  for (let i = 0; i < len; i++) {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    newEmojis.push(emojis[randomIndex]);
  }

  return newEmojis;
}

function App() {
  const [thing, setThing] = useState("")
  const [isCompleted, setIsCompleted] = useState(true)
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (thing.length !== 0) {
      setIsCompleted(false)
    } else {
      alert("input is blank!")

    }
 
   
  }

  const handleInput = (e) => {
    setThing(e.target.value);
  }

  const handleCompletedThing = async (e) => {
    e.target.setAttribute('disabled', true)
    setThing(getSuccessMessage())
    await jsConfetti.addConfetti({
      emojis: getEmoji(),
      confettiNumber: 50,
      confettiRadius: 6,
      emojiSize: 30
    })
    e.target.removeAttribute('disabled');
    setThing("");
    setIsCompleted(true);
  }
  return (
    <main className="grid place-items-center min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 text-slate-900 dark:text-slate-200">

      <div className="grid place-items-center gap-8 m-8">
        {
          isCompleted && (<Form
            thing={thing}
            handleInput={handleInput}
            handleSubmit={handleSubmit}
          />

          )

        }
        {
          !isCompleted && (
            <OneThing thing={thing} handleCompletedThing={handleCompletedThing} />
          )
        }

      </div>

    </main>
  );
}

export default App;
