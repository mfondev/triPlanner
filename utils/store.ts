import { create } from "zustand";
import { FlightProp } from "@/components/destination/flightCard";
import { sendFavoriteNotification } from "./notification";
import * as Notifications from "expo-notifications";

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


  toggleFavorite: async (flight) => {
    const { favorites } = get();
    const exists = favorites.some((item) => item.id === flight.id);

    if (exists) {
      set({
        favorites: favorites.filter((item) => item.id !== flight.id),
      });

      await Notifications.scheduleNotificationAsync({
        content: {
          title: "TriPlanner",
          body: "Trip removed from favorites",
          subtitle: "Trip removed",
        },
        trigger: {
          type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
          seconds: 1,
        },
      });
    } else {
      set({
        favorites: [...favorites, flight],
      });

      await sendFavoriteNotification(flight.arrival_location || "your trip");
    }
  },
}));
