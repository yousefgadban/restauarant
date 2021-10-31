import React from "react";
import { PriceNav } from "../PriceNav/PriceNav";
import { RestDescription } from "./RestDescription";
import { RestImages } from "./RestImages";
import { RestMenu } from "./RestMenu";

export const Restaurant = () => {


    return (
        <div>
            <RestImages />
            <RestDescription />
            <RestMenu />
            <div style={{position: 'sticky', bottom: '0px'}}>
                <PriceNav />
            </div>

        </div>
    );
}