import React from "react";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";

const HomePage = () => {
  return (
    <div>
      <Header />
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default HomePage;
