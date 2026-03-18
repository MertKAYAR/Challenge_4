import { Tabs } from "expo-router";
import { Home, ListChecks, ShoppingCart } from "lucide-react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#3B82F6",
        tabBarInactiveTintColor: "#94A3B8",
        tabBarStyle: { backgroundColor: "#0F172A", borderTopColor: "#1E293B" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Ana Sayfa",
          tabBarIcon: ({ color }) => <Home color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="quests"
        options={{
          title: "Görevler",
          tabBarIcon: ({ color }) => <ListChecks color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          title: "Market",
          tabBarIcon: ({ color }) => <ShoppingCart color={color} size={24} />,
        }}
      />
    </Tabs>
  );
}
