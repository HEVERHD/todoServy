import { StyleSheet } from "react-native";

export const loginTheme = StyleSheet.create({
  formContainer: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: "center",
    height: 700,
    marginBottom: 50,
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
  },
  label: {
    marginTop: 25,
    fontWeight: "bold",
    color: "white",
  },
  inputsFiels: {
    color: "white",
    fontSize: 14,
    borderBottomColor: "white",
    paddingBottom: 4,
  },
  buttonContainer: {
    marginTop: 30,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    height: 46,
    marginHorizontal: 0,
    borderRadius: 8,
  },
  button: {},
  register: {
    marginTop: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#3D3D3D",
  },
  textRegister: {
    color: "#DADADA",
    textAlign: "center",
    fontSize: 12,
  },
  ButtonRegister: {},
});
