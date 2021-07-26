import styled from 'styled-components';

export const Container =  styled.div `
    width: 80%;
    margin: auto;
         
    .nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100px;
        
        .cart{
        display: flex;
        justify-content: center;
        align-items: center;
        }
               
    }

    section{
        height: 150vh;
        width: 100%;
        background: #e6e6e6;
        display: grid;
        justify-content: space-around;
        padding: 12px;
        border-radius: 6px;
    
        grid-template-columns: auto auto auto auto;
        grid-gap: 25px 25px 25px 25px;

        @media (max-width: 1100px){
            height: 100%;
            width: 100%;
            display: grid;
            justify-content: space-around;
            grid-template-columns: auto auto;
            grid-gap: 25px 25px;
        }
        @media (max-width: 600px){
            height: 100%;
            width: 100%;
            display: grid;
            justify-content: space-around;
            grid-template-columns: auto;
            grid-gap: 25px;
        }
        
        .btn{
            padding: 8px 8px;
            border-radius: 7px;
            background-color: #01aeba;
            box-shadow: 0 3px 0 #f89500;
            border: 2px solid ;
            color: #fff;
            cursor: pointer;
            outline: none;
            font-family: Mikado,Arial,sans-serif;
            font-size: 17px;
        }

    .product-content{
        dyplay: grid;
        text-align: center;
        height: 350px;
        width: auto;
        max-width: auto;
        background: #fff;
        border-radius:12px;
        padding: 20px;
        font-family: Mikado,Arial,sans-serif;
        -webkit-font-smoothing: antialiased;
        margin: 25px;
        background-color: rgb(255, 255, 255);
        font-size: 20px;
              
        box-shadow: 0 10px 30px rgb(1 174 186 / 20%);
          
    }

        
        
    }


    }
    a{ text-decoration: none; color: #000; }
    a:hover{ }

    #all{
    width: 101%;
    margin: auto;
    height: 80px;
    line-height: 80px; /* centraliza na vertical */
    border-radius: 6px;
    background-color: #01aeba;
    
}
ul.menu{
    text-align: center; /* centraliza na horizontal */
    
}
ul.menu li{
    display: inline-block; /* centraliza na horizontal */
    margin: 0 5px;
    
}
ul.menu li a{
    background-color: #01aeba;
    border-radius: 6px;
    padding: 6px 15px;
    color: #fff;
    font-family: Mikado,Arial,sans-serif;
    font-size: 30px;
}
ul.menu li a:hover{
    color: #ff914d;
}
colecoes{
    height: 100vh;
    width: 105%;
    display: flex;
    justify-content: center;
    align-items: center;
    
}

footer{
    width: 99%;
    height: 150px;
    padding: 25px;
    text-align: center;
    background-color: #01aeba;
    color: #fff;
     border-radius: 6px;
  }



`