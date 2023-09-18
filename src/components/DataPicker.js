import React, { useState } from "react";
import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function TimePicker({ onHourChange }) {
  const [selectedHour, setSelectedHour] = useState(""); // Estado para almacenar la hora seleccionada

  // Opciones de hora en formato de 24 horas
  const hours = [
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ];

  const handleHourChange = (hour) => {
    setSelectedHour(hour);
    onHourChange(hour);
  };

  return (
    <View
      style={{
        marginHorizontal: 90,
        marginTop: -38,
      }}
    >
      <Picker
        style={{
          color: "#DADADA",
        }}
        selectedValue={selectedHour}
        onValueChange={(itemValue) => handleHourChange(itemValue)}
      >
        {hours.map((hour) => (
          <Picker.Item key={hour} label={hour} value={hour} color="#50505F" />
        ))}
      </Picker>
    </View>
  );
}
