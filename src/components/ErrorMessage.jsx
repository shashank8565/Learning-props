const ErrorMessage = ({foodData}) => {

 
  return(
    <>
    {
      foodData.length===0 && <h1>I am still <Hungry></Hungry></h1>
    }
    </>
    



  )
}

export default ErrorMessage;