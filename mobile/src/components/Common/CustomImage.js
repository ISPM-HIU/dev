import { Image } from "expo-image";

const CustomImage = ({ style = {}, src }) => {
  return <Image style={{ ...style }} source={src} contentFit="cover" />;
};

export default CustomImage;