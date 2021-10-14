import React from "react";
import { MovieItem } from "./movieItem";

//header class , exported
export class Movie extends React.Component{
    render(){
        return this.props.movies.map((movie)=>{
            return<MovieItem movie = {movie}></MovieItem>
        })
    }
}