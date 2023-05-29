import Layout from "@/components/Layout";
import axios from "axios";
import { useState } from "react";
import { withSwal } from "react-sweetalert2";

const AdminsPage = ({ swal }) => {
  const [email, setEmail] = useState("");
  const addAdmin = (ev) => {
    ev.preventDefault();
    axios.post("/api/admins", { email }).then((res) => {
      console.log(res.data);
      swal.fire({
        title: "Admin created",
        icon: "success",
      });
      setEmail("");
    });
  };
  return (
    <Layout>
      <h1>Admins Page</h1>
      <h2>Add new admin</h2>
      <form onSubmit={addAdmin}>
        <div className="flex gap-2">
          <input
            type="text"
            className="mb-0"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            placeholder="google email"
          />
          <button type="submit" className="btn-primary py-1 whitespace-nowrap">
            Add admin
          </button>
        </div>
      </form>
      <h2>Existing admins</h2>
      <table className="basic">
        <thead>
          <tr>
            <th className="text-left">Admin google email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>test@gmail.com</td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
};

export default withSwal(({ swal }, ref) => <AdminsPage swal={swal} />);
