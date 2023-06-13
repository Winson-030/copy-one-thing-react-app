
//libraries imports
import { ArrowRightCircleIcon, SunIcon } from '@heroicons/react/24/solid'
import { LanguageIcon } from '@heroicons/react/24/solid'
import { MoonIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { Context } from './Context'



const Form = () => {
    
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

const {isNight, setIsNight,thing,setThing,isCompleted,setIsCompleted,isEng,setIsEng} = useContext(Context)
    
    return (
        <>
            <h1 className='text-3xl sm:text-6xl font-bold text-center'>{
                isEng ? "What is your \"One Thing\"?" : "随便输入看看"
            }</h1>

            <form className='form'
                onSubmit={handleSubmit}
            >
                <input type="text"
                    className='input'
                    placeholder={isEng? 'Enter one thing':'敲点啥呗'}
                    autoFocus
                    maxLength={64}
                    value={thing}
                    onInput={handleInput}
                ></input>
                <button
                    className='arrow-icon'
                >
                    <ArrowRightCircleIcon className="icon" />
                </button>

            </form>
            <div className="flex-auto">
                <button
                    className='btn-icon'
                    onClick={handleLanguage}
                    autoFocus
                >
                    <LanguageIcon className="icon" />
                </button>
                <button
                    className='btn-icon'
                    onClick={handleNight}
                    autoFocus
                >
                    {
                     !isNight ? <MoonIcon className="icon" /> :<SunIcon className="icon" />
                    }
                    
                </button>

            </div>

        </>
    )
}

export default Form;