import { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";

function ContactsList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = () => {
    API.get("/contacts").then(res => setContacts(res.data));
  };

  const deleteContact = (id) => {
    API.delete(`/contacts/${id}`).then(fetchContacts);
  };

  return (
    <div style={box}>
      <h2>Liste des Contacts</h2>

      <div className="card table-container">

      <table width="100%">
        <thead>
          <tr>
            <th>Nom</th>
            <th>CIN</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Date</th>
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map(c => (
            <tr key={c.id}>
              <td>{c.nom}</td>
              <td>{c.cin}</td>
              <td>{c.email}</td>
              <td>{c.telephone}</td>
              <td>{c.date_naissance}</td>
              <td>{c.statut ? "Actif" : "Inactif"}</td>

              <td className="actions">
                <a><Link to={`/contacts/${c.id}`}>Afficher</Link> </a>
                <a><Link to={`/contacts/edit/${c.id}`}> Modifier</Link> </a>
                <button onClick={() => deleteContact(c.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

const box = {
  background: "white",
  padding: "20px",
  borderRadius: "10px"
};

export default ContactsList;