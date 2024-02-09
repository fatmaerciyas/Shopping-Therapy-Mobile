import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import {
  Text,
  SafeAreaView,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import {
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import BackButton from "../Components/backButton";
import Categories from "../Components/categories";

export default function Home() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="pt-5 bg-white">
      <BackButton />
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-2 space-x-2">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
          <Text className="font-bold text-lg">
            Current Location
            <ChevronDownIcon size={16} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={30} color="#00CCBB" />
      </View>
      {/* End of Header */}

      {/* Searchbar */}
      <View className="flex-row items-center gap-2 pb-2 mx-2">
        <View className="flex-row flex-1 gap-2 bg-gray-100 rounded-xl mx-2">
          <MagnifyingGlassIcon size={18} color="#9B9B9B" />
          <TextInput placeholder="Search..." keyboardType="default" />
        </View>
        <AdjustmentsHorizontalIcon size={28} color="#00CCBB" />
      </View>
      {/* End of Searchbar */}

      {/* Body */}
      <ScrollView className="bg-gray-100 pb-24">
        <Categories />
      </ScrollView>
    </SafeAreaView>
  );
}
