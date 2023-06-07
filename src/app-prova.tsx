import React, { Component } from "react";
import { StyleSheet } from "react-native";

interface Props{
    titulo:string;
    
}

interface State{
   

}

export default class classComponent extends Component<Props, State>{
    constructor(props:Props){
        super(props);

        this.state = {titulo:'App Imagem'};
    }

    render() {
        return(
        
        );
        
    }
}
