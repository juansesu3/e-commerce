import Layout from "@/components/Layout";
import Spinner from "@/components/Spinner";
import axios from "axios";
import { useEffect, useState } from "react";

const SettingsPage = () => {
  const [products, setProducts] = useState([]);
  const [featuredProductId, setFeaturedProductId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios.get("/api/products").then((res) => {
      setProducts(res.data);
      setIsLoading(false);
    });
    axios.get("/api/settings?name=featureProductId").then((res) => {
      setFeaturedProductId(res.data.value);
    });
  }, []);

  const saveSettings = async () => {
    await axios.put("/api/settings", {
      name: "featureProductId",
      value: featuredProductId,
    });
  };

  return (
    <Layout>
      <h1>Settings</h1>
      {isLoading && <Spinner />}
      {!isLoading && (
        <>
          <label>Featured product</label>
          <select value={featuredProductId} onChange={(ev) => setFeaturedProductId(ev.target.value)}>
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
export default SettingsPage;
