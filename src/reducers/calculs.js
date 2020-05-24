import { SEND_NUMBER, DELETE_ELEMENT, DELETE_ALL, CREER_QUESTION } from "../constants/actions";
import { creerQuestion  } from "../utils/multiplication";

let tableauValues;
let tableau1 =  creerQuestion();
let quest1 = 'Calculez : '+ tableau1[0].premierChiffre + " x " + tableau1[0].deuxiemeChiffre + " = "

const stateInit = {
    chiffre: '',
    values: [],
    tab: tableau1,
    previousTab:tableau1,
    question : quest1,
    nombreQuestion: 10,
    score:0,
    bonneReponse: false,
    mauvaiseReponse: false,
}

export default (state = stateInit, action = {}) => {

    switch (action.type) {

        case SEND_NUMBER:

            tableauValues = [ ...state.values, action.payload.value ];

            return {
                ...state,
                chiffre : state.chiffre.concat(''+action.payload.value),
                values : tableauValues,
                
            }

        case DELETE_ELEMENT:
            if(tableauValues.length != 0){
                tableauValues = [ ...state.values];
                console.log(tableauValues)
                return {
                ...state,
                values :  tableauValues,
                chiffre : state.chiffre.substr(0, state.chiffre.length - 1)
            }
        }
        case DELETE_ALL:
            if(tableauValues.length != 0){
                return {
                ...state,
                chiffre: '',
                values: [],
                tab: tableau1,
                previousTab:tableau1,
                question : quest1,
                nombreQuestion: 10,
                score:0,
                bonneReponse: false,
                mauvaiseReponse: false,
            }
        }

        case CREER_QUESTION:
            let previousTab = state.tab
            let result = previousTab[0].resultat
            let sc = state.score 
            let bonneReponse = state.bonneReponse
            let mauvaiseReponse = state.mauvaiseReponse
            let nbQuestion = state.nombreQuestion
            if(parseInt(state.chiffre) == result){
                sc =  sc + 1
                bonneReponse = true
                mauvaiseReponse = false
            }
            else{
                mauvaiseReponse = true
                bonneReponse = false
            }
            let tab =  creerQuestion();
            let quest = 'Calculez : '+ tab[0].premierChiffre + " x " + tab[0].deuxiemeChiffre + " = "
            nbQuestion = nbQuestion - 1
          
                return {
                ...state,
                tab : tab,
                question : quest,
                score: sc,
                bonneReponse : bonneReponse,
                mauvaiseReponse : mauvaiseReponse,
                chiffre : '',
                nombreQuestion : nbQuestion,
                previousTab : previousTab
        }  

        default:
            return state;
    }
}