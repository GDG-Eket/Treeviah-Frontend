import styled from "styled-components";

export const ModalContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
  `  

  export const CardGrid = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    justify-content: center;
    align-items: center;
    gap: 10px;
  `