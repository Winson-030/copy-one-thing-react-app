import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { Context } from "./Context";

// libraries
import JSConfetti from 'js-confetti'
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
const Button = ({ text }) => {

    const { setThing, isEng,setIsCompleted,setIsNight,isNight} = useContext(Context)
    
    const getSuccessMessage = () => {
        let messages = []
        if (isEng) {
          messages =  ["Congrats!", "Great job!", "Don’t ya feel great?!", "Up, up, and up!", "Um…okay", "Did you though?", "Don’t feel like you tried your best…", "FAget about it!"];
        } else {
          messages =  ["你好啊!", "做得不错!", "是不是觉得很棒?!", "再来再来!", "感觉还行", "你觉得怎样?", "你还可以再来一次", "来了!"];
      
        }
      
        return messages[Math.floor(Math.random() * messages.length)];
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
        // if (isNight === true) {
        //   setIsNight(true)
        // } else {
        //   setIsNight(false)
        // }
      isNight ===true ? setIsNight(true):setIsNight(false)
      }
 
    
    return (
        <>
         <button
                className='completedButton'
                onClick={handleCompletedThing}
                autoFocus 
            > <span className="pointer-events-none">{text}</span>
            <CheckCircleIcon className="icon"></CheckCircleIcon>
            </button>
        </>

    )
}

export default Button;