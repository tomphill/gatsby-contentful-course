import React from "react";
import {
    PriceOption,
    PriceGroupWrapper,
    PriceOptionInner,
    MostPopularLabel,
} from "./style";
import { RichText } from "components";

export const PriceGroup = ({ priceOptions }) => {
    console.log(priceOptions);
    return (
        <PriceGroupWrapper>
            {priceOptions.map((priceOption) => (
                <PriceOption key={priceOption.id}>
                    <PriceOptionInner isMostPopular={priceOption.mostPopular}>
                        {!!priceOption.mostPopular && (
                            <MostPopularLabel>Most popular</MostPopularLabel>
                        )}
                        <h2>{priceOption.title}</h2>
                        <h3>£{priceOption.amountPerMonth} / month</h3>
                        <RichText raw={priceOption.description.raw} />
                    </PriceOptionInner>
                </PriceOption>
            ))}
        </PriceGroupWrapper>
    );
};
