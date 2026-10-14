import {
  createContext,
  useCallback,
  useMemo,
  useState,
} from "react";

export const AuthContext = createContext(null);

const STORAGE_KEY = "vision-assist-auth";

export function AuthProvider({ children }) {

  const [user, setUser] = useState(() => {

    const savedUser =
      localStorage.getItem(STORAGE_KEY);

    return savedUser
      ? JSON.parse(savedUser)
      : null;
  });

  const login = useCallback(
    (email, password) => {

      if (
        email === "aluno@fiap.com" &&
        password === "fiap123"
      ) {

        const loggedUser = {
          email,
          name: "Aluno FIAP",
        };

        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(loggedUser)
        );

        setUser(loggedUser);

        return {
          success: true,
        };
      }

      return {
        success: false,
        message: "E-mail ou senha inválidos.",
      };
    },
    []
  );

  const logout = useCallback(() => {

    localStorage.removeItem(STORAGE_KEY);

    setUser(null);

  }, []);

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      login,
      logout,
    }),
    [user, login, logout]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}