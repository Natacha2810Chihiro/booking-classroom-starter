import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const ReservationScreen = ({ route, navigation }) => {
  const { classroomId } = route.params; 
  const [startTime, setStartTime] = useState(""); 
  const [endTime, setEndTime] = useState(""); 

  const handleSubmit = () => {
    
    console.log(`Réservation pour la salle ${classroomId}`);
    console.log(`De: ${startTime} à ${endTime}`);
    
    navigation.navigate("Classrooms");
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Réserver la Salle</Text>

      <TextInput
        placeholder="Heure de début"
        value={startTime}
        onChangeText={setStartTime}
        style={{ borderWidth: 1, padding: 8, marginVertical: 10 }}
      />

      <TextInput
        placeholder="Heure de fin"
        value={endTime}
        onChangeText={setEndTime}
        style={{ borderWidth: 1, padding: 8, marginVertical: 10 }}
      />

      <Button title="Confirmer la réservation" onPress={handleSubmit} />
    </View>
  );
};

export default ReservationScreen;
