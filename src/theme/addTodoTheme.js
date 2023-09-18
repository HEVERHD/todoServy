import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: "#141419",
    flex: 1,
    paddingTop: 80,
  },
  containerSw: {
    flex: 1,
    paddingHorizontal: 30,
  },
  titleMain: {
    marginTop: 70,
    marginBottom: 50,
  },
  titleAdd: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#DADADA",
    textAlign: "center",
  },
  titleAddSub: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#DADADA",
    textAlign: "center",
  },
  inputTitle: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 24,
    marginTop: 10,
    color: "#DADADA",
  },
  inputTitleSw: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 24,

    color: "#DADADA",
  },
  textInput: {
    borderBottomColor: "#575767",
    borderBottomWidth: 1,
    width: "80%",
    color: "#DADADA",
  },
  inputContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingBottom: 30,
  },
  button: {
    marginTop: 60,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    height: 46,

    borderRadius: 15,
  },
  errorText: {
    color: "#FF97A4",
    fontSize: 14,
    marginTop: 5,
  },
  errorTextDescriptions: {
    color: "#FF97A4",
    fontSize: 14,
    marginTop: 5,
  },
  imageBack: {
    width: "auto",
    position: "absolute",
    top: "60%",
    left: "5%",
    opacity: 0.1,
  },
});
