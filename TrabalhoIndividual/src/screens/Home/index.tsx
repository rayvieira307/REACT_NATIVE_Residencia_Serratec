import React from "react";
import { View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from "./style";
import ImagePerfil from "../../../assets/FotoPerfil.jpg";
import Photo from "../../../assets/photo.png";
import Location from "../../../assets/localizacao.png";
import Smile from "../../../assets/smile.png";
import { FlatList } from "react-native";
import { ScrollView } from "react-native";
import Feed from "../../../assets/Fenomeno.jpg";

export default function Home() {
  

  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>facebook</Text>
      <View>
        <Icon
          style={styles.Procurar}
          name="magnify"
          size={30}
          color="#000"
        />
        <Icon
          style={styles.Messenger}
          name="facebook-messenger"
          size={30}
          color="#000"
        />
      </View>
      <View style={styles.navbar}>
        <Icon name="home" size={30} color="#000" />
        <Icon name="video" size={30} color="#000" />
        <Icon name="account-multiple" size={30} color="#000" />
        <Icon name="storefront" size={30} color="#000" />
        <Icon name="bell" size={30} color="#000" />
        <Icon name="menu" size={30} color="#000" />
      </View>

      <View>
        <Image
          style={styles.imagePerfil}
          source={ImagePerfil}
          alt="Imagem de perfil"
        />
        <Text style={styles.Pensamento}> No que você está pensando? </Text>
      </View>

      <View style={styles.EmbFoto}>
        <Text>
          <Image style={styles.imageIcones} source={Photo} alt="Photo" />
          Photo
        </Text>

        <Text>
          <Image style={styles.imageIcones} source={Smile} alt="Smile" />
          Feeling
        </Text>

        <Text>
          <Image style={styles.imageIcones} source={Location} alt="Location" />
          Location
        </Text>
      </View>

       <ScrollView
       horizontal
       showsHorizontalScrollIndicator={false}
       style={styles.carrosselContainer}
      >
       <Image source={ImagePerfil} style={styles.carrosselImage} />
       <Image source={ImagePerfil} style={styles.carrosselImage} />
       <Image source={ImagePerfil} style={styles.carrosselImage} />
       <Image source={ImagePerfil} style={styles.carrosselImage} />
       <Image source={ImagePerfil} style={styles.carrosselImage} />
       <Image source={ImagePerfil} style={styles.carrosselImage} />
      </ScrollView> 
      
   <ScrollView style={styles.feed}>
    <View style={styles.post}>
        <Image source={ImagePerfil} style={styles.profile} />
        <Text style={styles.nomeUser}>Gabigol.</Text>
        <Text style={styles.abaixoUser}>8h . <Icon style= {styles.ic} name="earth" size={20} color="#a5a4a4" /> </Text>
        <Icon style= {styles.icFeed} name="dots-horizontal" size={20} color="#000" />
        <Image source={Feed} style={styles.FotoFeed} />
        
          <Text style = {styles.rodape}>
           <Icon style= {styles.iconFooter} name="menu" size={30} color="#000" />
           <Icon style= {styles.iconFooter} name="circle-outline" size={30} color="#000" />
           <Icon style= {styles.iconFooter} name="menu-left" size={30} color="#000" />
          </Text>
     

    </View>
      
    </ScrollView> 
 </View>

  );
}




