import React from "react";
import Card, { CardVariant } from "./components/Card";
import UserList from "./components/UserList";
import { IUser } from "./types/types";

const App = () => {
  const users: IUser[] = [
    {
      id: 1,
      name: "One",
      email: "one@gmail.com",
      address: { city: "London", street: "One Avenue", zipcode: "25623" },
    },
    {
      id: 2,
      name: "Two",
      email: "two@gmail.com",
      address: { city: "Paris", street: "Two Avenue", zipcode: "657856" },
    },
  ];
  return (
    <div>
      <Card
        onClick={(num) => console.log("click", num)}
        variant={CardVariant.outlined}
        width="200px"
        height="200px"
      >
        <button>Button</button>
      </Card>
      <UserList users={users} />
    </div>
  );
};

export default App;
