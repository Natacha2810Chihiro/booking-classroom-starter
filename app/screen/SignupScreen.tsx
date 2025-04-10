import { useContext, useState } from "react";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import useAuth from "../hooks/useAuth"; 

const SignupScreen = ({ navigation }: any) => {
  const { signup } = useAuth(); 
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (key: string, value: string) => {
    setCredentials({ ...credentials, [key]: value });
  };

  const handleSubmit = async () => {
    try {
      await signup(credentials);
      navigation.navigate("Signin");
    } catch (error) {
      console.error("Erreur d'inscription:", error);
    }
  };

  return (
    <View
      style={{
        display: "flex",
        gap: 10,
        padding: 20,
      }}
    >
      <Text>Inscription</Text>

      <TextInput
        label="Nom"
        value={credentials.name}
        onChangeText={(value) => handleChange("name", value)}
      />

      <TextInput
        label="Email"
        value={credentials.email}
        onChangeText={(value) => handleChange("email", value)}
      />

      <TextInput
        label="Mot de passe"
        value={credentials.password}
        secureTextEntry={true}
        onChangeText={(value) => handleChange("password", value)}
      />

      <Button onPress={handleSubmit} mode="contained">
        S'inscrire
      </Button>
    </View>
  );
};

export default SignupScreen;
