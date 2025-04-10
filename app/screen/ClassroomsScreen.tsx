import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Card } from "react-native-paper";

const ClassroomsScreen = ({ navigation }) => {
  const [classrooms, setClassrooms] = useState([]);

  useEffect(() => {
    console.log("ClassroomsScreen useEffect");
    fetchAllClassrooms();
  }, []);

  const fetchAllClassrooms = async () => {
    const response = await fetch("http://localhost:8000/api/classrooms");
    const data = await response.json();
    console.log(data);
    setClassrooms(data);
  };

  const handleReserve = (classroomId: string) => {
    navigation.navigate("Reservation", { classroomId }); // On passe l'ID de la salle
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste des Salles</Text>
      <View style={styles.classroomsContainer}>
        {classrooms.map((classroom) => (
          <Card key={classroom.id} style={styles.card}>
            <Card.Title title={classroom.name} titleStyle={styles.cardTitle} />
            <Card.Content>
              <Text>Capacité: {classroom.capacity}</Text>
              <Text>Équipements: {classroom.equipment}</Text>
              <Button
                title="Réserver"
                onPress={() => handleReserve(classroom.id)} // Passer l'ID de la salle ici
              />
            </Card.Content>
          </Card>
        ))}
      </View>
    </View>
  );
};

export default ClassroomsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "blue",
    marginBottom: 20,
  },
  classroomsContainer: {
    flexDirection: "column",
    gap: 10,
  },
  card: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "blue",
  },
});
