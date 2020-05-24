import React, { Component } from 'react';
import { connect } from 'react-redux';

class Notification extends Component {
  
    render() {
      const {bonneReponse, mauvaiseReponse, previousTab } = this.props;
      return (
        <>
        {bonneReponse == true &&
          <>
            <div className="row">
              <div className="alert alert-success" role="alert">
                Bravo !
              </div>
            </div>
            <div className="row">
              <div className="alert alert-primary" role="alert">
                Super! c'est la bonne réponse : {previousTab[0].premierChiffre} x {previousTab[0].deuxiemeChiffre} = {previousTab[0].resultat}
              </div>
            </div>
          </>
          }

          { mauvaiseReponse == true &&
          <>
            <div className="row">
              <div className="alert alert-danger" role="alert">
                Raté...
              </div>
            </div>
            <div className="row">
              <div className="alert alert-primary" role="alert">
                Mauvaise réponsé, la bonne était : {previousTab[0].premierChiffre} x {previousTab[0].deuxiemeChiffre} = {previousTab[0].resultat}
              </div>
            </div>
            </>
            }
            </>
      )
    }
  }

  const mapStateToProps = state => { return { ...state} }
  const mapDispatchToProps = {};
  
  export default connect(mapStateToProps, mapDispatchToProps)(Notification);