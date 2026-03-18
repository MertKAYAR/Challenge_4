import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useGame } from "../../context/GameContext";

const SHOP_ITEMS = {
  needs: [
    { id: "f1", name: "Hamburger", icon: "🍔", price: 20, type: "food" },
    { id: "f2", name: "Enerji İçeceği", icon: "⚡", price: 15, type: "food" },
  ],
  skins: [
    { id: "s1", name: "Kral Tacı", icon: "👑", price: 500, type: "skin" },
    { id: "s2", name: "Samuray", icon: "🥷", price: 300, type: "skin" },
    { id: "s3", name: "Robot", icon: "🤖", price: 250, type: "skin" },
  ],
};

export default function ShopScreen() {
  const { stats, buyItem } = useGame();

  const renderItem = (item: any) => (
    <TouchableOpacity
      key={item.id}
      style={styles.itemCard}
      onPress={() => buyItem(item.type, item.price, item.icon)}
    >
      <Text style={styles.itemEmoji}>{item.icon}</Text>
      <Text style={styles.itemName}>{item.name}</Text>
      <View style={styles.priceTag}>
        <Text style={styles.priceText}>💰 {item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Market</Text>
        <Text style={styles.goldBalance}>Bakiyen: 💰 {stats.gold}</Text>
      </View>

      <Text style={styles.sectionTitle}>🍎 İhtiyaçlar</Text>
      <View style={styles.grid}>{SHOP_ITEMS.needs.map(renderItem)}</View>

      <Text style={styles.sectionTitle}>✨ Kostümler</Text>
      <View style={styles.grid}>{SHOP_ITEMS.skins.map(renderItem)}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0F172A", padding: 20 },
  header: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: { color: "#FFF", fontSize: 28, fontWeight: "bold" },
  goldBalance: { color: "#FFD700", fontWeight: "bold" },
  sectionTitle: {
    color: "#94A3B8",
    fontSize: 18,
    marginVertical: 15,
    fontWeight: "600",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  itemCard: {
    backgroundColor: "#1E293B",
    width: "48%",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 15,
  },
  itemEmoji: { fontSize: 40, marginBottom: 10 },
  itemName: { color: "#FFF", fontWeight: "500" },
  priceTag: {
    marginTop: 8,
    backgroundColor: "#334155",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  priceText: { color: "#FFD700", fontSize: 12, fontWeight: "bold" },
});
