import { AuthProvider } from "./context/auth";
import "./global.css";
import { AppRouter } from "./routes";

export const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}


