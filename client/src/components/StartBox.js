import React from "react";

const StartBox = () => {
  return (
    <form className="d-flex">
      <button
        className="form-control"
        type="button"
        value="Log In"
        title="Log In"
      />
      <button
        className="form-control"
        type="button"
        value="Sign In"
        title="Sign In"
      />
    </form>
  );
};

export default StartBox;
