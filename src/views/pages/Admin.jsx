import React from "react";
import "./css/Admin.css";
import NavAdmin from "../../components/layouts/NavAdmin";

const Admin = () => {
    return (
        <div>
            <NavAdmin />
            <section className="admin-page">
                <h1>Admin</h1>
            </section>
        </div>
    )
}

export default Admin;