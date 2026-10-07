import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar" style={{
      width: "220px",
      background: "#2c415a",
      color: "white",
      padding: "20px",
      minHeight: "100vh"
    }
    }>
      <h2><Link to="/contact" style={linkStyle}>Contacts</Link></h2>
      <hr style={{ borderColor: "#2c3e50" }} />

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><Link to="/" style={linkStyle}>Dashboard</Link></li>
        <li><Link to="/contacts" style={linkStyle}>Liste Contacts</Link></li>
        <li><Link to="/contacts/add" style={linkStyle}>Ajouter Contact</Link></li>
        <li><Link to="/settings" style={linkStyle}>Paramètres</Link></li>
      </ul>
    </div>
  );
}

const linkStyle = {
  display: "block",
  color: "white",
  padding: "10px 0",
  textDecoration: "none"
};

export default Sidebar;