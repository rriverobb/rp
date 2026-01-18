import { useEffect, useState } from "react";

export default function DbTest() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/dbtest")
      .then((r) => r.json())
      .then(setData)
      .catch((e) => setData({ ok: false, error: String(e) }));
  }, []);

  return (
    <div style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>DB Test</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
