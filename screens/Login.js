import React from "react";
import { Input, Icon, Stack, NativeBaseProvider, List } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Dimensions,
  Pressable,
} from "react-native";
import mycolors from "./../constants/mycolors";

const Login = () => {
  const navigation = useNavigation();
  return (
    //Container begins here
    <ScrollView
      style={{ flex: 1, backgroundColor: mycolors.white }}
      showsVerticalScrollIndicator={false}
    >
      <ImageBackground
        source={require("./../assets/images/welcome2.jpg")}
        style={{
          height: Dimensions.get("window").height / 2,
          resizeMode: "cover",
        }}
      ></ImageBackground>
      {/*Bottom View*/}
      <View style={styles.bottomView}>
        {/* Welcome View */}
        <View style={{ padding: 40 }}>
          <Text style={{ fontSize: 35 }}>Welcome </Text>
          <Text style={{ marginTop: 15 }}>
            Don't have an account?
            <Text
              onPress={() => navigation.navigate("SignUp")}
              style={{ color: "blue" }}
            >
              {" "}
              Register here
            </Text>
          </Text>
        </View>
        {/* Form Input View */}

        <View style={{ marginTop: 20 }}>
          <NativeBaseProvider>
            <Stack space={4} w="100%" alignItems="center">
              <Input
                size="2xl"
                w={{
                  base: "75%",
                  md: "25%",
                }}
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="person" />}
                    size={5}
                    ml="2"
                    color="muted.400"
                  />
                }
                placeholder="Email"
              />
              <Input
                size="2xl"
                w={{
                  base: "75%",
                  md: "25%",
                }}
                InputRightElement={
                  <Icon
                    as={<MaterialIcons name="visibility-off" />}
                    size={5}
                    mr="2"
                    color="muted.400"
                  />
                }
                placeholder="Password"
              />
            </Stack>
          </NativeBaseProvider>
          {/* Login Button View */}

          <TouchableOpacity>
            <Pressable onPress={() => navigation.navigate("Store")}>
              <View style={styles.button}>
                <Text style={{ color: mycolors.white, fontSize: 20 }}>
                  Login
                </Text>
              </View>
            </Pressable>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
    //Container end
  );
};

const styles = StyleSheet.create({
  bottomView: {
    flex: 1.5,
    backgroundColor: "white",
    bottom: 50,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
  },
  forgotPasswordView: {
    height: 20,
    flexDirection: "row",
    marginTop: 10,
  },
  button: {
    height: 50,
    backgroundColor: mycolors.black,
    borderRadius: 15,
    marginHorizontal: 38,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 45,
  },
});

export default Login;
