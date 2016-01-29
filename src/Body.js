import React from "react";


//Header Component </Header>
let Body = React.createClass({

  render: function() {
    return (

        <div className="container">
          <h2>Webpack React Fun</h2>
          <p className="">I built this website using React and Webpack. Pretty much everything on this site is in JavaScript</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat pellentesque semper. Proin dui tortor, accumsan vel pulvinar ac, semper quis dui. Nullam at varius lacus, et iaculis enim. Cras dapibus ipsum eu metus rhoncus, in auctor leo ultricies. Ut venenatis imperdiet leo nec rutrum. Donec blandit leo elit, id ultrices dui lacinia in. Praesent in sem velit.</p>

          <p>Donec eget sollicitudin nisl. Praesent dictum vulputate facilisis. Nulla egestas eu magna eget consequat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla eu posuere enim, ut pellentesque diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. </p>

        </div>

    );
  }
});

export default Body;