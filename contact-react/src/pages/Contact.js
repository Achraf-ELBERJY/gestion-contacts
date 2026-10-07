import { useEffect, useState } from "react";
import API from "../services/api";

function Contact() {
  const [contacts, setContacts] = useState([]);

  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    cin: "",
    email: "",
    telephone: "",
    date_naissance: "",
    notes: ""
  });

  // charger contacts
  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = () => {
    API.get("/contacts")
      .then(res => setContacts(res.data))
      .catch(err => console.log(err));
  };

  //  formulaire
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    API.post("/contacts", form)
      .then(() => {
        fetchContacts();
        setForm({
          nom: "", prenom: "", cin: "", email: "",
          telephone: "", date_naissance: "", notes: ""
        });
      });
  };

  //  supprimer
  const deleteContact = (id) => {
    API.delete(`/contacts/${id}`)
      .then(fetchContacts);
  };

  //  stats
  const total = contacts.length;
  const actifs = contacts.filter(c => c.statut === 1).length;
  const inactifs = contacts.filter(c => c.statut === 0).length;

  return (
    <div>

      <h1>Gestion des Contacts</h1>

      {/* DASHBOARD */}
      <div className="stats">
        <div className="card stat-card">
          <h2>{total}</h2>
          <p>Total Contacts</p>
        </div>

        <div className="card stat-card">
          <h2 className="green">{actifs}</h2>
          <p>Actifs</p>
        </div>

        <div className="card stat-card">
          <h2 className="red">{inactifs}</h2>
          <p>Inactifs</p>
        </div>
      </div>

      {/* FORMULAIRE */}
      <div className="card">
        <h2>Ajouter un Contact</h2>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input name="nom" value={form.nom} placeholder="Nom" onChange={handleChange}/>
            <input name="prenom" value={form.prenom} placeholder="Prénom" onChange={handleChange}/>
            <input name="cin" value={form.cin} placeholder="CIN" onChange={handleChange}/>
            <input name="email" value={form.email} placeholder="Email" onChange={handleChange}/>
            <input name="telephone" value={form.telephone} placeholder="Téléphone" onChange={handleChange}/>
          </div>

          <div className="form-row">
            <input type="date" name="date_naissance" value={form.date_naissance} onChange={handleChange}/>
            <textarea name="notes" value={form.notes} placeholder="Notes..." onChange={handleChange}/>
          </div>

          <button className="btn">Enregistrer</button>
        </form>
      </div>

      {/* TABLEAU */}
      <div className="card table-container">
        <table>
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
            {contacts.length === 0 ? (
              <tr>
                <td colSpan="7" style={{ textAlign: "center" }}>
                  Aucun contact enregistré.
                </td>
              </tr>
            ) : (
              contacts.map(c => (
                <tr key={c.id}>
                  <td>{c.nom}</td>
                  <td>{c.cin}</td>
                  <td>{c.email}</td>
                  <td>{c.telephone}</td>
                  <td>{c.date_naissance}</td>
                  <td>{c.statut ? "Actif" : "Inactif"}</td>

                  <td className="actions">
                    <a href={`/contacts/${c.id}`}>Afficher</a>
                    <a href={`/contacts/edit/${c.id}`}>Modifier</a>
                    <button onClick={() => deleteContact(c.id)}>Supprimer</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Contact;