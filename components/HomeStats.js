import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

const HomeStats = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get("/api/orders").then((res) => {
      setOrders(res.data);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    return (
      <div className="my-4">
        <Spinner fullWidth={true} />
      </div>
    );
  }

  return (
    <div className="">
      <h2>Orders</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="tile ">
          <h3 className="tile-header">Today</h3>
          <div className="tile-number">2</div>
          <div className="tile-desc">2 orders today</div>
        </div>
        <div className="tile">
          <h3 className="tile-header">This week</h3>
          <div className="tile-number">2</div>
          <div className="tile-desc">2 orders today</div>
        </div>
        <div className="tile">
          <h3 className="tile-hader">This month</h3>
          <div className="tile-number">2</div>
          <div className="tile-desc">2 orders today</div>
        </div>
      </div>
      <h2>Revenue</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="tile ">
          <h3 className="tile-header">Today</h3>
          <div className="tile-number">$20</div>
          <div className="tile-desc">2 orders today</div>
        </div>
        <div className="tile">
          <h3 className="tile-header">This week</h3>
          <div className="tile-number">$122</div>
          <div className="tile-desc">2 orders today</div>
        </div>
        <div className="tile">
          <h3 className="tile-hader">This month</h3>
          <div className="tile-number">$2563</div>
          <div className="tile-desc">2 orders today</div>
        </div>
      </div>
    </div>
  );
};
export default HomeStats;
