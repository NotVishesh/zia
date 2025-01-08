
function Section_title({Text} : {Text: string}) { 
  return (
    <>
    <div className="flex justify-center items-center border-black pt-5 ">
      <p className="self-center border-black border-2 rounded-md mt-2 p-4 font-bold">{Text.toUpperCase()}</p>
    </div>
    </>

  )
}

export default Section_title