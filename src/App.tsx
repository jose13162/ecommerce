import cookies from "react-cookies";

function App() {
  const token = cookies.load("token");

  return <p style={{ wordWrap: "break-word" }}>{token ? token : "no token"}</p>;
}

export default App;
