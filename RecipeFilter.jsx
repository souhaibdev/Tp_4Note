import { useState } from "react";
function RecipeFilter(props){
    const [categor,setCategorie] = useState("");

    function recherecher(event){
        const value = event.target.value
        setCategorie(value);
        const filtrer =  props.recip.filter((list)=>(list.categorie.toLowerCase().includes(value.toLowerCase())));
        props.setRecipes(filtrer)

    }
    let input ={
        marginTop:"25px",
        marginLeft:"160px",
        width:"250px",
        height:"30px",
    }
    let select ={
        marginTop:"10px",
        marginLeft:"20px",
        width:"150px",
        height:"35px",
    }

    return(
        <div >
            <input type="text" value={categor} onChange={recherecher} style={input}/>
            <select value={categor} onChange={recherecher} style={select}>
                <option value="entrée">Entrée </option>
                <option value="plat">Plat  </option>
                <option value="dessert">Dessert  </option>
                <option value="boisson">Boisson</option>
            </select>
        </div>
    )

}
export default RecipeFilter;