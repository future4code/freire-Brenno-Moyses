import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import EmailPhoto from './img/email.png';
import LocalizationPhoto from './img/localization.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://firebasestorage.googleapis.com/v0/b/air-nfts-storage.appspot.com/o/nft-images%2F20220116%2FAlpha_Primate_216_1642351019631.png?alt=media&token=245445eb-44ea-4347-9e72-53bb06f53f52" 
          nome="Brenno Boechat" 
          descricao="Oi, eu sou o Brenno Boechat e tenho 22 anos. Sou estudante front-end na Labenu, já fiz faculdade de Biomedicina durante 5 períodos."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div classNames="page-section-contaiener">
        <CardPequeno
        imagem={EmailPhoto}
        imagem2={LocalizationPhoto}
        email="BrennoBoechat@hotmail.com"
        localization="Rio de Janeiro"
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
