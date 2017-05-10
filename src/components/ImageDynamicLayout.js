import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default class ImageDynamicLayout extends React.Component {
  
	static propTypes = {
		data: PropTypes.shape({  
			layout: PropTypes.oneOf(['full', 'box', 'side']),
	    	zoom: PropTypes.bool,
	    	styles: PropTypes.array,
	    	image: PropTypes.shape({
	    		src: PropTypes.string,
	    		caption: PropTypes.string
	    	})
	  	}).isRequired
	}

	render() {
		const { data } = this.props;
		switch(data.layout) {
			case 'full':
			return this._renderFullLayout(data);
			case 'side':
			return this._renderSideLayout(data);
			default:
			return (
				<div className={cx(['item'], ...data.styles)}>
				<img src={data.image.src} className="img-responsive" alt={data.image.caption} />
				{ data.hasOwnProperty('caption') && this._renderCaption(data.caption) }
				</div>
			);
		}
	}
	 

	_renderSideLayout(data) {
		return (
			<div className={cx(['item'], ...data.styles)}>
				<div className="col-lg-2 nopadding item-side-caption">
					{ data.hasOwnProperty('caption') && this._renderCaption(data.caption) }
				</div>
				<div className="col-lg-10 no-padding-right">
					<img src={data.image.src} className="img-responsive" alt={data.image.caption} />
				</div>
			</div>
		)
	}

	_renderFullLayout(data) {
		return (
			<div className={cx([...data.styles])}>
				<div className="col-lg-4">
				{ data.hasOwnProperty('caption') && this._renderCaption(data.caption) }
				</div>
				<div className="col-lg-8">
				<img src={data.image.src} className="img-responsive" alt={data.image.caption} />
				</div>
			</div>
		);
	}

	_renderCaption(caption) {
		return (
			<div className="text-center">
			<h1>{caption.title}</h1>
			<p>{caption.lead}</p>
			</div>
		);
	}

}





















