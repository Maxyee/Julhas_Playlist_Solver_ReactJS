import React, { Component } from 'react';

class Login extends Component {
    render() {

        const textAlign = {
            textAlign:'center',
        };

        const padding = {
            padding: '1rem 2rem',
        }

        const background = {
            backgroundColor:'#f8f9fa',
        }

        return (
            <div>
                <div class="container">
                    <div class="jumbotron" style={padding}>
                        <h1 style={textAlign}>Julhas Playlist Solver</h1>
                    </div>
                    <div style={background}>
                        <div class="alert alert-dark" role="alert">
                            <ul class="nav justify-content-end">
                                <li class="nav-item">
                                    <a class="nav-link active">Login</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link">Register</a>
                                </li>
                            </ul>
                        </div>
                        <div class="red-text center error-message">
                            <i class="material-icons">error</i> Incorrect username or password
                                </div>

                        <form autocomplete="off">

                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Username</label>
                                <input name="username" class="form-control" />
                            </div>

                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Password</label>
                                <input type="password" name="password" class="form-control" />
                            </div>


                            <div class="form-group row">
                                <div class="col-sm-10">
                                    <button type="submit" class="btn btn-primary">Login</button>
                                </div>
                            </div>
                        </form>
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

export default Login