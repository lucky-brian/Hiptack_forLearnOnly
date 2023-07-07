import React from "react";
interface ModalProps {
    showModal: boolean;
    title: string;
    msg: string;
    setShowModal: (showModal: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ showModal, setShowModal, title ,msg}) => {
    if (!showModal) {
        return null;
    }
    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto p-2 my-6 mx-auto">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <p className="text-black text-lg">
                                        {title}
                                    </p>
                                </div>
                                {/*body*/}
                                <div className="relative py-2 px-2 flex-auto">
                                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                        {msg}
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}

export default Modal;