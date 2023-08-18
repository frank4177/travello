import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const navigation = useNavigation<any>()
  return (
    <View style={styles.container}>
      {/* background image */}
      <Image
        source={require("../../assets/images/welcome.png")}
        style={styles.img}
      />

      {/* content and gradient */}
      <View style={styles.contentWrap}>
        <LinearGradient
          colors={["transparent", "rgba(3,105,161,0.8)"]}
          style={styles.linear}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        />
        <View style={styles.content}>
          <Text style={styles.textBig}>Traveling made easy!</Text>
          <Text style={styles.textSmall}>
            Experience adventure like never before!
          </Text>
        </View>
        <TouchableOpacity onPress={()=> navigation.navigate("Home")} style={styles.button}>
          <Text style={styles.buttonText}>Let's go!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
  },
  img: {
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  contentWrap: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
    paddingBottom:20
  },
  content: {
    padding: 20,
  },
  textBig: {
    color: "white",
    fontWeight: "bold",
    fontSize: 37,
  },
  textSmall: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
    borderRadius: 20,
    maxWidth: 200,
    height: 40,
    width: "100%",
    alignSelf: "center",
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 17,
  },
  linear: {
    width: "100%",
    height: "60%",
    position: "absolute",
    bottom: 0,
  },
});
