import React from "react";
import "../assets/css/login.css"

function Login(){
    return(
        <section class="text-center">
          <div class="p-5 bg-image bgimage"></div>
        
          <div class="card mx-4 mx-md-5 shadow-5-strong card1">
            <div class="card-body py-5 px-md-5 cardstyle">
        
              <div class="row d-flex justify-content-center">
                <div class="col-lg-8">
                  <h2 class="fw-bold mb-5">Sign up now</h2>
                  <form>
                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="form3Example1">First name</label>
                          <input type="text" id="form3Example1" class="form-control" />
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="form3Example2">Last name</label>
                          <input type="text" id="form3Example2" class="form-control" />
                        </div>
                      </div>
                    </div>
        
                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example3">Email address</label>
                      <input type="email" id="form3Example3" class="form-control" />
                    </div>
        
                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example4">Password</label>
                      <input type="password" id="form3Example4" class="form-control" />
                    </div>
        
                    <div class="form-check d-flex justify-content-center mb-4">
                      <label class="form-check-label" for="form2Example33">
                        Subscribe to our newsletter
                      </label>
                      <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                    </div>
        
                    <button type="submit" class="btn btn-dark btn-block mb-4">
                      Sign up
                    </button>
        
                    <div class="text-center">
                      <p>or sign up with:</p>
                      <button type="button" class="btn btn-link btn-floating mx-1">
                        <i class="fab fa-facebook-f"></i>
                      </button>
        
                      <button type="button" class="btn btn-link btn-floating mx-1">
                        <i class="fab fa-google"></i>
                      </button>
        
                      <button type="button" class="btn btn-link btn-floating mx-1">
                        <i class="fab fa-twitter"></i>
                      </button>
        
                      <button type="button" class="btn btn-link btn-floating mx-1">
                        <i class="fab fa-github"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}

export default Login;