import { createContext } from 'react';

// Solo exportamos el contexto (no componentes) para que Fast Refresh funcione correctamente
export const CartContext = createContext(null);
