import Layout from "@/components/Layout";
import Spinner from "@/components/Spinner";
import axios from "axios";
import { useEffect, useState } from "react";
import { withSwal } from "react-sweetalert2";

const SettingsPage = ({ swal }) => {
  const [products, setProducts] = useState([]);
  const [featuredProductId, setFeaturedProductId] = useState("");
  const [productsLoading, setProductsLoading] = useState(false);
  const [featuredLoading, setFeaturedLoading] = useState(false);

  useEffect(() => {
    setProductsLoading(true);

    axios.get("/api/products").then((res) => {
      setProducts(res.data);
      setProductsLoading(false);
    });
    setFeaturedLoading(true);
    axios.get("/api/settings?name=featureProductId").then((res) => {
      setFeaturedProductId(res.data?.value);
      setFeaturedLoading(false);
    });
  }, []);

  const saveSettings = async () => {
    await axios
      .put("/api/settings", {
        name: "featureProductId",
        value: featuredProductId,
      })
      .then(() => {
        swal.fire({
          title: "Settings saved!",
          icon: "success",
        });
      });
  };

  return (
    <Layout>
      <h1>Settings</h1>
      {(productsLoading || featuredLoading) && <Spinner />}
      {!productsLoading && !featuredLoading && (
        <>
          <label>Featured product</label>
          <select
            value={featuredProductId}
            onChange={(ev) => setFeaturedProductId(ev.target.value)}
          >
            {products.length > 0 &&
              products.map((product) => (
                <option key={product._id} value={product._id}>
                  {product.title}
                </option>
              ))}
          </select>
          <div>
            <button onClick={saveSettings} className="btn-primary">
              Save settings
            </button>
          </div>
        </>
      )}
    </Layout>
  );
};
export default withSwal(({ swal }) => <SettingsPage swal={swal} />);
