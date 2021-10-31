import React from "react";
import {
  StyleSheet,
  Image,
  Platform,
  StatusBar,
  View,
  Text,
  Pressable,
} from "react-native";
import mycolors from "./../constants/mycolors";
import Constants from "expo-constants";
import SafeAreaView from "react-native-safe-area-view";
import { TouchableOpacity } from "react-native-gesture-handler";

const statusBarHeight = Constants.statusBarHeight;

const Welcome = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 2, backgroundColor: mycolors.white }}>
      <StatusBar translucent backgroundColor={mycolors.transparent} />
      <Image
        source={require("./../assets/images/welcome.jpg")}
        style={styles.image}
      />
      <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
        <View>
          <Text style={styles.title}>Special Jacket</Text>
          <Text style={styles.title}>Collections</Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.description}>
            {" "}
            Fashion is a form of self-expression and
          </Text>
          <Text style={styles.description}>
            {" "}
            autonomy at a particular period and place
          </Text>
          <Text style={styles.description}> and in a specific context.</Text>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end", paddingBottom: 40 }}>
        <TouchableOpacity>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <View style={styles.button}>
              <Text style={{ color: mycolors.white, fontSize: 20 }}>
                Get Started
              </Text>
            </View>
          </Pressable>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 420,
    width: "100%",
    borderBottomLeftRadius: 100,
    paddingTop: Platform.OS === "ios" ? 0 : statusBarHeight,
    resizeMode: "cover",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    color: mycolors.grey,
  },
  button: {
    height: 60,
    backgroundColor: mycolors.black,
    borderRadius: 15,
    marginHorizontal: 23,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Welcome;
