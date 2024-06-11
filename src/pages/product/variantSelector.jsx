import React from "react";

const VariantSelector = ({ orientation = 'horizontal', variantList = [], setVariant }) => {

    return (
        <>
            {
                orientation === 'vertical' && (
                    <div className="d-flex flex-column variant-thumbnail-container">
                        {variantList.map((variant) => (
                            <img src={"https://babysonbroadway.com/wp-content/uploads/2023/12/1333544353.jpg"}
                                alt={variant?.altText}
                                className="variant-thumbnail"
                                onClick={() => setVariant({ variantId: '2', variantURL: "https://babysonbroadway.com/wp-content/uploads/2023/12/1333544353.jpg" })} />
                        ))}
                    </div>

                )
            }

            {
                orientation === 'horizontal' && (
                    <div className="product_variations-row">
                        {variantList.map((variant) => (
                            <img src={"https://babysonbroadway.com/wp-content/uploads/2023/12/1333544353.jpg"}
                                alt={variant?.altText}
                                className="row-variant-thumbnail"
                                onClick={() => setVariant({ variantId: '3', variantURL: "https://babysonbroadway.com/wp-content/uploads/2023/12/1333544353.jpg" })}
                            />
                        ))}
                    </div>

                )
            }
        </>
    );

}

export default VariantSelector;