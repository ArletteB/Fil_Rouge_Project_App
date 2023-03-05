import React from "react";

const SignupForm = () => {
  const handleSignup = async () => {
    const randomEmail = Math.random().toString(36).substring(7);
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/auth/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: `${randomEmail}@gmail.com`,
          password: "password",
        }),
      }
    );
    const data = await response.json();
  };

  return (
    <form>
      <h1>Créer un compte</h1>
      <div className="social-media"></div>
    </form>
  );
};

export default SignupForm;
