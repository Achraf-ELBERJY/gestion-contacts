import { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    API.get("/contacts").then(res => setContacts(res.data));
  }, []);

  const total = contacts.length;
  const actifs = contacts.filter(c => c.statut === 1).length;
  const inactifs = contacts.filter(c => c.statut === 0).length;

  return (
    <div>
      <h1>Gestion des Contacts</h1>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <Card title="Total Contacts" value={total} />
        <Card title="Actifs" value={actifs} color="green" />
        <Card title="Inactifs" value={inactifs} color="red" />
      </div>
    </div>
  );
}

function Card({ title, value, color }) {
  return (
    <div style={{
      flex: 1,
      background: "rgb(202, 221, 224)",
      padding: "170px",
      borderRadius: "10px",
      textAlign: "center"
    }}>
      <h2 style={{ color }}>{value}</h2>
      <p>{title}</p>
    </div>
  );
}

export default Dashboard;