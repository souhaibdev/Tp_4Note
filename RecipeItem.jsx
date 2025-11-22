import { useState } from "react";
function RecipeItem(props){
    const immg={
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderRadius: "12px"
}
    const carde={
    width: "350px",
    padding: "15px",
    margin: "30px",
    marginTop:"5px",
    borderRadius: "15px",
    background: "white",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    textAlign: "center",
    fontFamily: "Arial"
}

    const btn = {
    padding: "10px 15px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    background: "#f0f0f0",
    transition: "0.3s"
  };

  const btn1 = {
    padding: "10px 15px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    color:"#2a1c78ff",
    background: "#abbefd40",
    transition: "0.3s"
  };


  const btn2 = {
    padding: "10px 15px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    background: "#ff6c6c77",
    color:"#b10e19ff",
    transition: "0.3s"
  };
  const ull= {
  listStyle: "none",
  padding: "0",
  marginTop: "10px",
  textAlign: "left",
  display:"flex",
  gap:"20px",
  justifyContent:"center"
};
const lii= {
  background: "#f7f7f7",
  padding: "10px",
  marginBottom: "8px",
  borderRadius: "8px",
  boxShadow: "0 2px 5px rgba(3, 2, 2, 0.05)",
  fontSize: "15px"
};

    let p = {
    color: "#598bf8ff",               
    backgroundColor: "#d7ebff",     
    width: "60px",                   
    height: "25px",              
    marginTop: "20px",               
    marginLeft: "80px",          
    borderRadius: "9px",             
    textAlign: "center",              
    lineHeight: "25px",                
    fontWeight: "bold",            
    boxShadow: "0 2px 3px rgba(0,0,0,0.2)" 
};


    
    function supprimer(){
        props.supprime(props.id);
    }

    function dupliquer(){
        props.duplique(props.id)
    }
    function modifier(){
        props.modifie(props.id)
    }
    return(
        <div style={carde}>
            <img src={props.img} alt="cc" style={immg}/>
            <div style={{display:"flex"}}>
            <h2 style={{fontFamily:"fantasy"}}>{props.nom}</h2>
            <p style={p}>{props.categorie}</p>
            </div>
            <ul style={ull}>
                {props.listeIngredient && props.listeIngredient.map((ingredient, index) => (
                    <li style={lii} key={index}>{ingredient}</li>
                ))}
            </ul>
            <h3 style={{marginLeft:"-180px"}}>Difficulte :{props.niveau}</h3>
            <div style={{display:"flex",gap:"20px",marginLeft:"20px"}}>
            <button style={btn} onClick={modifier}>Modifier</button>
            <button style={btn1}  onClick={dupliquer}>Dupliquer</button>
            <button style={btn2}  onClick={supprimer}>Supprimer</button>
            </div>
        </div>
    )
}
export default RecipeItem;