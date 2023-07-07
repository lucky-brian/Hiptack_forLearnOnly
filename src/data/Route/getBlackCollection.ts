import { products } from "../Products"

export default function getBlackCollectionProduct() {
    return new Promise((resolve, reject) => {
        const foundProduct = products.filter(product => product.collection === 'black')

        setTimeout(() => {
            if (foundProduct) {
                resolve(foundProduct)
            } else {
                reject('Product not found')
            }
        }, 1000)
    })
}