import { useState } from 'react';
import RecipeForm from './RecipeForm';
import img1 from './la_boite.jpeg';
import Pagination from './Pagination';
import RecipeFilter from './RecipeFilter';

function RecipeList() {
    const [recipesOr]= useState([
        {
            id: 1,
            img: img1,
            nom: 'Salade hhhhh',
            categorie: 'Plat Principal',
            listeIngredient: ['Pâtes', 'Crème', 'Jambon', 'Parmesan'],
            niveau: 'Moyenne',
        },
        {
            id: 2,
            img: img1,
            nom: 'Salade César',
            categorie: 'Entrée',
            listeIngredient: ['Laitue', 'Poulet', 'Croutons', 'Sauce César'],
            niveau: 'Facile',
        },
        {
            id: 3,
            img: img1,
            nom: 'Salade César',
            categorie: 'Entrée',
            listeIngredient: ['Laitue', 'Poulet', 'Croutons', 'Sauce César'],
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

    function modifierRecipe(recipModif){
        const modifeRecip = recipes.map(recip => recip.id === recipModif.id ? { ...recip, ...recipModif }: recip);
        setRecipes(modifeRecip)
    }
    return (
        <div style={{display:"flex"}}>
            <RecipeForm ajoute={ajouterNouveauLRecipe} />
            <Pagination recip={recipes} 
                    supprimeRecipe={supprimeRecipe}
                    dupliquerRecipe={dupliquerRecipe}
                    modifierRecipe={modifierRecipe}/>

            <RecipeFilter recip={recipesOr} setRecipes={setRecipes} />        
            
        </div>
    );
}

export default RecipeList;
