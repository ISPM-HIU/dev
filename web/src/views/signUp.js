import React from "react";
import "../style/signUp.css"

function SignUp() {
  return (
    <div className='container-signUp'>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form action="" className="Signup">
              <h3>Inscription</h3>
              <div className="form-group">
                <label for="name">Votre nom</label>
                <input type="text" className="form-control" placeholder="Nom complet" name="name" required />
              </div>
              <div className="form-group">
                <label for="email">Email</label>
                <input type="text" className="form-control" placeholder="Email" name="email" required />
              </div>
              <div className="form-group">
                <label for="psw">Mot de passe</label>
                <input type="password" className="form-control" placeholder="Mot de passe" name="psw" required />
              </div>
              <div className="form-group">
                <label for="psw-repeat">Confirmez votre mot de passe</label>
                <input type="password" className="form-control" placeholder="Confirmation mot de passe" name="psw-repeat" required />
              </div>
              <div className="form-group">
                <label className="term-policy"><input type="checkbox" /> En créant une compte vous acceptez notre <a href="#">Conditions et confidentialité</a>.</label>
              </div>
              <button type="submit" className="btn btn-success">S'inscrire</button>
              <label><input type="checkbox" checked="checked" name="remember" /> Souviens de moi!</label>
              <br />
              <div className="form-group">
                <p className="not-yet">Vous avez déja un compte? <a href="/signin">Connexion</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ div>

  );
}

export default SignUp;