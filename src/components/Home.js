import React, { Component } from 'react';

class Home extends Component{

    
    render(){

        const textAlign = {
            textAlign:'center',
        };

        const padding = {
            padding: '1rem 2rem',
        }

        const width = {
            width:'69.5rem',
        }
    
        return(
            <div>
                <div class="container">
                    <div class="jumbotron" style={padding}>
                        <h1 style={textAlign}>Julhas Playlist Solver</h1>
                    </div>
                        <div class="alert alert-dark" role="alert">
                            <ul class="nav justify-content-end">
                                <li class="nav-item">
                                <a class="nav-link active" routerLink="/home">Home</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" routerLink="/account">Account</a>
                                </li>
                                <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Categories
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" routerLink="/music">Music</a>
                                    <a class="dropdown-item" routerLink="/movies">Movies</a>
                                    <a class="dropdown-item" routerLink="/sports">Sports</a>
                                </div>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" routerLink="/addvideos">Add Videos</a>
                                </li>

                                <li class="nav-item">
                                <button class="btn btn-primary"><a class="nav-link">Logout</a></button>
                                </li>
                            </ul>
                        </div>

                        <div class="card text-center" style={width}>

                        <p class="card-text">Video ID Show Here</p>
                        <div class="card-body">
                            <h5 class="card-title">Video Title Show Here</h5>

                            <p class="card-text">Video Description Show Here</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Video Categories Show Here</li>
                            <li class="list-group-item">
                            

                            A Youtube Player Should Load Here.
                            </li>
                        </ul>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><button  type="button" class="btn btn-primary">Update Video</button></li>
                        </ul>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><button  type="button" class="btn btn-danger">Delete Video</button></li>
                        </ul>

                        </div>

                        <nav class="navbar navbar-light bg-light">
                        <span class="navbar-text justify-content-end">
                            Developed By Julhas
                        </span>
                        </nav>
                </div>
            </div>    
        )
    }
}

export default Home;