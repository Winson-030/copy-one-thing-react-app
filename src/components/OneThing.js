import Button from "./Button";
import { Context } from "./Context";
import { useContext } from "react";

const OneThing = () => {
    const {thing} = useContext(Context)
    return (
        <>
            <h1 className='text-3xl sm:text-6xl font-bold text-center'>{thing}</h1>
            <Button
                text="Mark done"
 
            />
        </>
    )
}

export default OneThing;