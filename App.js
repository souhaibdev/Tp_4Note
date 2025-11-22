import './App.css';
import Client from './props/client'
import Visiteur from './props/visiteur'
import State from './props/state.jsx'
import Exerecice from './props/Exerciceform.jsx';

import Headere from './compMap/Headere.jsx';
import Footer from './compMap/Footer.jsx';
import DashedList from './compMap/DashedList.jsx';
import TableList from './compMap/TableList.jsx';
import Livre from './compProps/Livre.jsx';

import ListLivre from './compProps/ListLivre.jsx';
import Ajouterlivre from './compProps/AjouterLivre.jsx';
import Test_interComposant from './compProps/test_interComposant.jsx';
import Resultat from './compInter.jsx/resultat.jsx';

import RecherecheInput from './compInter.jsx/rechercheInput.jsx';
import App2 from './compInter.jsx/rechercheSelect.jsx';


import Counter from './Tp3State/counter.jsx';
import MoodSelector from './Tp3StateEx2/MoodSelector.jsx';
import Changer from './compInter.jsx/rechercheSelect.jsx';



import RecipeForm from './T4Note/RecipeForm.jsx';
import RecipeList from './T4Note/RecipeList.jsx';
import Aide from './T4Note/Aide.jsx';
import MainPage from './T4Note/mainPage.jsx';

function App() {

// let etat = true;
  return(
    
    
    // tp-2 partie-1
    // <div> 
    //   <Headere/>
    //   <DashedList/>
    //   <TableList/>
    //   <Footer/>
    // </div>


    // partie-2
    <div>
      <MainPage/>
      {/* <RecipeList/> */}
      {/* <RecipeForm/> */}



      {/* tp-3 ex1 */}
    {/* <MoodSelector/> */}

      {/* tp-3 ex1 */}
       {/* <Counter/> */}



    {/* <Resultat/> */}

    {/* <RecherecheInput/> */}
      {/* <Test_interComposant/> */}
      <br/><br/>
      {/* <ListLivre/> */}

       {/* <Livre/>  */}
    </div>
  





    // <div className="App">
    //   <Exerecice/>
    //   </div>

    // {/* <State/> */}

    // <div className="App">
    //   {etat ? <Client nom="souahib">
    //     </Client> :<Visiteur></Visiteur>}
    // </div>
    
  )
}
  // return (
  //   <div className="App">
  //     {/* <CalculTTc/> */}      
  //     <Client nom="souahib">
  //       </Client>

  //     <Visiteur></Visiteur>
  //   </div>
  // );

export default App;
