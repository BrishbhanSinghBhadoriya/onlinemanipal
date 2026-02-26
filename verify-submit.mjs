const payload = {
  fullName: "Test User",
  email: "test@example.com",
  mobile: "9999999999",
  course: "MBA",
  state: "Delhi",
};

async function run() {
  const res = await fetch("http://localhost:3000/api/inquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  console.log(JSON.stringify(data, null, 2));
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
