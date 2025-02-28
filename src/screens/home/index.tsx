import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import { theme } from "../../theme";
import icons from "../../theme/icons";
import { useNavigation } from '@react-navigation/native';
import CalendarHome from "../calendar";
import Caroousel from "../../components/carousel/carousel";

export default function Home() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
          <Image style={styles.img} source={icons.person} />
          </TouchableOpacity>
            <Text style={styles.text}>Livia Vaccaro</Text>
          <TouchableOpacity onPress={() => navigation.navigate("config")}>
        <Feather
          name="settings"
          size={24}
          color={theme.colors.WHITE}
        />
        </TouchableOpacity>
        </View>

        <Caroousel/>
        
        <CalendarHome/>
       
      </View>
  );
}
