import { View, StyleSheet } from "react-native";
import ShoppingListItem from "../components/ShoppingListItem";
import { theme } from "../theme";
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Link
        href="/counter"
        style={{ textAlign: "center", marginBottom: 18, fontSize: 24 }}
      >
        Go to Counter
      </Link>
      <ShoppingListItem title="Coffee" />
      <ShoppingListItem title="Tea" isCompleted={true} />
      <ShoppingListItem title="Milk" isCompleted={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: "center",
  },
});
