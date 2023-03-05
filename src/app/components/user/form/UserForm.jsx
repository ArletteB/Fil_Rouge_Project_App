/* <span>
  Already have an account? <a href="#">Log in here</a>
</span>; */

const UserForm = () => {
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
                ></input>
                <label for="email">Email</label>
              </div>
              <div class="input-field">
                <input
                  type="password"
                  class="input"
                  id="password"
                  required
                ></input>
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

export default UserForm;
