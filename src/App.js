import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";

//Import Componenets
import Header from './Header';
import Body from './Body';
import Footer from './Footer';


//App Component Parent of All!
const App = React.createClass({
  
  getInitialState: function() {
    return {
     
    }    

  },


  render: function() {   
    return (
      <div className="container-fluid" id="wrapper">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
});

ReactDOM.render( 
	<App />, 
	document.getElementById('root')
);