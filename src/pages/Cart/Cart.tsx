import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem } from "../../store/slices/cartSlice";
import { RootState } from "../../store/store";
import { BiCart, BiTrash } from 'react-icons/bi'
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { toastOption } from "../../toastOption/toastOption"
import { useEffect, useState } from "react";


export default function Cart() {
    const cart = useSelector((state: RootState) => state.cart)
    const dispatch = useDispatch()
    const [totalPrice, setTotalPrice] = useState(0)

    const handleDeleteItem = (itemId: number) => {
        dispatch(deleteCartItem(itemId));
        toast.success("Item deleted from cart", toastOption);
    };
    useEffect(() => {
        if (cart) {
            getTotalPrice();
        }
    }, [cart])

    const getTotalPrice = () => {
        let totalPrice = 0;
        cart.forEach((item) => {
            totalPrice += item.price * item.quantity;
        });
        setTotalPrice(totalPrice);
    }

    return (
        <div className='cart text-xl pt-16 w-2/3 m-auto'>
            <div className="flex flex-col justify-center">
                <div className="py-5">
                
                </div>

                <div>
                    {
                        cart.length === 0 ? <p className='text-center'>Cart is empty</p>
                            :
                            cart.map((item, index) =>
                                <div key={index} className='cart-body flex justify-between gap-5 border-b p-1 py-2 my-1'>
                                    <div className="flex gap-2">
                                        <img src={item.image} className="w-28 h-28 object-cover" alt="" />
                                        <p>{item.name}</p>
                                    </div>

                                    <div className="flex gap-5 items-center">
                                        <div className="text-center">
                                            <p className="text-gray-600">size</p>
                                            <p>{item.size}</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-gray-600">price</p>
                                            <p>฿{item.price * item.quantity}</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-gray-600">amount</p>
                                            <p>{item.quantity}</p>
                                        </div>
                                        <div>
                                            <p
                                                onClick={() => handleDeleteItem(item.id)}
                                                className="hover:text-red-600"
                                            >
                                                <BiTrash size={23} />
                                            </p>
                                        </div>
                                    </div>
                                </div>)
                    }
                </div>
                <div className="">
                    <div className="flex justify-end items-center gap-2 h-24">
                        <p>Total <span>฿{totalPrice}</span></p>
                        <button
                            className="p-1 px-5 bg-gray-200 rounded-sm hover:bg-black hover:text-white"
                        >Check Out</button>
                    </div>
                </div>
                <ToastContainer />
            </div>

        </div>
    )
}