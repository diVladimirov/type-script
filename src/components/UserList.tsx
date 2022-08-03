import React, { FC } from "react";
import { IUser } from "../types/types";

interface IUserListProps {
  users: IUser[];
}

const UserList: FC<IUserListProps> = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <div key={user.id} style={{ padding: 15, border: "1px solid gray" }}>
          {user.id}. {user.name} live in city {user.address.city} on the street{" "}
          {user.address.street}
        </div>
      ))}
    </div>
  );
};

export default UserList;
