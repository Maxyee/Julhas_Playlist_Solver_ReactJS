import React, { Component } from 'react';

class Register extends Component {

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

                        <form>

                            <div class="form-group">
                                <label for="username">User Name</label>
                                <input type="text" class="form-control" name="username" required />
                                <div class="invalid-feedback">
                                    <div>User Name is required</div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="text" class="form-control" name="email" required email />
                                <div class="invalid-feedback">
                                    <div >Email is required</div>
                                    <div>Email must be a valid email address</div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="password1">Password</label>
                                <input type="password1" class="form-control" name="password1" required minlength="6" />
                                <div class="invalid-feedback">
                                    <div>Password is required</div>
                                    <div> Password must be at least 6 characters</div >
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="password2">Confirm Password</label>
                                <input type="password2" class="form-control" name="password2" required />
                                <div class="invalid-feedback">
                                    <div>Confirm Password is required</div>
                                    <div> Passwords must match</div>
                                </div>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary">Register</button>
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

export default Register;
