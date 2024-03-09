import { Image, Text, TouchableOpacity, View } from "react-native";
import { Product } from "../../models/Product";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { MapPinIcon, StarIcon } from "react-native-heroicons/outline";

interface ProductItemProps {
  product: Product;
}

export default function ProductCard({ product }: ProductItemProps) {
  const [image, setImage] = useState<string | null>(null);
  const navigation = useNavigation();

  const navigateToProductDetail = (productId: number) => {
    navigation.navigate("ProductDetail", {
      productId: product.productId,
    });
  };

  useEffect(() => {
    if (product.image) {
      setImage(product.image.toString());
    }
    console.log("Image ISSSSS:", image);
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
      onPress={(productId) => navigateToProductDetail(productId)}
    >
      <Image
        source={{ uri: product.image }}
        className="h-24 w-40 rounded-t-3xl"
        onError={(error) => console.log("Image LOADING ERRROOORR:", error)}
        onLoad={(event) => console.log("Image loaded:", event.nativeEvent)}
      />

      <View className="px-3 pb-4 ">
        <Text className="font-bold text-md pt-2">{product.name}</Text>
        <View className="flex-row items-center space-x-1">
          {/* Assuming this icon component is available */}
          <StarIcon color="green" opacity={0.5} size={20} />
          <Text className="text-green-500">4.5</Text>
        </View>
        <View className="flex-row items-center space-x-1">
          {/* Assuming this icon component is available */}
          <MapPinIcon color="gray" opacity={0.4} size={20} />
          <Text className="text-xs text-gray-500">Nearly - location</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
