import { useEffect, useState } from "react";

const ServerStatus = () => {
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json())
      .then((data) => setStatus(data));
  }, []);

  return (
    <div>
      <h1 className="text-lg">Server Status</h1>
      <p className="text-lg text-emerald-600">{status}</p>
    </div>
  );
};

export default ServerStatus;
