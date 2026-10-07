import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function AddContact() {
  const [form, setForm] = useState({
  nom: "",
  prenom: "",
  cin: "",
  email: "",
  telephone: "",
  date_naissance: "",
  notes: "",
  statut: 1
});

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    API.post("/contacts", form).then(() => navigate("/contacts"));
  };

  return (
    <div style={box}>
      <h2>Ajouter un Contact</h2>

      <form onSubmit={handleSubmit} className="form">
        <div>
        <input name="nom" placeholder="Nom" onChange={handleChange} width="100px" height="30px" /><br/>
        <br/>
        <input name="prenom" placeholder="Prénom" onChange={handleChange} /><br/>
        <br/>
        <input name="cin" placeholder="CIN" onChange={handleChange} /><br/>
        <br/>
        <input name="email" placeholder="Email" onChange={handleChange} /><br/>
        <br/>
        <input name="telephone" placeholder="Téléphone" onChange={handleChange} /><br/>
        <br/>
        <input type="date" name="date_naissance" className="" onChange={handleChange}/><br/>
        <br/>
        <textarea name="notes" placeholder="Notes" onChange={handleChange} /><br/>
            <br/>
            </div>
        <button className="btn">Enregistrer</button>
      </form>
    </div>
  );
}

const box = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",

};

export default AddContact;