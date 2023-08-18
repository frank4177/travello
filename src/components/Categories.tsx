import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { theme } from "../theme";
import { categoriesData } from "../constants";

export default function Categories() {
  return (
    <View >
      <View style={styles.wrap}>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>Categories</Text>
        <TouchableOpacity>
          <Text style={{ fontSize: 15, color: theme.text }}>Sea all</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        // contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        // nestedScrollEnabled={true}
        scrollEnabled={true}
        style={{ flexGrow: 1 }}
      >
        {categoriesData.map((cat, index) => (
          <TouchableOpacity
            key={index}
            style={styles.imageWrap}
          >
            <Image
              source={cat.image}
              style={{ height: 90, width: 90, borderRadius: 15 }}
            />
            <Text>{cat.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "white",
  },
  wrap: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageWrap: {
    display: "flex",
    alignItems: "center",
    margin: 10,
  },
});
