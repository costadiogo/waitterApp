import { FlatList } from 'react-native';

import { products } from '../../mocks/products';
import { formatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';
import { Text } from '../Text';

import { Product, ProductImage, ProductDetails, Separator, AddToCartButton } from './styles';

export function Menu() {
    return (
        <FlatList
            style={{ marginTop: 32 }}
            contentContainerStyle={{ paddingHorizontal: 24}}
            data={products}
            keyExtractor={product => product._id}
            ItemSeparatorComponent={Separator}
            renderItem={({ item: product }) => (
                <Product>
                    <ProductImage source={{ uri: `http://10.0.0.185:8080/uploads/${product.imagePath}` }} />
                    <ProductDetails>
                        <Text weight='600'>{product.name}</Text>
                        <Text size={14} color='#666' style={{ marginVertical: 8 }}>{product.description}</Text>
                        <Text size={14} weight='600'>{formatCurrency(product.price)}</Text>
                    </ProductDetails>

                    <AddToCartButton>
                        <PlusCircle />
                    </AddToCartButton>
                </Product>
            )}
        />
    );
}
