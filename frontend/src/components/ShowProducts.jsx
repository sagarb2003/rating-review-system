import { Products } from "../products";
import { useState } from "react";
import { AddReview } from "./AddReview";
import { ShowAllReviews } from "./ShowAllReviews";

export const ShowProducts = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showReviews, setShowReviews] = useState(false);

    return (
        <div className="min-h-screen flex flex-col items-center p-6">
            <h1 className="text-2xl font-semibold mb-6">All Products</h1>
            <div className="w-full max-w-3xl grid grid-cols-1 gap-6">
                {Products.map((product) => (
                    <div
                        key={product.product_id}
                        className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-between gap-4"
                    >
                        <div className="flex items-center gap-4">
                            <div className="flex flex-col gap-2">
                                <button
                                    onClick={() => setSelectedProduct(product.product_id)}
                                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm"
                                >
                                    Add Review
                                </button>
                                <button
                                    onClick={() => {
                                        setSelectedProduct(product.product_id);
                                        setShowReviews(true);
                                    }}
                                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded hover:bg-gray-200 text-sm"
                                >
                                    Show Reviews
                                </button>
                            </div>
                            <img
                                src={product.product_image}
                                alt={product.product_name}
                                className="w-24 h-24 object-cover rounded"
                            />
                            <p className="text-sm text-gray-700">{product.product_description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {selectedProduct && !showReviews && (
                <AddReview
                    productId={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}

            {selectedProduct && showReviews && (
                <ShowAllReviews
                    productId={selectedProduct}
                    onClose={() => {
                        setSelectedProduct(null);
                        setShowReviews(false);
                    }}
                />
            )}
        </div>
    );
};
