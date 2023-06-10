import { useState, createContext, useContext }  from "react";

export enum Cargo {
    Cliente,
    Administrador
}

export interface AuthContext {
    usuario: string;
    cargo: Cargo;
}

interface AuthContextType {
    authContext: AuthContext,
    setAuthContext: (authContext: AuthContext | undefined) => void,
}

const CONTEXT_KEY = "authContext"
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthContextProvider(props: any) {
    const [authContext, setAuthContext] = useState<AuthContext | undefined>(() => {
        const stored = window.localStorage.getItem(CONTEXT_KEY)

        if (stored && stored !== 'undefined') {
            return JSON.parse(stored);
        }
    });

    const setLocalStorage = (authContext: AuthContext | undefined) => {
        window.localStorage.setItem(CONTEXT_KEY, JSON.stringify(authContext))
        setAuthContext(authContext);
    }

    return <AuthContext.Provider value={{authContext, setAuthContext: setLocalStorage}} {...props} />;
}

export function useAuthContext() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error(`useAuthContext must be used within a AuthContextProvider`);
    }
    return context;
}
