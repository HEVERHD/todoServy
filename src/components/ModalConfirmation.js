import { Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";

export const DeleteConfirmationDialog = ({
  isVisible,
  onCancel,
  onConfirm,
}) => {
  return (
    <Modal style={{ zIndex: 999 }} isVisible={isVisible}>
      <View>
        <Text
          style={{
            color: "#DADADA",
            fontSize: 18,
            textAlign: "center",
            marginBottom: 60,
          }}
        >
          Are you sure? This action cannot be undone.
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 50,
          }}
        >
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",

              backgroundColor: "#404EA0",
              width: 100,
              height: 38,
              borderRadius: 15,
            }}
            onPress={onCancel}
          >
            <Text
              style={{
                color: "#DADADA",
                fontSize: 14,
                textAlign: "center",
              }}
            >
              Cancelar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#404EA0",
              borderWidth: 1,
              borderColor: "#FF97A4",
              width: 100,
              height: 38,
              borderRadius: 15,
            }}
            onPress={onConfirm}
          >
            <Text
              style={{
                color: "#FF97A4",
                fontSize: 14,
                textAlign: "center",
              }}
            >
              Confirmar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
