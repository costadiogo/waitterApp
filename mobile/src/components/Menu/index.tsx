import { FlatList } from 'react-native';


import { formatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';
import { Text } from '../Text';
import { ProductModal } from '../ProductModal';

import { ProductContainer, ProductImage, ProductDetails, Separator, AddToCartButton } from './styles';
import { useState } from 'react';
import { Product } from '../../types/Product';

interface MenuProps {
    onAddToCart: (product: Product) => void;
    products: Product[];
}

export function Menu({ onAddToCart, products }: MenuProps) {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<null | Product>(null);

    function handleOpenModal(product: Product) {
        setIsModalVisible(true);
        setSelectedProduct(product);
    }

    return (
        <>
            <ProductModal
                visible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
                product={selectedProduct}
                onAddToCart={onAddToCart}
            />
            <FlatList
                style={{ marginTop: 32 }}
                contentContainerStyle={{ paddingHorizontal: 24}}
                data={products}
                keyExtractor={product => product._id}
                ItemSeparatorComponent={Separator}
                renderItem={({ item: product }) => (
                    <ProductContainer onPress={() => handleOpenModal(product)}>
                        <ProductImage source={{ uri: `http://10.0.0.185:8080/uploads/${product.imagePath}` }} />
                        <ProductDetails>
                            <Text weight='600'>{product.name}</Text>
                            <Text size={14} color='#666' style={{ marginVertical: 8 }}>{product.description}</Text>
                            <Text size={14} weight='600'>{formatCurrency(product.price)}</Text>
                        </ProductDetails>

                        <AddToCartButton onPress={() => onAddToCart(product)}>
                            <PlusCircle />
                        </AddToCartButton>
                    </ProductContainer>
                )}
            />
        </>
    );
}
