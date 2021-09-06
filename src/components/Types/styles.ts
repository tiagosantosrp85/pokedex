import styled, { css } from 'styled-components';
import { prop, switchProp } from 'styled-tools';

interface BgProps {
  type?: string;
}

export const Container = styled.div`
  h1 {
    padding-bottom: 50px;
  }

  h1::after {
    content: '';
    width: 360px;
    height: 4px;
    background: #ff0000;
    display: block;
    margin: 0 auto;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
  justify-content: center;

  & > div {
    margin-left: 30px;
    padding-top: 30px;
  }
`;

export const Pokemon = styled.div<BgProps>`
  border-radius: 20px;
  width: 300px;
  height: 300px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${switchProp(prop('type'), {
    psíquico: css`
      background-image: url('https://img.ibxk.com.br/2020/01/13/13001138221016.jpg');
    `,
    planta: css`
      background-image: url('https://i.pinimg.com/736x/91/11/f5/9111f5e16609ecad1416a93285d2de94.jpg');
    `,
    Dragon: css`
      background-image: url('https://i.pinimg.com/originals/c8/c7/1d/c8c71d7ec31fa007b366183ffbf63386.jpg');
    `,
    Dark: css`
      background-image: url('http://static.tumblr.com/e85a61bd4414c14d8655988f0d1300fb/sdruv0q/fbDmnfx3k/tumblr_static_chandelure_by_rileykitty-d635jck.png');
    `,
    Eletric: css`
      background-image: url('https://static.meionorte.com/uploads/imagens/2021/7/14/thumb/r-1200-800-q-90-irmaos-sao-atingidos-por-raio-durante-selfie-sob-arvore-em-tempestade-0dee20b4-989a-4be7-b51a-a271e00010ec.jpg');
    `,
    Surprise: css`
      background-image: url('https://steamuserimages-a.akamaihd.net/ugc/954101770866294023/CE055860BD8FDF788E58B3C3FA440CAB8B605290/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false');
    `,
    Fly: css`
      background-image: url('https://pbs.twimg.com/media/EYtf32bXQAYQEE7.jpg');
    `,
  })} img {
    max-width: 100%;
    object-fit: cover;
  }
`;
