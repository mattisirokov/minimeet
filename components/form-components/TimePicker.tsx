import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

interface TimePickerProps {
  onChange: (time: Date) => void;
  value: Date;
  label: string;
}

const TimePicker: React.FC<TimePickerProps> = ({ onChange, value, label }) => {
  const [show, setShow] = useState(false);

  const onTimeChange = (event: any, selectedTime: Date | undefined) => {
    setShow(false);
    if (selectedTime) {
      onChange(selectedTime);
    }
  };

  const showTimePicker = () => {
    setShow(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity onPress={showTimePicker} style={styles.button}>
        <Text style={styles.buttonText}>
          {value.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          value={value}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={onTimeChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  button: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
  },
  buttonText: {
    fontSize: 16,
  },
});

export default TimePicker;
