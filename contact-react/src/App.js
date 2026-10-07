import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./styles.css";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import ContactsList from "./pages/ContactsList";
import AddContact from "./pages/AddContact";
import EditContact from "./pages/EditContact";
import ShowContact from "./pages/ShowContact";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ flex: 1, padding: "30px", background: "#f5f7fa", minHeight: "100vh" }}>
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/contacts" element={<ContactsList />} />
            <Route path="/contacts/add" element={<AddContact />} />
            <Route path="/contacts/edit/:id" element={<EditContact />} />
            <Route path="/contacts/:id" element={<ShowContact />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;