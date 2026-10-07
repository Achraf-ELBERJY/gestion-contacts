function Settings() {
  return (
    <div style={{ background: "white", padding: "20px", borderRadius: "10px" }} className="card">
      <h2>Paramètres</h2>
      <form className="form">
         <div className="form-row">
        <input type="text" name="admin_name" placeholder="Nom Admin..." className="input" />
        </div>
        <button className="btn">Sauvegarder</button>
      </form>
    </div>
  );
}

export default Settings;