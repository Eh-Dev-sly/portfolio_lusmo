const res = await fetch("http://localhost:1338/api/spotify/get-token");
const data = await res.json();
console.log(data.access_token);