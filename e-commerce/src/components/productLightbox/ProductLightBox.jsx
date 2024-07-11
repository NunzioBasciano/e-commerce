
import ShowBox from '../showbox/ShowBox';
import styles from './productLightBox.module.css';
import ThumbNail from '../thumbnail/ThumbNail';
import classNames from 'classnames';
import { useState } from 'react';

const products = [
    {
        id: self.crypto.randomUUID(),
        product: '../src/assets/images/image-product-1.jpg',
        thumbNail: '../src/assets/images/image-product-1-thumbnail.jpg',
    },
    {
        id: self.crypto.randomUUID(),
        product: '../src/assets/images/image-product-2.jpg',
        thumbNail: '../src/assets/images/image-product-2-thumbnail.jpg',
    },
    {
        id: self.crypto.randomUUID(),
        product: '../src/assets/images/image-product-3.jpg',
        thumbNail: '../src/assets/images/image-product-3-thumbnail.jpg',
    },
    {
        id: self.crypto.randomUUID(),
        product: '../src/assets/images/image-product-4.jpg',
        thumbNail: '../src/assets/images/image-product-4-thumbnail.jpg',
    }
]

function productLightBox() {

    const initialValue = products[0];
    const [selectedProduct, setSelectedProduct] = useState(initialValue);

    const handleClick = (id) => {
        const product = products.find((product) => product.id === id);
        setSelectedProduct(product);
    }

    return (
        <div className={styles.product_lightBox}>
            <ShowBox imgUrl={selectedProduct.product} />
            <ul className={classNames(styles.thumbNail_list)}>
                {products.map((product) => {
                    return (
                        <li key={product.id} onClick={() => handleClick(product.id)}
                        >
                            <ThumbNail isSelected={product.id === selectedProduct.id} thumbNail={product.thumbNail} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default productLightBox