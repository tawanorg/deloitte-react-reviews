/* eslint-disable */

import React, { Component } from 'react';
 
// components
import Slider from '../../components/Slider';
import Jumbotron from '../../components/Jumbotron';
import ImageDynamicLayout from '../../components/ImageDynamicLayout';
import Headline from '../../components/Headline';

export default class HomeContainer extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.setState({
      isReady: true
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="header clearfix">
              <div className="nav nav-pills pull-left">
                <h3 className="text-muted">D</h3>
              </div>
              <div className="nav nav-pills pull-right">
                <h3 className="text-muted">Project name</h3>
              </div>
          </div>
          <Slider images={this.state.sliders} />

          <Jumbotron data={this.state.jumbotron}/>

          
          <ImageDynamicLayout data={this.state.layout_one} />
         
          <ImageDynamicLayout data={this.state.layout_two} />
          

          <ImageDynamicLayout data={this.state.layout_three} />
          <ImageDynamicLayout data={this.state.layout_four} />
            
        </div>
        <div className="fluid-container">
          <ImageDynamicLayout data={this.state.layout_five} />
        </div>

        <div className="container">
          
          <Headline data={this.state.morelayouts} />

          <ImageDynamicLayout data={this.state.layout_six} />

          <ImageDynamicLayout data={this.state.layout_seven} />
         
          { this.state.layout_list.length !== 0 && this._renderProductList(this.state.layout_list)}
        
        </div>
        <footer className="footer">
          <p className="text-center">© DELOITTE DIGITAL 2013</p>
        </footer>
      </div>
    );
  }

  _renderProductList(lists) {
    return lists.map((list, index) => {
      return (<ImageDynamicLayout key={index} data={list} />);
    })
  }


}








