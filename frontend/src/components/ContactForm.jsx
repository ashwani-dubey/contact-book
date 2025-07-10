import React, { useState } from "react";

const ContactForm = () => {
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });

  const handleAdd = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const res = await fetch("http://localhost:5050/other/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(contact),
    });

    if (res.ok) {
      setContact({ name: "", email: "", phone: "" });
      window.location.reload(); // quick refresh, or lift state if needed
    } else {
      const data = await res.json();
      alert(data.message || "Failed to add contact");
    }
  };

  return (
    <form onSubmit={handleAdd}>
      <h2>Add Contact</h2>
      <input
        type="text"
        placeholder="Name"
        value={contact.name}
        onChange={(e) => setContact({ ...contact, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={contact.email}
        onChange={(e) => setContact({ ...contact, email: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Phone"
        value={contact.phone}
        onChange={(e) => setContact({ ...contact, phone: e.target.value })}
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
