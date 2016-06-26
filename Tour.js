import React from 'react';
import axios from 'axios';

class Tour extends React.Component {
  constructor () {
    super();
    this.state = {
      flickrData: null
    };
  }
  componentDidMount() {
  // we do our fetch here
    axios.get('https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=ac1b9e512aaa24e40b02c6b2beff8018&photoset_id=72157667142546453&user_id=143341792%40N05&extras=url_o&format=json&nojsoncallback=1&auth_token=72157669689676381-61ee1cfc606b1803&api_sig=37792585584c4e7382a6827cf4f527ca').then(res => {
      this.setState({
        flickrData: res.data.photoset.photo
      });
    });
  }
  render(){
    let images;
    if(Array.isArray(this.state.flickrData)) {
      images = this.state.flickrData.map((e,i) => {
        return (<div key={i} className={'photo' + i}><img src={e['url_o']}/></div>);
      });
    }
    return (<div className="tour-gallery">
      {images}
    </div>);
  };
}

export default Tour;
