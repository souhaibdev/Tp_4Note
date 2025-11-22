import { useState } from "react";
import RecipeItem from "./RecipeItem";
function Pagination(props){
   
    const [currentPage, setCurrentPage]=useState(1)
    const itemsPerPage = 2;

     const goToPage = (page) => {
        setCurrentPage(page)
    }


    const lastItem = currentPage*itemsPerPage;
    const firstItem = lastItem - itemsPerPage;
    const currentItems = props.recip.slice(firstItem, lastItem);
    const totalPages = Math.ceil(props.recip.length/itemsPerPage)


    let btn={
        padding: "10px 15px",
        borderRadius: "10px",
        background: "rgba(0, 76, 255, 0.8)",
        color: "white",
        border: "2px solid rgba(255, 255, 255, 0.18)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 0 10px rgba(227, 228, 237, 0.37)",
        outline: "none", fontSize: "16px",
        cursor: "pointer", marginTop:"5px",
        marginLeft:"30px"
    }
    
    return(
        <div>
             <div style={{display:"flex"}}>
                {currentItems.map((recip)=>(
                    <RecipeItem key={recip.id} img={recip.img} nom={recip.nom} categorie={recip.categorie} listeIngredient={recip.listeIngredient} niveau={recip.niveau} 
                        supprime={()=>props.supprimeRecipe(recip.id)}
                        duplique={()=>props.dupliquerRecipe(recip.id)}
                        modifie={props.modifierRecipe}/>
                ))}
            </div>
                {Array.from({ length: totalPages }, (_, i) => (
                    <button key={i} onClick={() => goToPage(i + 1)} disabled={currentPage === i + 1} style={btn}>
                        {i + 1}
                    </button>
                ))}
            </div>
    )
} 
export default Pagination; 