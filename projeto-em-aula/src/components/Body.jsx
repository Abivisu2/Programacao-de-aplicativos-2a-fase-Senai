import "./Body.css";
import Comprar from "./Comprar";

function Body() {
  return (
    <div>
      <div className="marca-placa">
        <div className="title">
          <h1 className="title-um">Nova cara, nova gestão</h1>
        </div>
        <div className="elementos">
          <img
            className="secaoUm-LogoMaior"
            src="public/images/farmarcia.png"
            alt=""
          />
          <img
            className="placa-publicidade"
            src="public/images/farmarcia-placa.PNG.png"
            alt=""
          />
        </div>
      </div>

      <div className="produtos">

        <div className="title-produtos">
          <h1 className="title-promocao">Produtos em promoção</h1>
        </div>

        <div className="camisetas">
          <img src="public/images/farmarcia-camiseta.PNG.png" alt="" />

          <img src="public/images/farmarcia-camisetas.PNG.png" alt="" />


        </div>
        <div className="button">
        <Comprar/>
        </div>

        <div className="cartoes">

          <h1 className="cartoes-promo">Pega um cartão, ganhe descontos!</h1>
          <img className="cartao-img" src="public/images/farmarcia-cartoes.PNG.png" alt="" />
        </div>

      </div>
    </div>
  );
}

export default Body;
