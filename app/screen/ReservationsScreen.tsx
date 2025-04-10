import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ReservationsScreen = () => {
  // Réservations simulées
  const [reservations, setReservations] = useState([
    { id: 1, classroomName: "Salle A", time: "2025-04-10 08:00" },
    { id: 2, classroomName: "Salle B", time: "2025-04-10 10:00" },
  ]);

  // Fonction pour annuler une réservation
  const handleCancelReservation = (id: number) => {
    setReservations(reservations.filter((reservation) => reservation.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mes Réservations</Text>
      {reservations.length === 0 ? (
        <Text>Aucune réservation</Text>
      ) : (
        reservations.map((reservation) => (
          <View key={reservation.id} style={styles.card}>
            <Text style={styles.cardTitle}>{reservation.classroomName}</Text>
            <Text>Heure : {reservation.time}</Text>
            <Button
              title="Annuler"
              onPress={() => handleCancelReservation(reservation.id)}
            />
          </View>
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    marginBottom: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ReservationsScreen;
