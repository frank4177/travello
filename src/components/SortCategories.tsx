import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { sortCategoryData } from "../constants";
import { theme } from "../theme";

export default function SortCategories() {
  const [activeSort, setActiveSort] = useState<String>("Popular");
  return (
    <View style={styles.container}>
      {sortCategoryData.map((sort, index) => {
        let isActive = sort == activeSort;
        let btn = isActive ? styles.btnActive : styles.btn;
        return (
          <TouchableOpacity
            key={index}
            style={btn}
            onPress={() => setActiveSort(sort)}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "bold",
                color: isActive ? theme.text : "black",
              }}
            >
              {sort}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 20,
    backgroundColor: "whitesmoke",
    padding: 10,
  },
  btn: {
    padding: 5,
    paddingHorizontal: 14,
    borderRadius: 10,
    display: "flex",
  },
  btnActive: {
    backgroundColor: "white",
    padding: 5,
    paddingHorizontal: 14,
    borderRadius: 10,
    display: "flex",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
  },
});
