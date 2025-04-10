import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import useAuth from "../hooks/useAuth";
import UserForm from "../components/user/UserForm";

const ProfilScreen = () => {
  const { signout } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil</Text>

      <UserForm/>

      <Button mode="contained" onPress={signout}>
        Se déconnecter
      </Button>
    </View>
  );
};

export default ProfilScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#f5f6fa",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#2c3e50",
  },
});
