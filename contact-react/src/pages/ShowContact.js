import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

function ShowContact() {
  const { id } = useParams();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    API.get(`/contacts/${id}`).then(res => setContact(res.data));
  }, [id]);

  if (!contact) return <p>Loading...</p>;

  return (
    <div style={box}>

      <div className="card">
  <h2>Détails du contact</h2>

  <table className="details-table">
    <tbody>
      <tr>
        <th>Nom</th>
        <td>{contact.nom}</td>
      </tr>

      <tr>
        <th>Email</th>
        <td>{contact.email}</td>
      </tr>

      <tr>
        <th>CIN</th>
        <td>{contact.cin}</td>
      </tr>

      <tr>
        <th>Téléphone</th>
        <td>{contact.telephone}</td>
      </tr>

      <tr>
        <th>Date de naissance</th>
        <td>{contact.date_naissance}</td>
      </tr>

      <tr>
        <th>Statut</th>
        <td>{contact.statut ? "Actif" : "Inactif"}</td>
      </tr>

      <tr>
        <th>Notes</th>
        <td>{contact.notes}</td>
      </tr>
    </tbody>
  </table>
</div>
         
            
    </div>
  );
}

const box = { background: "white", padding: "20px", borderRadius: "10px" };

export default ShowContact;