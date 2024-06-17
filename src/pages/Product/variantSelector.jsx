import React from "react";
import { TEST_PRODUCT_VAR } from "../../assets/assets";

const VariantSelector = ({ orientation = 'horizontal', variantList = [], setVariant }) => {

    return (
        <>
            {
                orientation === 'vertical' && (
                    <div className="d-flex flex-column variant-thumbnail-container">
                        {variantList.map((variant, i) => (
                            <img src={TEST_PRODUCT_VAR}
                                alt={variant?.altText}
                                key={i}
                                className="variant-thumbnail"
                                onClick={() => setVariant({ variantId: '2', variantURL: TEST_PRODUCT_VAR })} />
                        ))}
                    </div>

                )
            }

            {
                orientation === 'horizontal' && (
                    <div className="product_variations-row">
                        {variantList.map((variant, i) => (
                            <img src={TEST_PRODUCT_VAR}
                                alt={variant?.altText}
                                key={i}
                                className="row-variant-thumbnail"
                                onClick={() => setVariant({ variantId: '3', variantURL: TEST_PRODUCT_VAR })}
                            />
                        ))}
                    </div>

                )
            }
        </>
    );

}

export default VariantSelector;