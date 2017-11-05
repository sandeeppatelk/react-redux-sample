import React from 'react';
import {connect} from 'react-redux';

function Header ({username}){
    return(
        <header className="App-header">
          <h1 className="App-title">Welcome to {username}</h1>
        </header>
    )

}

const mapStateToProps = function(state){
  console.log(state);
  return {
    username: state.username
  };
}

export default connect(mapStateToProps)(Header);