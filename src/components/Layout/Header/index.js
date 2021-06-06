import React from "react";
import { HeaderInner, HeaderWrapper } from "./style";
import Menu from "./Menu";

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderInner>
                <Menu />
            </HeaderInner>
        </HeaderWrapper>
    );
};

export default Header;
