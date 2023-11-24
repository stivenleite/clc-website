import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1rem 4rem;

    grid-area: header;

    > img {
        width: 9rem;

        filter: grayscale(100%) brightness(35%);

        cursor: pointer;

        transition: all .2s ease-in-out;
    }

    > img:hover {
        filter: grayscale(0%) brightness(60%);
    }

    > ul {
        display: flex;
        align-items: center;
        gap: 2rem;

        li {
            font-size: 2rem;

            transition: all .2s ease-in-out;

            a {
                color: ${({theme}) => theme.colors.dark300};
            }

        }

        li:hover {
            transform: scale(1.1);
        }
    }
`;