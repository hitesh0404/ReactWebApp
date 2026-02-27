import { AppContext } from "./AppContext";
function AppProvider({ children }) {
  const user = "Rohit";

  return <AppContext.Provider value={user}>
    {children}
    </AppContext.Provider>;
}
export default AppProvider;