import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

interface AppState {
    cart: CartItem[];
    // Dining Context
    diningMode: 'delivery' | 'dine-in';
    tableId: string | null;
    hallId: string | null;

    // Actions
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string) => void;
    setDiningContext: (table: string, hall: string) => void;
    resetContext: () => void;
}

export const useAppStore = create<AppState>()(
    persist(
        (set) => ({
            cart: [],
            diningMode: 'delivery',
            tableId: null,
            hallId: null,

            addToCart: (item) => set((state) => {
                const existing = state.cart.find((i) => i.id === item.id);
                if (existing) {
                    return {
                        cart: state.cart.map((i) =>
                            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                        )
                    };
                }
                return { cart: [...state.cart, { ...item, quantity: 1 }] };
            }),

            removeFromCart: (id) => set((state) => ({
                cart: state.cart.filter((i) => i.id !== id)
            })),

            setDiningContext: (table, hall) => set({
                diningMode: 'dine-in',
                tableId: table,
                hallId: hall
            }),

            resetContext: () => set({
                diningMode: 'delivery',
                tableId: null,
                hallId: null
            }),
        }),
        { name: 'food-app-storage' } // Persist to localStorage
    )
);