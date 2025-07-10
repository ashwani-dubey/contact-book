import React, { useEffect, useState } from "react";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    // Fetch all contacts from the backend
    const fetchContacts = async () => {
      const res = await fetch("http://localhost:5050/other/searchAll", {
        headers: {
          Authorization: `Bearer ${token}`, // Include token in the Authorization header
        },
      });

      if (res.ok) {
        const data = await res.json();
        setContacts(data); // Set contacts from the response
      } else {
        alert("Failed to load contacts");
      }
    };

    fetchContacts();
  }, [token]);

  // Function to handle contact deletion
  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:5050/other/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`, // Include token in the Authorization header
      },
    });

    if (res.ok) {
      setContacts(contacts.filter((contact) => contact._id !== id)); // Remove contact from list after deletion
    } else {
      alert("Failed to delete contact");
    }
  };

  // Filter contacts based on search input and sort them alphabetically
  const filteredContacts = contacts
    .filter((contact) =>
      `${contact.name} ${contact.email}`.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name)); // Alphabetically sort by name

  return (
    <div className="contact-list-container" style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="Search contacts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          borderRadius: "4px",
          border: "1px solid #ddd",
        }}
      />
      {/* Display contacts list */}
      {filteredContacts.length === 0 ? (
        <p>No contacts found</p>
      ) : (
        filteredContacts.map((contact) => (
          <div
            key={contact._id}
            style={{
              marginBottom: "15px",
              background: "#fff",
              padding: "15px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "5px",
            }}
          >
            <div style={{ fontSize: "18px", fontWeight: "bold" }}>{contact.name}</div>
            <div>{contact.email}</div>
            <div>{contact.phone}</div>
            <button
              onClick={() => handleDelete(contact._id)}
              style={{
                marginTop: "10px",
                padding: "8px 12px",
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default ContactList;
