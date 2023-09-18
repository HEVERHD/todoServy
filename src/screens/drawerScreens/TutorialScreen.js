import { useNavigation } from "@react-navigation/native";
import { Button, SafeAreaView, Text, View, Image } from "react-native";

export default function TutorialScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text style={{ textAlign: "center", fontSize: 20 }}>
        Welcome to the app! Tutorial
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 15,
          marginHorizontal: 20,
        }}
      >
        <Text
          style={{
            textAlign: "left",
            fontSize: 15,
          }}
        >
          1. Click on a button below and you will be navigated to another screen
          with some information about that particular topic. You can also click
          on any
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 15,
          marginHorizontal: 20,
        }}
      >
        <Text
          style={{
            textAlign: "left",
            fontSize: 15,
          }}
        >
          2. The first time you open this tutorial it may take longer than usual
          as we are loading all of our data into memory for faster access times
          when
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 15,
          marginHorizontal: 20,
        }}
      >
        <Text
          style={{
            textAlign: "left",
            fontSize: 15,
          }}
        >
          3. If the app is not working properly or if there's an error in your
          code please contact us at{" "}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 15,
          marginHorizontal: 20,
        }}
      >
        <Text
          style={{
            textAlign: "left",
            fontSize: 15,
          }}
        >
          We will be happy to help!
        </Text>
      </View>

      <View
        style={{
          marginTop: 15,
          marginHorizontal: 20,
        }}
      >
        <Text
          style={{
            fontSize: 15,
          }}
        >
          Contact : Hevert Gelis
        </Text>
        <Image src="https://i.ibb.co/WgXnyFj/beto.png" height={20} width={20} />
        <Text
          style={{
            fontSize: 15,
          }}
        >
          Email: hever11.hdgd@gmail.com
        </Text>
      </View>

      {/* <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Go Back" onPress={() => navigation.goBack()} /> */}
    </SafeAreaView>
  );
}
