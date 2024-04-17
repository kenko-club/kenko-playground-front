// import { useState } from "react";
import "./App.css";
import { UsersList } from "./components/03-organisms/UsersList";

function App() {
  //   const [count, setCount] = useState(0);

  return (
    <>
      <h2 className="sm:px-6 lg:px-8 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        Admin panel
      </h2>
      <UsersList />
    </>
  );
}

export default App;
