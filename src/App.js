import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addAction, updateAction } from './actions';

import './App.css';

class App extends Component {
  
  state = {
    inputValue: ''
  }

  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }
  
  render() {
    
    const {
      addAction,
      updateAction,
      list
    } = this.props;

    const { inputValue } = this.state;
    
    return (
      <div className="App" style={{ paddingTop: '10px' }}>
        <input
          value={inputValue} 
          onChange={this.inputChange}
          type='text' />

        <button onClick={() => addAction(inputValue)}>
          Click me!
        </button>
        <ul>
        {list.map(value => (
          <li onClick={() => updateAction(value)} style={{ textDecoration: value.enabled ? 'line-through' : 'none' }} >
            {value.text}
          </li>
        ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  list: store.clickState.list
});

const mapDispatchToProps = dispatch => bindActionCreators({ addAction, updateAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);