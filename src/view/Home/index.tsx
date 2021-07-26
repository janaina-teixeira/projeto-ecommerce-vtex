import React, { useState, useEffect }from 'react';


import Cart from '../../assets/cart.png';
import topo from '../../assets/logoH.png';
import colecao from '../../assets/OG-Colecoes-facebook.png';

import { Container} from './style';

import api from '../../services/api';
import { promised } from 'q';
import { NumberLiteralType } from 'typescript';

interface IProduct{
    id: number;
    photo: string;
    name: string;
    description: string;
    price: number;
}
interface Test {
    cart: IProduct[]
  }

const Home: React.FC = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const [cart, setCart] = useState<IProduct[]>([]);
  useEffect(() =>{
      api.get('').then(
          response=> {
              setData(response.data)
          }
      )
  })

    const handleCart = (index: number) => {
        let product = data[index]
        let push: any = [...cart, cart.push(product)]
        setCart(push)
        const productStore = JSON.stringify(cart);
        localStorage.setItem('@cart', productStore)
    }
  return (
      <Container>
        <div className="nav">
            <div>
             <img src={topo} alt="vtex" width="300px" height="auto" />
            </div>
            <div className="cart">
                <img src={Cart} alt="shopcart" width="50px" height="auto" />
                <span>( {cart.length} ) - Itens</span>
            </div>
        </div>


        <div id="all">
            <ul className="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">Ofertas</a></li>
                <li><a href="#">Planos</a></li>
                <li><a href="#">Dúvidas</a></li>
            </ul>
        </div>



          <section>
              {data.map( (prod, index) =>(
                <div className ="product-content" key={prod.id}>
                    <img src = {prod.photo} alt= "Livro Esconde esconde com o Sapo" width = "200px" height = "auto"/>
                    <h4> {prod.name}</h4>
                    <span> {prod.description}</span>
                    <h6>{prod.price}</h6>
                    <button className="btn" onClick={ ()=> handleCart(index) }>Adicionar ao Carrinho</button>
                </div>
              ))}
              
          </section>
          <div className="colecoes">
            <img src={colecao} alt="vtex" width= "101%"/>
          </div>
            <footer>
                <p>Todos os direitos reservados. By Janaina Teixeira - Gama Academy- Hiring Coders</p>
            </footer>
      </Container>
  );

}

export default Home;
