import { Image, Text, TouchableOpacity, View } from "react-native";
import { Product } from "../../models/Product";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";

interface ProductItemProps {
  product: Product;
}

export default function ProductCard({ product }: ProductItemProps) {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
      {/* <Image source={{ uri: product.image }} className="h-36 w-64 rounded-sm" /> */}
      {/* <Image source={require(`./assets/${product.image}`)} style={{ width: 150, height */}
      <Image source={{ uri: product.image }} className="h-36 w-64 rounded-lg" />
      <View className="px-3 pb-4">
        <Text className="font-bold text-md pt-2">{product.name}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={20} />
          <Text className="text-green-500">4.5</Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <MapPinIcon color="gray" opacity={0.4} size={20} />
          <Text className=" text-xs text-gray-500">Nearly - location</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
//we sended this imgUrl = {urlFor(category.image).url()}
