import React from "react";
import { Input, Icon, Stack, NativeBaseProvider, List } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import {
  ImageBackground,
  ScrollView,
  Pressable,
  View,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import mycolors from "./../constants/mycolors";

const SignUp = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: mycolors.white,
      }}
      showsVerticalScrollIndicator={false}
    >
      <ImageBackground
        source={require("./../assets/images/signup-1.jpg")}
        style={{
          height: Dimensions.get("window").height / 2,
          resizeMode: "cover",
        }}
      ></ImageBackground>
      {/* Bottom View */}
      <View style={styles.bottomView}>
        {/* SignUp View */}
        <View style={{ padding: 40 }}>
          <Text style={{ fontSize: 35 }}>Sign In</Text>
        </View>
        <View style={{ marginTop: 2 }}>
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
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="person" />}
                    size={5}
                    ml="2"
                    color="muted.400"
                  />
                }
                placeholder="Username"
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
          <TouchableOpacity>
            <Pressable>
              <View style={styles.button}>
                <Text style={{ color: mycolors.white, fontSize: 20 }}>
                  Create Account
                </Text>
              </View>
            </Pressable>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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

export default SignUp;
