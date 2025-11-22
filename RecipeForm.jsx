import { useState } from "react";
function RecipeForm(props){
    const[nom,setNom] = useState("");
    const[categorie,setCategorie] = useState("");
    const[ingredient,setingredient] = useState([""]);
    const[difficulte,setDifficulte] = useState(0);
    const[description,setDescription] = useState("");
    const[image,setImage] = useState("");
    const [showForm, setShowForm] = useState(true);

    function onNomchange(event){
        setNom(event.target.value);
    }

    function onCategoriechange(event){
        setCategorie(event.target.value);
    }

    function onIngredientechange(event,index){
        const modifieIngr = ingredient.map((ingre,i) =>
        i === index ? event.target.value : ingre)
        setingredient(modifieIngr);
    }

    function onDifficultechange(event){
        setDifficulte(event.target.value);
    }

    function onDescriptionchange(event){
        setDescription(event.target.value);
    }

    function onImagechange(event){
        setImage(event.target.files[0]);
    }

    function AjouterIn(){
       setingredient([...ingredient, ""]); 
    }

    function supprimerIn(index){
       const filtree = ingredient.filter((_,i)=> i !== index)
       setingredient(filtree)
    }

    const fermer = () => {
        setShowForm(!showForm)
    }; 



    function Enregistrer(){
    const nouveauRecipe = {    
            id :Math.random(),   
            nom: nom,
            img: URL.createObjectURL(image),
            categorie: categorie, 
            listeIngredient: ingredient,
            niveau: difficulte,
            
        };
    props.ajoute && props.ajoute(nouveauRecipe);
        alert("ajouter avec succes!")
    
    }

     function Annuler(){
        setNom('');
        setCategorie('');
        setingredient([""]);
        setDifficulte(0);
        setDescription("");
        setImage("")
    }

    let div1={
        width: "400px",
        padding: "20px",
        margin: "20px auto",
        borderRadius: "15px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
        backgroundColor: "#f9f9f9",
        fontFamily: "Arial, sans-serif"

    }

    let input ={
        width:"95%",
        padding:"8px", 
        marginTop:"5px", 
        borderRadius:"5px", 
        border:"1px solid #ccc"
    }

    let btn1 ={
        background:"#0077ffff", 
        color:"white", 
        border:"none", 
        borderRadius:"5px", 
        padding:"8px 12px", 
        cursor:"pointer"
    }

    let btn2 ={
        background:"gray", 
        color:"white", 
        border:"none", 
        borderRadius:"5px", 
        padding:"8px 12px", 
        cursor:"pointer",
        marginLeft:"20px"
    }


   
    return(
        
        <div style={div1}>
        {showForm && (
        <div>
        <h1 style={{display:"iline", justifyContent:"space-between", alignItems:"center"}}>Nouvelle recette
            <button onClick={fermer} style={{
            background: "red",
            color: "white",
            marginLeft:"90px",
            border: "none",
            borderRadius:"5px",
            padding:"5px 10px",
            cursor:"pointer"
        }}>fermer</button>
        </h1>
        <br />
        <label>Nom</label>
        <br />
        <input type="text" placeholder="Ex:Pancakes maison" value={nom} onChange={onNomchange} style={input}/>
        <br /><br />
        <label>Categorie</label>
        <br />
        <select value={categorie} onChange={onCategoriechange} style={input}>
            <option value="Plat">Plat</option>
            <option value="dessert ">Dessert </option>
            <option value="boisson">Boisson</option>
        </select>
        <br /><br />
        <label>Ingredient</label>
        <br />
        {ingredient.map((ingre,index) => (
            <div>
            <input key={index} type="text" placeholder="Ex:Pancakes maison" value={ingre} onChange={(e) => onIngredientechange(e, index)} />
            <button onClick={() => supprimerIn(index)} >suppr</button>
            </div>
        ))}
        <br />
        <button onClick={AjouterIn} style={input}>+ajouter ingredient</button>
        <br /><br />
        <label>Difficulte :{difficulte}</label>
        <br />
        <input type="range" value={difficulte} onChange={onDifficultechange} max={5} min={0} step={1} style={input}/>
        <br /><br />
        <label>Description</label>
        <br />
        <textarea value={description} onChange={onDescriptionchange} style={input}></textarea>
        <br /><br />
        <label>Image</label>
        <br />
        <input type="file" onChange={onImagechange}/>
        <br /><br />
        <button onClick={Enregistrer} style={btn1}>Enregistrer</button>
        <button style={btn2} onClick={Annuler}>Anuuler</button>
        </div>
        )}

        </div>
    )
}
export default RecipeForm;