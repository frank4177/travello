import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
  TextInput,
  // SafeAreaView
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SimpleLineIcons } from "@expo/vector-icons";
import Categories from "../components/Categories";
import SortCategories from "../components/SortCategories";
import Destinations from "../components/Destinations";

export default function HomeScreen() {
  // const ios = Platform.OS = "ios"
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        // style={ios ? styles.scrollIOS : styles.scrollDroid}
      >
        {/* Avatar */}
        <View style={styles.textAndAvatar}>
          <Text style={styles.text}>Let's discover</Text>
          <TouchableOpacity>
            <Image
              style={styles.avatar}
              source={require("../../assets/images/avatar.png")}
            />
          </TouchableOpacity>
        </View>

        {/* search bar */}
        <View style={styles.search}>
          <View style={styles.searchWrap}>
            <SimpleLineIcons name="magnifier" size={20} color="black" />
            <TextInput
              placeholder="Search destination"
              placeholderTextColor={"grey"}
              style={styles.input}
            />
          </View>
        </View>

        {/* categories */}
        <View style={styles.category}>
          <Categories />
        </View>

        {/* sort categories */}
        <View>
          <SortCategories />
        </View>

        {/* detinations */}
        
          <Destinations />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    // backgroundColor: "white",
    backgroundColor:"red"
  },
  scrollIOS: {
    marginTop: 3,
  },
  scrollDroid: {
    marginTop: 10,
  },
  textAndAvatar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  text: {
    fontWeight: "bold",
    fontSize: 25,
  },
  avatar: {
    width: 40,
    height: 40,
  },
  search: {
    marginBottom: 10,
    marginLeft: 3,
  },
  searchWrap: {
    display: "flex",
    flexDirection: "row",
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: "whitesmoke",
    padding: 13,
  },
  input: {
    display: "flex",
    flex: 1,
    letterSpacing: 1,
    fontSize: 17,
    marginLeft: 5,
  },
  category: {
    marginBottom: 40,
  },
  destination: {
    marginBottom: 40,
  },
});
