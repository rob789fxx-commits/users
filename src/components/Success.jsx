import React from "react";

export const Success = ({ count }) => {
  return (
    <div class="success-block">
      <img src={`${process.env.PUBLIC_URL}/assets/success.svg`} alt="Success" />
      <h3>Success!</h3>
      <p>Invitations have been sent to all {count} users.</p>
      <button
        onClick={() => window.location.reload()}
        className="send-invite-btn"
      >
        Back
      </button>
    </div>
  );
};
