import { StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";
import { CardProp, getCards } from "@/utils/cards";
import { useState, useEffect } from "react";
import { Colors } from "@/constants/theme";

export default function CardList() {
  const [cards, setCards] = useState<CardProp[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function handleCards() {
      setIsLoading(true);
      const response = await getCards();
      setCards(response || null);
      setIsLoading(false);
    }
    handleCards();
  }, []);

  function maskCardNumber(num: string) {
    const last4 = num.slice(-4);
    const masked = "*".repeat(num.length - 4) + last4;
    return masked;
  }

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.primary || "#007AFF"} />
        <Text style={styles.loadingText}>Loading cards...</Text>
      </View>
    );
  }

  if (!cards || cards.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No cards added yet</Text>
        <Text style={styles.emptySubText}>
          Tap the "Add Card" button below to get started
        </Text>
      </View>
    );
  }

  return (
    <View>
      <View>
        {cards?.map((card, index) => {
          const isVisa = card.card_number.startsWith("4");
          const imageSource = isVisa
            ? require("../../assets/images/visa.png")
            : require("../../assets/images/mastercard.png");
          return (
            <View key={index} style={styles.cardContainer}>
              <Image source={imageSource} style={styles.cardImage} />
              <Text>{maskCardNumber(card.card_number)}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    // marginBottom: 20,
    backgroundColor: "white",
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 25,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  cardImage: {
    width: 60,
    height: 40,
    resizeMode: "contain",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontFamily: "Poppins_400Regular",
    marginTop: 10,
    fontSize: 16,
    // color: Colors.text || "#000",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  emptyText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 20,
    // color: Colors.text || "#000",
    textAlign: "center",
    marginBottom: 10,
  },
  emptySubText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    // color: Colors.textSecondary || "#666",
    textAlign: "center",
  },
});