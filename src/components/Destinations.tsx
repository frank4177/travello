import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { destinationData } from "../constants";
import { DestinationProps } from "../types";

interface IProps {
    item: DestinationProps
}

export default function Destinations() {
  return (
    <View style={styles.container}>
      {destinationData.map((item, index) => {
        return <DestinationCard item={item} key={index}/>;
      })}
    </View>
  );
}

const DestinationCard = ({item}: IProps) => {
  return (
    <TouchableOpacity style={styles.card}>
      {/* <Image source={item.image} style={styles.img}/> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display:"flex",
    flex:1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    backgroundColor:"pink",
    height:"100%",
    // position:"relative"
  },
  card: {
    display: "flex",
    justifyContent: "flex-end",
    padding: 5,
    backgroundColor:"blue",
    width: "40%",
    height:"60%"
  },
  img: {
    // height: 190,
    // width: 170,
    borderRadius: 35
    // position: "absolute"
  },
});
