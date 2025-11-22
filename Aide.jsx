function Aide(){
    const carde={
    width: "350px",
    padding: "10px",
    margin: "20px",
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    position:"absolute",
    top : "70px",
    right :"0px"
}
    return(
        <div style={carde}>
            <div style={{display:'flex',gap:"110px"}}>
                <h1>Aide rapide</h1>
                <p style={{marginTop:'33px',
                    backgroundColor:"rgba(198, 194, 194, 0.41)",
                    width:"40px",height:"25px",
                    textAlign:"center",borderRadius:"5px"}}>v1.0</p>
            </div>
            <ul>
                <li style={{color:"rgba(59, 59, 59, 0.78)",marginLeft:"-25px"}}>Cliquer sur <strong> +Creer une nouvelle recette </strong> pour ouvrir le formulaire</li>
                <li style={{color:"rgba(59, 59, 59, 0.78)",marginLeft:"-25px"}}>Pagination numerotee en bas de la liste</li>
            </ul>
            
        </div>
    )
} 
export default Aide;