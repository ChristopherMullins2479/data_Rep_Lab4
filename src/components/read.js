import React from "react";
import { Movie } from "./movie";
import axios from "axios";

//header class , exported
export class Read extends React.Component{

    //calls api
    componentDidMount(){
            //console.log("Active")
            axios.get('https://jsonblob.com/api/jsonblob/894944504570986496')
            .then((response)=>{
                this.setState({movies: response.data.movies})
            })
            .catch((error)=>{
                console.log(error);
            });
    }

    //sets movies state
    state = {
        movies: []
    }

    
    render(){
        return(
            <div>
                <h1>This is a Read Component</h1>
                <Movie movies = {this.state.movies}></Movie>
            </div>
        );
    }
}