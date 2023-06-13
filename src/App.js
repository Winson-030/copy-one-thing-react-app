//react imports
import { useState } from 'react';
import { React } from 'react';


// libraries
import JSConfetti from 'js-confetti'

//custom imports
import Form from './components/Form';
import OneThing from './components/OneThing';

const jsConfetti = new JSConfetti()


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
  const [isNight, setIsNight] = useState(true)


  const [isEng, setIsEng] = useState(true)

  const handleLanguage = () => {
      setIsEng(!isEng)
  }

  const getSuccessMessage = () => {
    let messages = []
    if (isEng) {
      messages =  ["Congrats!", "Great job!", "Don’t ya feel great?!", "Up, up, and up!", "Um…okay", "Did you though?", "Don’t feel like you tried your best…", "FAget about it!"];
    } else {
      messages =  ["你好啊!", "做得不错!", "是不是觉得很棒?!", "再来再来!", "感觉还行", "你觉得怎样?", "你还可以再来一次", "来了!"];
  
    }
  
    return messages[Math.floor(Math.random() * messages.length)];
  }

  const handleNight = () => {
    console.log(isNight);
    if (isNight === true) {
        document.documentElement.classList.add('dark') 
    }else{
        document.documentElement.classList.remove('dark')
    }
    setIsNight(!isNight)
}


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
// make night toggle icon follow night mode 
    if (isNight === true) {
      setIsNight(true)
    } else {
      setIsNight(false)
    }
  
  }
  return (
    <main className="grid place-items-center min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 text-slate-900 dark:text-slate-200">

      <div className="grid place-items-center gap-8 m-8">
        {
          isCompleted && (<Form
            thing={thing}
            handleInput={handleInput}
            handleSubmit={handleSubmit}
            handleNight={handleNight}
            handleLanguage={handleLanguage}
            isNight={isNight}
            isEng={isEng}
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
