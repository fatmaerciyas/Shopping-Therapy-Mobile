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

import Categories from "../components/category/categories";
import BackButton from "../components/common/backButton";
import FeaturedRow from "../components/home/featuredRow";
import * as Icon from "react-native-feather";
import Footer from "../components/home/footer";
import Slide from "../components/home/slide";

export default function Home() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="pt-5 mb-32 bg-white">
      <BackButton />
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-2 space-x-2">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-lg">OneStopShop</Text>
        </View>
        <UserIcon size={30} color="#00CCBB" />
      </View>
      {/* End of Header */}

      {/* Searchbar */}
      <View className="flex-row items-end space-x-2 pb-2 mt-1 mx-2">
        <View className="flex-row flex-1 items-center pb-1 gap-2 bg-gray-100 rounded-full mx-1 px-2">
          <Icon.Search height="18" width="18" stroke="gray" />
          <TextInput placeholder="Search..." className="flex-1 shadow-lg" />
          <View className="flex-row items-center space-x-1 border-l pl-1 border-l-gray-400">
            <Icon.Mic height="20" width="20" stroke="gray" />
          </View>
        </View>
        <View className="shadow-lg border border-gray-100 rounded-full p-1 ">
          <AdjustmentsHorizontalIcon size={30} color="#00CCBB" />
        </View>
      </View>
      {/* End of Searchbar */}

      {/* Body */}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 8,
        }}
        className="bg-gray-100 pb-24"
      >
        <View>
          <Slide />
        </View>

        {/* Categories */}
        <Categories />
        {/* End of Categories */}

        {/* Featured Row */}
        <FeaturedRow
          id="123"
          title="News"
          description="Loreem ipsum dolor sit amet"
        />

        {/* Discounts */}
        <FeaturedRow
          id="1234"
          title="Popular"
          description="Loreem ipsum dolor sit amet"
        />

        {/* Offers */}
        <FeaturedRow
          id="12345"
          title="Offers near you!"
          description="Loreem ipsum dolor sit amet"
        />
      </ScrollView>

      {/* Footer */}
      <View className="flex-row items-center space-x-2 p-12">
        <Footer />
      </View>
    </SafeAreaView>
  );
}
