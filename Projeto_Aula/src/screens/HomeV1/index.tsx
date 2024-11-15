import { FlatList, Image, Text, View } from "react-native";
import { DataAPI } from "../../Mock/Data";
import { styles } from "./style";

export const HomeV1 = () => {

  return (
    <FlatList
     //horizontal = {true}
      data={DataAPI}
      keyExtractor={dados => dados.id.toString()}
      renderItem={({ item }) =>
        <View style={styles.container}>
          <View style={styles.boxCard}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.age}>{item.age}</Text>
            <Image style={styles.avatar} source={item.image} alt="Avatar de perfil" />
          </View>
        </View>
      }
    />
  )
}




