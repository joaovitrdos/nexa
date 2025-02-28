import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import icons from "../../theme/icons";


function Header() {
    return <View style={styles.header}>
        <Image style={styles.logo} source={icons.logo} />
    </View>
}

export default Header;