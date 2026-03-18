import { Award, Coins, Sword } from "lucide-react-native";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useGame } from "../../context/GameContext";

export default function HomeScreen() {
  const { stats } = useGame();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Karakter</Text>
        <View style={styles.badgeContainer}>
          {stats.badges.map((badge, index) => (
            <View key={index} style={styles.miniBadge}>
              <Text style={styles.miniBadgeText}>{badge}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.avatarCard}>
        <Text style={styles.avatarEmoji}>{stats.currentAvatar}</Text>
        <Text style={styles.levelBadge}>Seviye {stats.level}</Text>
      </View>

      <View style={styles.statsGrid}>
        <StatBox
          icon={<Coins color="#FFD700" size={18} />}
          label="Altın"
          value={stats.gold}
        />
        <StatBox
          icon={<Sword color="#FF4500" size={18} />}
          label="XP"
          value={`${stats.xp}/100`}
        />
        <StatBox
          icon={<Award color="#4CAF50" size={18} />}
          label="Açlık"
          value={`%${stats.hunger}`}
        />
      </View>
    </ScrollView>
  );
}

const StatBox = ({ icon, label, value }: any) => (
  <View style={styles.statBox}>
    {icon}
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0F172A", padding: 20 },
  header: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { color: "#FFF", fontSize: 24, fontWeight: "bold" },
  badgeContainer: { flexDirection: "row", gap: 5 },
  miniBadge: {
    backgroundColor: "#1E293B",
    padding: 6,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#334155",
  },
  miniBadgeText: { color: "#FFF", fontSize: 10 },
  avatarCard: {
    backgroundColor: "#1E293B",
    padding: 40,
    borderRadius: 30,
    alignItems: "center",
    marginVertical: 20,
  },
  avatarEmoji: { fontSize: 80 },
  levelBadge: {
    backgroundColor: "#3B82F6",
    color: "#FFF",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    marginTop: 10,
    fontWeight: "bold",
  },
  statsGrid: { flexDirection: "row", justifyContent: "space-between" },
  statBox: {
    backgroundColor: "#1E293B",
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
    width: "31%",
  },
  statLabel: { color: "#94A3B8", fontSize: 10 },
  statValue: { color: "#F8FAFC", fontSize: 14, fontWeight: "bold" },
});
