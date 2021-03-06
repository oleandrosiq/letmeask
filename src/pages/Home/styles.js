import styled from 'styled-components';

export const Auth = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
  color: ${props => props.theme.colors.primary};

  aside {
    flex: 7;

    background: #835afd;
    color: #fff;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 120px 80px;

    img {
      max-width: 320px;
    }

    strong {
      font: 700 36px 'Poppins', sans-serif;
      line-height: 42px;
      margin-top: 16px;
    }

    p {
      font-size: 24px;
      line-height: 32px;
      margin-top: 16px;
      color: #f8f8f8;
    }
  }

  main {
    flex: 8;

    padding: 0 32px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .main-content {
    width: 100%;
    max-width: 320px;

    display: flex;
    flex-direction: column;
    align-items: stretch;

    text-align: center;

    > img {
      align-self: center;
    }

    h2 {
      font-size: 24px;
      margin: 64px 0 24px;
      font-family: 'Poppins', sans-serif;
    }
    
    > form {
      input {
        height: 50px;
        padding: 0 16px;

        background: #fff;
        border-radius: 8px;
        border: 1px solid #a8a8b3;

        color: #333;
      }

      button {
        margin-top: 16px;
      }

      button, input {
        width: 100%;
      }
    }

    > p {
      font-size: 14px;
      color: #737380;
      margin-top: 16px;

      a {
        color: #e559f9;
      }
    }
  }

  .create-room {
    height: 50px;
    
    font-weight: 500;
    color: #fff;
    
    background: #ea4335;
    border-radius: 8px;
    border: 0;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    margin-top: 64px;
    cursor: pointer;

    transition: filter .2s;

    img {
      margin-right: 8px;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }

  .separator {
    font-size: 14px;
    color: #a8a8b3;

    margin: 32px 0;
    display: flex;
    align-items: center;

    &::before {
      content: '';
      flex: 1;
      height: 1px;
      background: #a8a8b3;
      margin-right: 16px;
    }

    &::after {
      content: '';
      flex: 1;
      height: 1px;
      background: #a8a8b3;
      margin-left: 16px;
    }
  }
`;