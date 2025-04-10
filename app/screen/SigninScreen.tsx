import { useContext, useState } from "react";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import AuthContext from "../context/AuthContext";
import useAuth from "../hooks/useAuth";

const SigninScreen = () => {
  const { signin } = useAuth();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (key: string, value: string) => {
    setCredentials({ ...credentials, [key]: value });
  };

  //  handlesubmit
  const handleSubmit = async () => {
    await signin(credentials);
  };
    


  return (
    <View
      style={{
        display: "flex",
        gap: 10,
        padding: 20,
      }}
    >
      <Text>Sign Screen</Text>

      {/* input email */}
      <TextInput
        label="Email"
        value={credentials.email}
        onChangeText={(value) => handleChange("email", value)}
      />
      {/* input password */}
      <TextInput
        label="Password"
        value={credentials.password}
        secureTextEntry={true}
        onChangeText={(value) => handleChange("password", value)}
      />
      {/* submit button */}
      <Button onPress={handleSubmit} mode="contained">
        Signin
      </Button>
    </View>
  );
};



export default SigninScreen;