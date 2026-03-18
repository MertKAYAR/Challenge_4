import React, { createContext, useContext, useEffect, useState } from "react";
import { Alert } from "react-native";

interface GameStats {
  gold: number;
  xp: number;
  level: number;
  hunger: number;
  happiness: number;
  completedQuests: string[];
  currentAvatar: string;
  badges: string[]; // Yeni: Kazanılan Rozetler
}

interface GameContextType {
  stats: GameStats;
  completeQuest: (id: string, xpGain: number, goldGain: number) => void;
  buyItem: (type: "food" | "skin", price: number, value: string) => void;
  startNewDay: () => void; // Yeni: Gün Döngüsü
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [stats, setStats] = useState<GameStats>({
    gold: 150,
    xp: 0,
    level: 1,
    hunger: 40,
    happiness: 80,
    completedQuests: [],
    currentAvatar: "🛡️",
    badges: [],
  });

  // --- Başarım ve Seviye Kontrolü ---
  useEffect(() => {
    let newBadges = [...stats.badges];
    let updated = false;

    // Level 5 Başarımı
    if (stats.level >= 5 && !newBadges.includes("👑 Deneyimli")) {
      newBadges.push("👑 Deneyimli");
      updated = true;
    }
    // 1000 Altın Başarımı
    if (stats.gold >= 1000 && !newBadges.includes("💰 Zengin")) {
      newBadges.push("💰 Zengin");
      updated = true;
    }

    if (updated) {
      setStats((prev) => ({ ...prev, badges: newBadges }));
      Alert.alert(
        "YENİ BAŞARIM! 🏆",
        `${newBadges[newBadges.length - 1]} rozetini kazandın!`,
      );
    }

    if (stats.xp >= 100) {
      setStats((prev) => ({
        ...prev,
        xp: prev.xp - 100,
        level: prev.level + 1,
      }));
      Alert.alert("LEVEL UP! ⚔️", "Gücün artıyor!");
    }
  }, [stats.xp, stats.gold, stats.level]);

  // --- Yeni Güne Başla ---
  const startNewDay = () => {
    const randomEvent = Math.random();
    let eventMsg = "Yeni bir gün başladı! Görevler sıfırlandı.";

    setStats((prev) => {
      let goldBonus = 0;
      let hapChange = -10;

      if (randomEvent < 0.15) {
        goldBonus = 50;
        eventMsg = "🍀 Yolda bir kese altın buldun! +50 Altın";
      } else if (randomEvent > 0.85) {
        hapChange = -30;
        eventMsg = "🤒 Bugün biraz halsiz uyandın... -20 Mutluluk";
      }

      return {
        ...prev,
        completedQuests: [], // Görevleri sıfırla
        hunger: Math.min(100, prev.hunger + 20), // Açlık artar (değer yükselince acıkmış sayıyoruz)
        happiness: Math.max(0, prev.happiness + hapChange),
        gold: prev.gold + goldBonus,
      };
    });

    Alert.alert("GÜNAYDIN! ☀️", eventMsg);
  };

  const completeQuest = (id: string, xpGain: number, goldGain: number) => {
    if (stats.completedQuests.includes(id)) return;
    setStats((prev) => ({
      ...prev,
      xp: prev.xp + xpGain,
      gold: prev.gold + goldGain,
      completedQuests: [...prev.completedQuests, id],
    }));
  };

  const buyItem = (type: "food" | "skin", price: number, value: string) => {
    if (stats.gold < price) {
      Alert.alert("Yetersiz Altın");
      return;
    }
    setStats((prev) => ({
      ...prev,
      gold: prev.gold - price,
      hunger: type === "food" ? Math.max(0, prev.hunger - 30) : prev.hunger,
      currentAvatar: type === "skin" ? value : prev.currentAvatar,
    }));
  };

  return (
    <GameContext.Provider
      value={{ stats, completeQuest, buyItem, startNewDay }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error("Provider Hatası");
  return context;
};
