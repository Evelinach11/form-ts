import React from "react";
import { RootState } from "../store";
import { useSelector } from "react-redux";

const UserProfile: React.FC = () => {
  const usn = useSelector((state: RootState) => state.usn);

  return (
    <div>
      <h3>User Profile</h3>
      <p>Username: {usn}</p>
    </div>
  );
};

export default UserProfile;
