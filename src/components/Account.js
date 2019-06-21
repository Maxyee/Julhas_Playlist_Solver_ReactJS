import React, { Component } from 'react';

class Account extends Component {
    render() {

        const textAlign = {
            textAlign: 'center',
        };

        const padding = {
            padding: '1rem 2rem',
        }


        return (
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
                                    <a class="dropdown-item">Music</a>
                                    <a class="dropdown-item">Movies</a>
                                    <a class="dropdown-item">Sports</a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link">Add Videos</a>
                            </li>

                            <li class="nav-item">
                                <button class="btn btn-primary"><a class="nav-link">Logout</a></button>
                            </li>
                        </ul>
                    </div>

                    <div class="media">
                        <img src="..." class="mr-3" alt="..." />
                        <div class="media-body">
                            <h5 class="mt-0">Account Holder Name</h5>
                            <h5 class="mt-0">Account Holder Email</h5>

                            <p>Total Videos : 101 </p>
                            <p>Categories : Music, Sports, Movies</p>
                        </div>
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

export default Account;