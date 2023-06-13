//react imports
import { useState } from 'react';
import { React } from 'react';




//custom imports
import Form from './components/Form';
import OneThing from './components/OneThing';
import { Context } from './components/Context';






function App() {
  const [thing, setThing] = useState("")
  const [isCompleted, setIsCompleted] = useState(true)
  const [isNight, setIsNight] = useState(true)
  const [isEng, setIsEng] = useState(true)

 
  const handleLanguage = () => {
      setIsEng(!isEng)
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

 
  return (
    <main className="main">
     
      <div className="grid place-items-center gap-8 m-8">
        {
          isCompleted && ( <Context.Provider value={{thing,setThing,isEng,setIsEng,isNight,setIsNight,isCompleted,setIsCompleted}}><Form
            thing={thing}
            handleInput={handleInput}
            handleSubmit={handleSubmit}
            handleNight={handleNight}
            handleLanguage={handleLanguage}
            isNight={isNight}
            isEng={isEng}
          /></Context.Provider>

          )

        }
        {
          !isCompleted && (
            <Context.Provider value={{thing , setThing,isCompleted,setIsCompleted,isEng ,setIsEng ,isNight,setIsNight}}>
            <OneThing /></Context.Provider>
          )
        }

      </div>



    </main>
  );
}

export default App;
