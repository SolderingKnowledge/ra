import React from "react";



export default class Layout extends React.Component {
    constructor(props){
        super(props);
    }
    componentWillMount(){
        console.log("hello from componentWillMount()");
    }
    render(){
        return (
            <h1>
                React Component !!
            </h1>
        )
    }
}