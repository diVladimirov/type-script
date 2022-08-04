import React, { FC, useState, useEffect } from "react";
import { IUser } from "../types/types";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

interface IUserItemPage {
  id: number;
}

const UserItemsPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await axios.get<IUser>(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser();
  }, [id]);

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div>
      <button onClick={handleBackClick}>Back</button>
      <h1>{user?.name}</h1>
      <div>{user?.email}</div>
      <div>
        {user?.address.city} {user?.address.street} {user?.address.zipcode}
      </div>
    </div>
  );
};

export default UserItemsPage;
