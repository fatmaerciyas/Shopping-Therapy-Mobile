import { Image, Text, TouchableOpacity, View } from "react-native";
import { Product } from "../../models/Product";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";
import { useEffect, useState } from "react";

interface ProductItemProps {
  product: Product;
}

export default function ProductCard({ product }: ProductItemProps) {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    if (product.image) {
      setImage(product.image.toString());
    }
  }, [product.image]);

  return (
    <TouchableOpacity
      style={{
        shadowColor: "black",
        shadowRadius: 8,
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.8,
        elevation: 5,
        borderRadius: 5,
      }}
      className="bg-white mr-3 rounded-3xl my-2"
    >
      {/* <Image source={{ uri: product.image }} className="h-36 w-64 rounded-sm" /> */}
      {/* <Image source={require(`./assets/${product.image}`)} style={{ width: 150, height */}
      {image && (
        <Image
          source={require("../../assets/images/items/s2.jpg")}
          className="h-36 w-64 rounded-t-3xl"
          onError={(error) => console.log("Image loading error:", error)}
        />
      )}
      <View className="px-3 pb-4 ">
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
