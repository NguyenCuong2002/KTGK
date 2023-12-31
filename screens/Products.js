import React from "react";
import { Image, View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { colors, shadow, sizes, spacing } from "../constants/theme";
// import FavoriteButton from './FavoriteButton';
import { PLACES } from "../data";
import MainHeader from "../components/MainHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
const CARD_WIDTH = sizes.width ;
const CARD_HEIGHT = 220;

const Products = ({ list }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <MainHeader title="Travel App" />
        <ScrollView showsVerticalScrollIndicator={false}>
        {PLACES.map((item, index) => {
          return (
            <TouchableOpacity key={index} style={styles.cardContainer}>
              <View style={[styles.card]} key={item.id}>
                <View style={styles.imageBox}>
                  <Image style={styles.image} source={item.image} />
                </View>
                <View style={styles.footer}>
                  <View style={styles.titleBox}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.location}>{item.location}</Text>
                  </View>
                  {/* <FavoriteButton /> */}
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
        </ScrollView>
        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  cardContainer: {
    // paddingHorizontal: spacing.l,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: colors.white,
    borderRadius: sizes.radius,
  },
  imageBox: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT - 60,
    // borderTopLeftRadius: sizes.radius,
    // borderTopRightRadius: sizes.radius,
    overflow: "hidden",
    paddingHorizontal : 16,
  },
  image: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT - 60,
    resizeMode: "cover",
    
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
    marginLeft: 16,
    marginRight: 10,
  },
  titleBox: {
    flex: 1,
  },
  title: {
    marginVertical: 4,
    fontSize: sizes.body,
    fontWeight: "bold",
    color: colors.primary,
  },
  location: {
    fontSize: sizes.body,
    color: colors.lightGray,
  },
});

export default Products;
