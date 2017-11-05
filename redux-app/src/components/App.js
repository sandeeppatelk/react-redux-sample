import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ChangeUserName } from '../actions/username';
import {bindActionCreators} from 'redux';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       
          <div>
            <input
                defaultValue={this.props.username} 
                onChange ={ (e) => {this.props.change(e.target.value)}}/>
          </div>
        </div>
    );
  }
}

const mapStateToProps = function(state){
  console.log(state);
  return {
    username: state.username
  };
}
const mapDispatchToProps = function(dispatch){
  return{
    change:bindActionCreators(ChangeUserName,dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
