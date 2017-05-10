/* eslint-disable */

import React, { Component } from 'react';
 
// components
import Slider from './components/Slider';
import Jumbotron from './components/Jumbotron';
import ImageDynamicLayout from './components/ImageDynamicLayout';
import Headline from './components/Headline';

export default class App extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      morelayouts: {
        title: 'MORE LAYOUTS',
        lead: '',
        styles: ['text-center', 'headline']
      },
      sliders: [{
        src: 'http://wallpapercave.com/wp/vwJZSoX.jpg',
        caption: 'John Lennon'
      }, {
        src: 'http://cdn.wallpapersafari.com/71/43/Mm76u9.jpg',
        caption: 'John Lennon'
      }],
      jumbotron: {
        title: 'Hey, DELOITTE',
        lead: 'I am Tim Tawan, a full stack developer, nice to meet you. I\'ve build this very basic SPA for you'
      },
      layout_one: {
        layout: 'box',
        zoom: false,
        styles: ['col-lg-12'],
        image: {
          src: 'http://wallpapercave.com/wp/vwJZSoX.jpg',
          caption: 'This is john lennon'
        },
        caption: {
          title: 'Idea?',
          lead: 'Imagine if you could have backend to modify all words, medias and layouts for this application'
        }
      },
      layout_two: {
        layout: 'box',
        zoom: true,
        styles: ['col-lg-12'],
        image: {
          src: 'http://wallpapercave.com/wp/vwJZSoX.jpg',
          caption: 'This is john lennon'
        }
      },
      layout_three: {
        layout: 'box',
        zoom: true,
        styles: ['col-lg-6'],
        image: {
          src: 'http://wallpapercave.com/wp/vwJZSoX.jpg',
          caption: 'This is john lennon'
        }
      },
      layout_four: {
        layout: 'box',
        zoom: true,
        styles: ['col-lg-6'],
        image: {
          src: 'http://wallpapercave.com/wp/vwJZSoX.jpg',
          caption: 'This is john lennon'
        }
      },
      layout_five: {
        layout: 'full',
        zoom: false,
        styles: ['col-lg-12', 'breakout-screen'],
        image: {
          src: 'http://wallpapercave.com/wp/vwJZSoX.jpg',
          caption: 'This is john lennon'
        },
        caption: {
          title: 'BREAKOUT AREA',
          lead: 'Modify texts, medias, layout from admin panel easily, all properties from API '
        }
      },
      layout_six: {
        layout: 'box',
        zoom: false,
        styles: ['col-lg-12'],
        image: {
          src: 'http://wallpapercave.com/wp/vwJZSoX.jpg',
          caption: 'This is john lennon'
        },
        caption: {
          title: 'BLURB',
          lead: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum '
        }
      },
      layout_seven: {
        layout: 'side',
        zoom: false,
        styles: ['col-lg-12'],
        image: {
          src: 'http://wallpapercave.com/wp/vwJZSoX.jpg',
          caption: 'This is john lennon'
        },
        caption: {
          title: 'HELLO THERE',
          lead: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam.'
        }
      },
      layout_nine: [
        {
          layout: 'side',
          zoom: false,
          styles: ['col-lg-12'],
          image: {
            src: 'http://wallpapercave.com/wp/vwJZSoX.jpg',
            caption: 'This is john lennon'
          },
          caption: {
            title: 'BLURB',
            lead: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum '
          }
        },
        {
          layout: 'side',
          zoom: false,
          styles: ['col-lg-12'],
          image: {
            src: 'http://wallpapercave.com/wp/vwJZSoX.jpg',
            caption: 'This is john lennon'
          },
          caption: {
            title: 'BLURB',
            lead: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum '
          }
        }
      ],
      layout_list: [
        {
          layout: 'box',
          zoom: false,
          styles: ['item-list', 'col-lg-3'],
          image: {
            src: 'http://wallpapercave.com/wp/vwJZSoX.jpg',
            caption: 'This is john lennon'
          },
          caption: {
            title: 'HELLO THERE',
            lead: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam.'
          }
        },
        {
          layout: 'box',
          zoom: false,
          styles: ['item-list', 'col-lg-3'],
          image: {
            src: 'http://wallpapercave.com/wp/vwJZSoX.jpg',
            caption: 'This is john lennon'
          },
          caption: {
            title: 'HELLO THERE',
            lead: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam.'
          }
        },
        {
          layout: 'box',
          zoom: false,
          styles: ['item-list', 'col-lg-3'],
          image: {
            src: 'http://wallpapercave.com/wp/vwJZSoX.jpg',
            caption: 'This is john lennon'
          },
          caption: {
            title: 'HELLO THERE',
            lead: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam.'
          }
        },
        {
          layout: 'box',
          zoom: false,
          styles: ['item-list', 'col-lg-3'],
          image: {
            src: 'http://wallpapercave.com/wp/vwJZSoX.jpg',
            caption: 'This is john lennon'
          },
          caption: {
            title: 'HELLO THERE',
            lead: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam.'
          }
        }
      ]
    }
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








