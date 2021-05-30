import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
#root {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.flex {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
}

.card-list {
    display: inline-block;
}

.card {
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    background: #e7e9eb;
    flex: 1;
    margin: 1rem;
    padding: 1rem;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

/* Add some padding inside the card container */
.container {
    padding: 2px 16px;
}
`;

export default GlobalStyle;