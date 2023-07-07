import { products } from "../Products"

export default function getProduct(productId: number) {
    return new Promise((resolve, reject) => {
        const foundProduct = products.find(
            item => item.id === productId
        )

        setTimeout(() => {
            if (foundProduct) {
                resolve(foundProduct)
            } else {
                reject('Product not found')
            }
        }, 1000)
    })
}