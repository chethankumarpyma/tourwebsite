import React from 'react';

class Navbar extends React.Component {
  constructor(props) {
      super(props);
  }
  render() {
      return (
           <React.Fragment>
               <nav className="navbar navbar-dark bg-dark navbar-expand-sm" style={{ position: "fixed" , width:"100%"}}>
                    <div className="container">
                        <a href="/" className="navbar-brand">Vyavahar Technologies</a>

                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a href="/" className="nav-link">Home</a>
                                </li>

                                <li className="nav-item">
                                    <a href="/" className="nav-link">About Us</a>
                                </li>

                                <li className="nav-item">
                                    <a href="/" className="nav-link">Contact Us</a>
                                </li>

                                <li className="nav-item">
                                    <a href="/" className="nav-link">Products</a>
                                </li>

                                <li className="nav-item">
                                    <a href="/" className="nav-link">Services</a>
                                </li>
                            </ul>

                        </div>
                    </div>
               </nav>
           </React.Fragment>
      );
  }
}
 
export default Navbar;