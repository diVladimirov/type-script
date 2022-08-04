import React, { FC } from "react";
import { IUser } from "../types/types";

interface IUserItemProps {
  user: IUser;
}

const UserItem: FC<IUserItemProps> = ({ user }) => {
  return (
    <div style={{ padding: 15, border: "1px solid gray" }}>
      {user.id}. {user.name} live in city {user.address.city} on the street{" "}
      {user.address.street}
    </div>
  );
};

export default UserItem;
