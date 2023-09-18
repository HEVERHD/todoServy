import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: "#141419",
    paddingTop: 0,
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 25,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },
  titleNotask: {
    fontSize: 14,
    fontWeight: "900",
    marginBottom: 20,
    color: "#575767",
  },
  titleNotaskIncompleted: {
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 20,
    color: "#575767",
  },
  divider: {
    width: "100%",
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#444444",
  },
  header: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1DA1F2",
  },
  footer: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    color: "#FFFFFF",
    padding: 8,
    borderRadius: 12,
    fontSize: 12,
  },
  footerTitle: {
    padding: 8,
    borderRadius: 12,
    fontSize: 12,
  },
  emptyComponentTitle: {
    color: "#575767",
    fontSize: 20,
    fontWeight: "bold",
  },
  emptyComponentSubtitle: {
    color: "#575767",
    padding: 4,
    fontSize: 14,
    textAlign: "center",
  },
  emptyComponent: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  button: {
    width: 45,
    height: 45,
    borderRadius: 21,
    backgroundColor: "#3F4EA0",
    borderColor: "#515CC6",
    borderWidth: 1,
    position: "absolute",
    bottom: 50,
    right: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
  },
  plus: {
    fontSize: 35,
    color: "#fff",
    position: "absolute",
    top: -3,
    left: 12,
  },
  buttonDeleteAll: {
    width: 45,
    height: 45,
    borderRadius: 21,
    backgroundColor: "#3F4EA0",
    borderColor: "#515CC6",
    borderWidth: 1,
    position: "absolute",
    bottom: 110,
    right: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
  },
  plus: {
    fontSize: 35,
    color: "#fff",
    position: "absolute",
    top: -3,
    left: 12,
  },
  imageEmpty: {
    position: "absolute",
    top: "5%",
    left: "5%",
  },
  titleDate: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#DADADA",
    marginBottom: 20,
  },
  alertNotificationRoot: {
    justifyContent: "center",
    alignItems: "center",
  },
  noTasksMessage: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#DADADA",
    marginBottom: 20,
    justifyContent: "center",
    textAlign: "center",
  },
  containerImag: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageEmptyHome: {
    height: 200,
    width: 200,
  },
});
