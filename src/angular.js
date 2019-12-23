import app from ".././index.js";
import React from "react";
import ReactDom from "react-dom";

import Layout from "./react";

const AngularDirective = app.directive("react", function(){
    return {
        template: '<div id="root"></div>',
        link: function(){
            ReactDom.render( <Layout  />, document.getElementById('root'));
        }
    }
})

export default AngularDirective;