import React from "react";
// import { signupJs } from "./SignupJs";

const SignupForm = () => {
  // const handleSignup = async () => {
  //   const randomEmail = Math.random().toString(36).substring(7);
  //   const response = await fetch(
  //     `${process.env.REACT_APP_API_URL}/auth/signup`,
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email: `${randomEmail}@gmail.com`,
  //         password: "password",
  //       }),
  //     }
  //   );
  //   const data = await response.json();
  //};

  return (
    <div class="wrapper">
      <div class="container main">
        <div class="row">
          <div class="col-md-6 side-image">
            <div class="text">
              <p>
                Rejoindre la communauté <i>- MonBonVoisinage</i>
              </p>
            </div>
          </div>
          <div class="col-md-6 right">
            <div class="input-box">
              <div class="hearder-content">
                <h3>Inscription</h3>
                <ul>
                  <li class="active form_1_progessbar">
                    <div>
                      <p>1</p>
                    </div>
                  </li>
                  <li class="form_2_progessbar">
                    <div>
                      <p>2</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="form_wrap">
                <div class="form_1 data_info">
                  <h2>Identité</h2>
                  <form>
                    <div class="form_container">
                      <div class="input-field">
                        <input
                          type="text"
                          class="input"
                          id="username"
                          required
                        />
                        <label for="username">Nom</label>
                      </div>
                      <div class="input-field">
                        <input
                          type="text"
                          class="input"
                          id="username"
                          required
                        />
                        <label for="username">Prenom</label>
                      </div>
                    </div>
                  </form>
                </div>

                <div class="form_2 data_info style">
                  <h2>Identifiant</h2>
                  <form>
                    <div class="form_container">
                      <div class="input-field">
                        <input type="text" class="input" id="email" required />
                        <label for="email">Email</label>
                      </div>
                      <div class="input-field">
                        <input
                          type="text"
                          class="input"
                          id="password"
                          required
                        />
                        <label for="password">Password</label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div class="btns_wrap">
                <div class="common_btns form_1_btns">
                  <button type="button" class="btn_next">
                    Next
                  </button>
                </div>
                <div class="common_btns form_2_btns style">
                  <button type="button" class="btn_back">
                    Back
                  </button>
                  <button type="button" class="btn_done">
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
