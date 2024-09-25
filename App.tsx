import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import { theme } from "./theme";

export default function App() {
  const handleDelete = () => {
    Alert.alert(
      "Are you sure you want to delete?",
      "It will be gone for good",
      [
        {
          text: "Yes",
          onPress: () => console.log("Deleting..."),
          style: "destructive",
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ],
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>Coffee</Text>
        <TouchableOpacity style={styles.Button} onPress={handleDelete}>
          <Text style={styles.textColor}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: "center",
  },
  // in react native every item has a flex property and the default direction is column
  itemContainer: {
    borderBottomColor: theme.colorCerulean,
    borderBottomWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemText: {
    fontSize: 18,
    fontWeight: "200",
  },
  Button: {
    backgroundColor: theme.colorBlack,
    padding: 8,
    borderRadius: 4,
  },
  textColor: {
    color: theme.colorWhite,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
