import { create } from "zustand";
import { FlightProp } from "@/components/destination/flightCard";

interface FavoritesStore {
  favorites: FlightProp[];
  addFavorite: (flight: FlightProp) => void;
  removeFavorite: (flight: FlightProp) => void;
  toggleFavorite: (flight: FlightProp) => void;
}

export const useFavoriteStore = create<FavoritesStore>((set, get) => ({
  favorites: [],

  addFavorite: (flight) =>
    set((state) => ({
      favorites: [...state.favorites, flight],
    })),

  removeFavorite: (flight) =>
    set((state) => ({
      favorites: state.favorites.filter((item) => item.id !== flight.id),
    })),

  toggleFavorite: (flight) => {
    const { favorites } = get();
    const exists = favorites.some((item) => item.id === flight.id);

    if (exists) {
      set({
        favorites: favorites.filter((item) => item.id !== flight.id),
      });
    } else {
      set({
        favorites: [...favorites, flight],
      });
    }
  },
}));
