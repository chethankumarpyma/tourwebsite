import React from 'react';

class LandingPage extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
             <React.Fragment>
                 <div className="landing-page">
                     <div className="wrapper">
                         <div className="d-flex flex-column text-center justify-content-center align-items-center h-100">
                            <h5 className="display-4">Vyavahar Technologies</h5>
                            <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
                         </div>
                     </div>
                 </div>
             </React.Fragment>
        );
    }
}

export default LandingPage ;