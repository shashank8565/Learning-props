import Item from "./Item";
const FoodItems = ({foodData}) =>{





 return(
  <ul class="list-group">
    {
      foodData.map(item => 
        <Item key={item} data={item}></Item>
      
      ) 
      
    }
  
</ul>
 )
}


export default FoodItems;