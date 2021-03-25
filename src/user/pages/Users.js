import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "adel",
      image:
        "https://images.unsplash.com/photo-1612831660163-448ac8b3c13c?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80",
      places: 3
    }
  ];
  return <UsersList items={USERS} />;
};

export default Users;
