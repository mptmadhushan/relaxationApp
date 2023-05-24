import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";

export default class Home extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("../images/back.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <ScrollView>
          <Text
            style={{
              paddingHorizontal: 20,
              fontSize: 35,
              paddingTop: 40,
              marginTop: 220,
              fontFamily: "Bold",
              color: "#111`",
            }}
          >
            Welcome Back,
          </Text>
          <Text
            style={{
              paddingHorizontal: 20,
              fontSize: 35,
              fontFamily: "Bold",
              color: "#fff",
            }}
          >
           Login
          </Text>

          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#FFF2F2",
              marginTop: 70,
              marginHorizontal: 20,
              borderRadius: 20,
              paddingVertical: 30,
            }}
          >
            <View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#FFF",
                  padding: 10,
                  borderRadius: 12,
                  marginHorizontal: 20,
                  marginTop: 20,
                }}
              >
                <TextInput
                  placeholder="User Name"
                  placeholderTextColor="#345c74"
                  style={{
                    fontFamily: "Bold",
                    fontSize: 12,
                    width: 220,
                    paddingHorizontal: 12,
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#FFF",
                  padding: 10,
                  borderRadius: 12,
                  marginHorizontal: 20,
                  marginTop: 20,
                }}
              >
                <TextInput
                  placeholder="Email"
                  placeholderTextColor="#345c74"
                  style={{
                    fontFamily: "Bold",
                    fontSize: 12,
                    width: 220,
                    paddingHorizontal: 12,
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#FFF",
                  padding: 10,
                  borderRadius: 12,
                  marginHorizontal: 20,
                  marginTop: 20,
                }}
              >
                <TextInput
                  placeholder="Password"
                  placeholderTextColor="#345c74"
                  style={{
                    fontFamily: "Bold",
                    fontSize: 12,
                    width: 220,
                    paddingHorizontal: 12,
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 10,
                  borderRadius: 12,
                  justifyContent:'space-between',
                  marginHorizontal: 20,
                  marginTop: 20,
                }}
              >
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Home")}
                  style={{
                    flexDirection: "row",
                    backgroundColor: "#5facdb",
                    alignItems: "center",
                    marginTop: 20,
                    width: 100,
                    paddingVertical: 10,
                    borderRadius: 14,
                    paddingHorizontal: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "#FFF",
                      fontFamily: "Bold",
                      fontSize: 12,
                    }}
                  >
                    LogIn
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Register")}
                  style={{
                    flexDirection: "row",
                    backgroundColor: "#5facdb",
                    alignItems: "center",
                    width: 100,
                    marginTop: 20,
                    paddingVertical: 10,
                    borderRadius: 14,
                    paddingHorizontal: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "#FFF",
                      fontFamily: "Bold",
                      textAlign: "center",
                      fontSize: 12,
                    }}
                  >
                    Register
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
