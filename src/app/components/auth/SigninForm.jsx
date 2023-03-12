import { useEffect, useState } from "react";

const SignInForm = () => {
  const [credentials, setCredentials] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
              <header>Se Connecter</header>
              <div class="input-field">
                <input
                  type="text"
                  class="input"
                  id="email"
                  required
                  autocomplete="off"
                  name="email"
                  onChange={handleChange}
                />
                <label for="email">Email</label>
              </div>
              <div class="input-field">
                <input
                  type="password"
                  class="input"
                  id="password"
                  required
                  name="password"
                  onChange={handleChange}
                />
                <label for="password">Password</label>
              </div>
              <div class="input-field">
                <input
                  type="submit"
                  class="submit"
                  value="S'identifier"
                ></input>
              </div>
              <div class="signin"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
