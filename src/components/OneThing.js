import Button from "./Button";

const OneThing = ({ thing,handleCompletedThing }) => {
    return (
        <>
            <h1 className='text-3xl sm:text-6xl font-bold text-center'>{thing}</h1>
            <Button
                text="Mark done"
                handleCompletedThing={handleCompletedThing}
            />
        </>
    )
}

export default OneThing;