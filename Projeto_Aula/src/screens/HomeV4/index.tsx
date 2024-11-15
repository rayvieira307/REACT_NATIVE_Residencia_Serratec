import { FlatList, Image, ImageSourcePropType, Text, View } from "react-native";
import { DataAPI } from "../../Mock/Data";
import { styles } from "./style";

export const HomeV4 = () => {

  return (
    <CardApi listaFilmes= {DataAPI}/>
  )
}

interface PropsApi {
  id: number,
  name: string,
  age: number,
  image: ImageSourcePropType;
}

interface ArrayPropsApi {
  listaFilmes: PropsApi[]
}


const CardApi = ({listaFilmes}: ArrayPropsApi) => {
  return (
    <FlatList
    //horizontal = {true}
     data={listaFilmes}
     keyExtractor={item => item.id.toString()}
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



