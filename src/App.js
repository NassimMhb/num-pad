import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './Message';
import Notification from './Notification';
import Button from './Button';
import { sendNumber, deleteElement, deleteAll, creerQuestion } from './actions/actions-types';

import './App.css';

class App extends Component {

  add = e => {
    const { name, id } = e.target;
    this.props.sendNumber({
      name: name,
      value: id,
    })
  }

  render() {
    const { deleteElement, deleteAll, creerQuestion, question, nombreQuestion, score, bonneReponse, mauvaiseReponse, previousTab } = this.props;
    return (
      <>
      <div className="container text-center" id="calc">
        <div className="text-center">
        <div className="row">
            <h3>Calcul mental !</h3>
          </div>
          
        <div className="row">
          <div className="col-6">
          {nombreQuestion > 0 && 
          <>
          <div className="row">
            <div className="alert alert-primary" role="alert">
              Vous avez 10 multiplications à faire. Utilisez les touches du clavier pour répondre. Bonne chance !
            </div>
          </div>
          <Notification />
          <div className="row">
            <div className="alert alert-primary" role="alert">
              { question }
            </div>
          </div>
          <div className="row">
            <Message />
          </div>  
          </>
        }
        { nombreQuestion == 0 &&
            <div className="row">
              <div className="alert alert-primary" role="alert">
                Vous avez terminé le jeu ! Votre score est de {score}
              </div>
            </div>
          }
          <div className="row">
            <button id="9" type="button" className="btn btn-dark" name="chiffre" onClick={this.add}>9</button>
            <button id="7" type="button" className="btn btn-dark" name="chiffre" onClick={this.add}>7</button>
            <button id="8" type="button" className="btn btn-dark" name="chiffre" onClick={this.add}>8</button>
          </div>
          <div className="row">
            <button id="6" type="button" className="btn btn-dark" name="chiffre"  onClick={this.add}>6</button>
            <button id="4" type="button" className="btn btn-dark" name="chiffre"  onClick={this.add}>4</button>
            <button id="5" type="button" className="btn btn-dark" name="chiffre"  onClick={this.add}>5</button>
          </div>
          <div className="row">
            <button id="3" type="button" className="btn btn-dark" name="chiffre"  onClick={this.add}>3</button>
            <button id="1" type="button" className="btn btn-dark" name="chiffre"  onClick={this.add}>1</button>
            <button id="2" type="button" className="btn btn-dark" name="chiffre"  onClick={this.add}>2</button>
          </div>
          <div className="row">
            <button id="0" type="button" className="btn btn-dark" name="chiffre"  onClick={this.add}>0</button>
          </div>
          <div className="row">
            <button id="go" type="button" className="btn btn-primary" name="chiffre" onClick={creerQuestion}>Go !</button>
          </div>
          <div className="row">
            <button id="reset" type="button" className="btn btn-danger" name="chiffre" onClick={deleteElement}>Reset choices !</button>
          </div>
          <div className="row">
            <button id="termi" type="button" className="btn btn-danger" name="chiffre" onClick={deleteAll}>Reset terminated !</button>
          </div>
          </div>
          <div className="col-4">
            <p className="border">Nombre de question(s) restante(s): {nombreQuestion}</p>
            <p className="border">Score: {score}</p>
          </div>
        </div>

        </div>
      </div>
      </>
    )
  }
}

const mapStateToProps = state => { return { ...state } }
const mapDispatchToProps = { sendNumber, deleteElement, deleteAll, creerQuestion };

export default connect(mapStateToProps, mapDispatchToProps)(App);
