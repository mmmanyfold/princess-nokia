import React from 'react';
import axios from 'axios';
import {find, propEq} from 'ramda';

const flickrEndpoint = 'http://princess-nokia-flickr-api.apps.aterial.org/api/photos';

class Tour extends React.Component {

	constructor() {
		super();
		this.state = {
			flickrData: null
		};
	}

	componentDidMount() {
		axios.get(flickrEndpoint)
			.then(res => {
				this.setState({
					flickrData: find(propEq('name', 'tour gallery'))(res.data).photos
				});
			})
			.catch(err => console.error(err));
	}

	render() {
		let images;
		if (Array.isArray(this.state.flickrData)) {
			images = this.state.flickrData.map((e, i) => {
				return (<div key={i} className={'photo' + i}><img src={e}/></div>);
			});
		}
		return (<div className="tour-gallery">
			{images}
		</div>);
	};
}

export default Tour;
