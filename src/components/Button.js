import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Button = ({ text, handleCompletedThing }) => {
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