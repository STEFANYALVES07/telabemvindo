import {
  StyleSheet,
  View,
  Image,
  useWindowDimensions,
  Text,
} from "react-native";

export default OnboardingItem = ({ item, onPress }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        style={[styles.image, { width, resizeMode: "contain" }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
});
