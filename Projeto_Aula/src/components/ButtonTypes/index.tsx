import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

interface PropsButton {
  title: string | number;
  propsBackgroundColor?: string;
  handleFunction: () => void;
  /* PropsRecord: any;*/
}
interface Props1 {
  title: string;
}

type Props2 = {
  subTitle: string;
}

// Conceitos intersection ou extends
type PropsAll = Props1 & Props2;
interface PropsAll2 extends Props1, Props2 {}

// Conceitos Pick: pegar uma informação específica de uma interface
type PropsPick = Pick<Props1, 'title'>

//Conceitos Omit: excluir uma informação específica de uma interface
type PropsOmit = Omit<Props1, 'title2'>

//Record: definir um tipo com um conjunto de chaves e valores de uma so vez
type PropsRecord = Record<'name' | 'endereco' | 'bairro', string>

// K => key
//V => value
function tipoGenerico<T> (args : T) {
  return args;
}
export const ButtonTypes = ({title, propsBackgroundColor, handleFunction}: PropsButton) => {

/*  const example = tipoGenerico({name: 'Rayssa', bairro: 'Bairro X'}); */

  return (
    <TouchableOpacity
      onPress={handleFunction}
      activeOpacity={0.2}
      style={[styles.styleButton,
         {
          backgroundColor: propsBackgroundColor ? propsBackgroundColor : "#000",
        
         },
      ]}
    >
      <Text style={styles.text}>
        {title}
      </Text>

    </TouchableOpacity>
  )
}