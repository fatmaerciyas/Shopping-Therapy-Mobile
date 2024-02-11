import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";

export default function BackButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      className="rounded-full h-8 w-8 shadow-xl "
    >
      <ChevronLeftIcon size="30" color="#00CCBB" />
    </TouchableOpacity>
  );
}
