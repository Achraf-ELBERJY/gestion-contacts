import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";

function EditContact() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({});

  useEffect(() => {
    API.get(`/contacts/${id}`).then(res => setForm(res.data));
  }, [id]);

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    API.put(`/contacts/${id}`, form).then(() => navigate("/contacts"));
  };

  return (
    <div style={box}>
      <h2>Modifier Contact</h2>

      <form onSubmit={handleSubmit} className="form">
        <input name="nom" value={form.nom || ""} onChange={handleChange} /><br/>
        <br/>
        <input name="prenom" value={form.prenom || ""} onChange={handleChange} /><br/>
        <br/>
        <input name="email" value={form.email || ""} onChange={handleChange} /><br/>    
        <br/>
        <input name="cin" value={form.cin || ""} onChange={handleChange} /><br/>
        <br/>
        <input name="telephone" value={form.telephone || ""} onChange={handleChange} /><br/>
        <br/>
        <input type="date" name="date_naissance" value={form.date_naissance || ""} onChange={handleChange}/><br/>
        <br/>
        <textarea name="notes" value={form.notes || ""} onChange={handleChange} /><br/>
        <br/>
        <button className="btn">Mettre à jour</button>
      </form>
    </div>
  );
}

const box = { background: "white", padding: "20px", borderRadius: "10px" };

export default EditContact;