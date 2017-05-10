import React from 'react';

export default class Block extends React.Component {
	
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>Block</div>
    );
  }
}
