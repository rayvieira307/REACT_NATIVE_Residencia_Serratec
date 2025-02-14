import { FlatList, Image, ImageSourcePropType, Text, View } from "react-native";
import { DataAPI } from "../../Mock/Data";
import { styles } from "./style";

export const HomeV2 = () => {

  return (
    <FlatList
     //horizontal = {true}
      data={DataAPI}
      keyExtractor={dados => dados.id.toString()}
      renderItem={({ item }) =>

        <View style={styles.container}>
         <CardApi data= {item}/>
        </View>
      }
    />
  )
}

interface PropsApi {
  data: {
    name: string,
    age: number,
    image: ImageSourcePropType;
  }
}

const CardApi = ({data}: PropsApi) => {
  return (
    <View style={styles.boxCard}>
    <Text style={styles.name}>{data.name}</Text>
    <Text style={styles.age}>{data.age}</Text>
    <Image style={styles.avatar} source={data.image} alt="Avatar de perfil" />
  </View>
  )
}




