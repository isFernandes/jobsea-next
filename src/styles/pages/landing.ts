import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  color: var(--white-color);
  background-color: var(--white-color);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 32rem;
  border: 1.5px solid var(--primary-color); //#3490dc
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.42);
  color: black;
  border-radius: 1rem;
  z-index: 2;
  padding: 20px;
`;

export const AlignContentForm = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 15px;
`;
