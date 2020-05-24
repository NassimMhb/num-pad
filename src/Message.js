import React, { Component } from 'react';
import { connect } from 'react-redux';

class Message extends Component {
  
    render() {
    const { chiffre } = this.props;
      return (
      <p>{chiffre}</p>
      )
    }
  }

  const mapStateToProps = state => { return { chiffre:state.chiffre} }
  const mapDispatchToProps = {};
  
  export default connect(mapStateToProps, mapDispatchToProps)(Message);