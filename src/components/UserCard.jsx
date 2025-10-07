import React from "react";

export const UserCard = (props) => {
  const first = props.first_name || "";
  const last = props.last_name || "";
  const fullName = (first || last) ? `${first} ${last}`.trim() : (props.name || "");
  const email = props.email || "";

  return (
    <div className="user-card">
      <img src={props.avatar} alt={fullName || email} className="avatar-img" />
      <div className="user-info">
        <div className="user-name">{fullName}</div>
        <div className="user-email">{email}</div>
      </div>
    </div>
  );
};
