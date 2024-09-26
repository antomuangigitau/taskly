import { theme } from "../theme";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";

type PropList = {
  title: string,
  isCompleted?: boolean,
};
const ShoppingListItem = ({ title, isCompleted }: PropList) => {
  const handleDelete = () => {
    Alert.alert(
      `Are you sure you want to delete ${title}`,
      "It will be gone for good",
      [
        {
          text: "Yes",
          onPress: () => console.log("Ok, Deleting..."),
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
    <View
      style={[
        styles.itemContainer,
        isCompleted ? styles.completedContainer : undefined,
      ]}
    >
      <Text
        style={[
          styles.itemText,
          isCompleted ? styles.completedText : undefined,
        ]}
      >
        {title}
      </Text>
      <TouchableOpacity
        style={[
          styles.Button,
          isCompleted ? styles.completedButton : undefined,
        ]}
        onPress={handleDelete}
      >
        <Text style={styles.textColor}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

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
  completedContainer: {
    backgroundColor: theme.colorLightGrey,
    borderBottomColor: theme.colorCerulean,
  },
  completedButton: {
    backgroundColor: theme.colorGrey,
  },
  itemText: {
    fontSize: 18,
    fontWeight: "200",
  },
  completedText: {
    textDecorationLine: "line-through",
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
export default ShoppingListItem;
