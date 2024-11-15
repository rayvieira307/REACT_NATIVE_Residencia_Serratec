import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },

  title: {
    color: "#00E",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 20,
    left: 10,
    transform: [{ translateY: -40 }],
  },

  Procurar: {
    position: "absolute",
    right: 5, 
    backgroundColor: "#ddd",
    width: "8%",
    marginBottom: 40,
    borderRadius: 20,
    transform: [{ translateY: -90 }],
  },

  Messenger: {
    position: "relative",
    left: 310,
    top: -90,
    flexDirection: "row",
    backgroundColor: "#ddd",
    width: "8%",
    borderRadius: 20,
  },

  navbar: {
    top: -90,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },

  imagePerfil: {
    top: -85,
    left: 15,
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  Pensamento: {
    flexDirection: "row",
    backgroundColor: "#ddd",
    width: "75%",
    height: "70%",
    padding: 10,
    borderRadius: 15,
    margin: 10,
    left: 70,
    top: -140,
  },

  EmbFoto: {
    top: -140,
    padding: 8,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 6,
    borderBottomColor: "#ddd",
  },

  imageIcones: {
    bottom: -4,
    right: 3,
    width: 20,
    height: 20,
    borderRadius: 20,
  },

  carrosselContainer: {
    marginTop: -120,
  },

  post: {
    position: "absolute",
  },

  carrosselImage: {
    width: 100,
    height: 150,
    marginLeft: 5,
    borderRadius: 20,
  },

  feed: {
    position: "static",
    borderTopWidth: 6,
    borderColor: "#ddd",
    marginTop: -400,
  },

  profile: {
    marginTop: 10,
    left: 15,
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  nomeUser: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
    position: "relative",
    left: 80,
    top: -45,
  },

  abaixoUser: {
    position: "relative",
    left: 80,
    top: -40,
  },

  ic: {
    position: "relative",
  },

  icFeed: {
    position: "relative",
    left: 350,
    top: -80,
  },
  ContainerFeed: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },


  FotoFeed: { 
    alignItems: 'center',
    width: 400,
    height: 300,
    top: -40,
    paddingRight: 50,
    paddingHorizontal: 10,
  },

  rodape: {
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    backgroundColor: '#ddd',
  },

  iconFooter: {
    left: 30,
    margin: 40,
    justifyContent: "space-around",
    alignItems: 'center',
    padding: 1,
  }
});
