import React from 'react';
// import TourContainer from '../TourContainer';

class TourCard extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
             <React.Fragment>
                 <div className="card">
                     <img src={this.props.tourImage} alt="" className="img-fluid" />
                     <div className="card-body">
                         <h4 className="card-title">{this.props.tourName}</h4>
                         <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                         <button className="btn btn-dark btn-sm">Book Now</button>

                     </div>
                 </div>
             </React.Fragment>
        );
    }
}

export default TourCard ;