/* eslint-disable */

import React, { Component } from 'react';
 
// components
import Slider from '../../components/Slider';
import Jumbotron from '../../components/Jumbotron';
import ImageDynamicLayout from '../../components/ImageDynamicLayout';
import Headline from '../../components/Headline';

export default class AppContainer extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      isMouted: false
    }
  }

  componentDidMount() {
    this.setState({
      isMouted: true
    });
  }

  render() {
    return (<div>
    {
      !this.state.isMouted ? <div>Loading..</div> : this.props.children
    }
    </div>)
  }

}








