import { CheckCircle2, Moon } from "lucide-react-native"; // Moon ikonunu da buraya ekledik
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useGame } from "../../context/GameContext"; // İŞTE EKSİK OLAN SATIR BU!

const QUESTS = [
  { id: "1", title: "10 Sayfa Kitap Oku", xp: 20, gold: 15 },
  { id: "2", title: "5000 Adım At", xp: 30, gold: 25 },
  { id: "3", title: "Yazılım Çalış (1 Saat)", xp: 50, gold: 40 },
];

export default function QuestsScreen() {
  const { stats, completeQuest, startNewDay } = useGame();

  const renderQuest = ({ item }: any) => {
    const isCompleted = stats.completedQuests.includes(item.id);

    return (
      <View style={[styles.questCard, isCompleted && styles.completedCard]}>
        <View>
          <Text style={styles.questTitle}>{item.title}</Text>
          <Text style={styles.questRewards}>
            ✨ {item.xp} XP | 💰 {item.gold} Altın
          </Text>
        </View>
        <TouchableOpacity
          style={styles.completeBtn}
          onPress={() => completeQuest(item.id, item.xp, item.gold)}
          disabled={isCompleted}
        >
          <CheckCircle2 color={isCompleted ? "#64748B" : "#4CAF50"} size={28} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Günlük Görevler</Text>
      <FlatList
        data={QUESTS}
        keyExtractor={(item) => item.id}
        renderItem={renderQuest}
        contentContainerStyle={{ paddingTop: 20, paddingBottom: 100 }}
        ListFooterComponent={
          <TouchableOpacity style={styles.newDayBtn} onPress={startNewDay}>
            <Moon color="#FFF" size={20} />
            <Text style={styles.newDayText}>Yeni Güne Başla</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0F172A", padding: 20 },
  title: { color: "#F8FAFC", fontSize: 28, fontWeight: "bold", marginTop: 40 },
  questCard: {
    backgroundColor: "#1E293B",
    padding: 20,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  completedCard: { opacity: 0.5 },
  questTitle: { color: "#F8FAFC", fontSize: 16, fontWeight: "600" },
  questRewards: { color: "#94A3B8", fontSize: 14, marginTop: 4 },
  completeBtn: { padding: 5 },
  newDayBtn: {
    backgroundColor: "#6366F1",
    flexDirection: "row",
    padding: 18,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    gap: 10,
    borderWidth: 2,
    borderColor: "#818CF8",
  },
  newDayText: { color: "#FFF", fontWeight: "bold", fontSize: 16 },
});
