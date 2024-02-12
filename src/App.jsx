import 'bootstrap/dist/css/bootstrap.min.css'
import FoodItems from './components/FoodItems'
import ErrorMessage from './components/ErrorMessage'
function App() {

  let foodItems=['dal','vegetables','fruits','milk'];

  return (
    <>
  <h1>Healthy foods</h1>
  <FoodItems foodData={foodItems}></FoodItems>
  <ErrorMessage foodData={foodItems}></ErrorMessage>
 
  
</>
  )

  
}

export default App
