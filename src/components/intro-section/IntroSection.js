import React from 'react';

class IntroSection extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
             <React.Fragment>
                 <section className="p-3 bg-dark text-white">
                     <div className="container">
                         <div className="row">
                             <div className="col text-center">
                                 <p className="h3">Vyavahar Technologies pvt india ltd </p>
                                 <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                 <button className="btn btn-light btn-sm">Explore Now</button>
                             </div>
                         </div>
                     </div>
                 </section>
             </React.Fragment>
        );
    }
}

export default IntroSection ;