import React, { useContext } from 'react'
import '../style/signIn.css'
import {NavLink} from 'react-router-dom'
import { UserContext } from 'context/user'
export const SignIn = () => {
    const {changeUserId} = useContext(UserContext);
    const onSubmit = async(e)=>{
        e.preventDefault();
        await changeUserId('test');
    }
    return (
        <div className='container-principal'>
            <div className="container">
                <div className="d-flex justify-content-center h-100">
                    <div className="card card-sign">
                        <div className="card-header card-sign">
                            <h3>Connexion</h3>
                            
                        </div>
                        <div className="card-body card-sign">
                            <form onSubmit={onSubmit}>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" className="form-control input-sign" placeholder="Email" />

                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    <input type="password" className="form-control" placeholder="Mot de passe" />
                                </div>
                                <div className="row align-items-center remember">
                                    <input type="checkbox" />Souviens de moi
                                </div>
                                <div className="form-group">
                                    <NavLink to='/admin/dashboard'>
                                    <input type="submit" value="Login" className="btn float-right login_btn" />
                                    </NavLink>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer card-sign">
                            <div className="d-flex justify-content-center links">
                                Vous n'avez pas encore un compte?<a href="/signup">Inscription</a>
                            </div>
                            <div className="d-flex justify-content-center">
                                <a href="#">Mot de passe oublié?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}