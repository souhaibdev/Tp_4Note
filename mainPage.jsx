import { useState } from "react";
import RecipeFilter from "./RecipeFilter";
import Aide from "./Aide";
import RecipeForm from './RecipeForm';
import img1 from './tacos.jpg';
import img2 from './mangue.jpg';
import Pagination from './Pagination';
function MainPage(){
    const [showForm, setShowForm] = useState(false);

    const ajouterRecipe= () => {
        setShowForm(!showForm)
    };
    let header = {
        display :"flex",
        justifyContent :"space-between"
    }
    let btn = {
        height:"35px",
        width:"220px",
        marginTop:"25px",
        marginRight:"20px",
        backgroundColor : "rgba(0, 102, 255, 0.68)",
        color:"white",
        borderRadius: "7px",
        border:"none",
    }

    let h1 = {
        marginLeft:"20px",
    }


    const [recipesOr]= useState([
            {
                id: 1,
                img: img1,
                nom: 'Tacos mediterranes',
                categorie: 'Plat',
                listeIngredient: ['Pâtes', 'Crème', 'Jambon'],
                niveau: 'Moyenne',
            },
            {
                id: 2,
                img: img2,
                nom: 'Smoothie mangue',
                categorie: 'Entrée',
                listeIngredient: ['Laitue', 'Poulet', 'Croutons'],
                niveau: 'Facile',
            },
            {
                id: 3,
                img: img1,
                nom: 'Salade César',
                categorie: 'Entrée',
                listeIngredient: ['Laitue', 'Poulet', 'Croutons'],
                niveau: 'Facile',
            },
        
        ]);
    
        const [recipes,setRecipes ]= useState(recipesOr)
    
        function supprimeRecipe(id){
            setRecipes(recipes.filter(recipe => recipe.id !== id))
        }
    
    
        function ajouterNouveauLRecipe(nouvrecipes){
            setRecipes([...recipes, nouvrecipes]);  
        };
    
        function dupliquerRecipe(id){
            const recip = recipes.find(re => re.id === id);
            const copie = {...recip,id:Math.random()}
            setRecipes([...recipes,copie])
    
        }
    
        

    return(
        <div>
            <div style={header}>
            <h1 style={h1}> 🍽 Creative Recipe Builder</h1>
            <RecipeFilter recip={recipesOr} setRecipes={setRecipes} />
            <button style={btn} onClick={ajouterRecipe}>+Creer une nouvelle recette</button>
            </div>
            <div>
             <Pagination recip={recipes} 
                    supprimeRecipe={supprimeRecipe}
                    dupliquerRecipe={dupliquerRecipe}/>
            <Aide/>
            </div>
            {showForm && <RecipeForm ajoute={ajouterNouveauLRecipe} />}
        </div>
    )
}
export default MainPage;