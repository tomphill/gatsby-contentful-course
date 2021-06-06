import styled from "styled-components";

export const HeroWrapper = styled.div`
    width: 100%;
    height: 100vh;
    > div:first-child {
        height: 100%;
    }
`;

export const HeadingWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    > div {
        margin: auto;
        padding: 16px;
        max-width: 1000px;
        text-align: center;
        line-height: 1.5;
    }
`;

export const Heading = styled.div`
    margin: auto;
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;
`;

export const SubHeading = styled.div`
    max-width: 500px;
    margin: 0 auto;
`;
