import { useStore } from "zustand";
import { profileStore } from "./store/profile";

function App() {
  const { user } = useStore(profileStore);

  return (
    <pre>
      <code>{JSON.stringify(user, null, 2)}</code>
    </pre>
  );
}

export default App;
