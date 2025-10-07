import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { UserCard } from "./components/UserCard";
import { Footer } from "./components/Footer";
import users from "./data.json";

function App() {
  return (
    <div className="app-root">
      <div className="left-decor" />
      <div className="content">
        <Header />
        <main className="cards-area">
          {users.map((u) => (
            <UserCard
              key={u.id}
              first_name={u.first_name}
              last_name={u.last_name}
              email={u.email}
              avatar={u.avatar}
            />
          ))}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
