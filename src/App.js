import './App.css';
import { useState } from 'react'
import Navbar from './components/navbar'
import Header from './components/header'
import Section from './components/section'
import Footer from './components/footer'
// import puplic from "../public/img";
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {

  const productList = [
    {
      id: 1,
      title: "product1",
      price: 250,
      price1: "140",
      des: "this product 1",
      sale: true,
      img: "img/l.jpg",
      star: true,
    },
    {
      id: 2,
      title: "product2",
      price: 200,
      price1:" $100",
      des: "this product 2",
      img: "img/headset1.jpg",
      star: true,
    },
    {
      id: 3,
      title: "product3",
      price: 230,
      price1: "$110",
      sale: true,
      des: "this product 3",
      img: "img/headset2.png",
    },
    {
      id: 4,
      title: "product4",
      price1: '$150',
      price: 220,
      des: "this product 3",
      img: "img/ear1.jpg",
    },
    {
      id: 5,
      title: "product5",
      price: '360',
      sale: true,
      des: "this product 4",
      img: "img/mobile2.jpg",
      star: true,
    },
    {
      id: 6,
      title: "product6",
      price: 50,
      price1: '$80',
      sale: true,
      des: "this product 6",
      img: "img/neck1.jpg",
      star: true,
    },
    {
      id: 7,
      title: "product7",
      price: '540',
      des: "this product 7", 
      img: "img/smart1.jpg",
    },
    {
      id: 8,
      title: "product8",
      price: '640',
      des: "this product 8",
      img: "img/smart2.jpg",
      star: true,
    },
    {
      id: 9,
      title: "product9",
      price: '740',
      des: "this product ",
      sale: true,
      img: "img/mobile1.png",
      star: true,
    },
    {
      id: 10,
      title: "product10",
      price: '550',
      des: "this product 10",
      img: "img/tv1.jpg",
    },
    {
      id: 11,
      title: "product11",
      price: 1100,
      des: "this product 11",
      img: "img/tv2.jpg",
    },
  ]
 
  const [counter, setCounter] = useState(0);

  const handleClick = (product, buttonText) => {
    // Handle the click in the parent component
    console.log('Button clicked for product:', product);
    console.log('Button text:', buttonText);
    // You can perform other actions based on the click and buttonText
  };


  const updateCounter = (value) => {
    console.log(value);
    // Update the counter value
    setCounter(counter + value);
  };


 


  // const addToCart = (operation) => {
  //   // if (operation === 'increment') {
  //     setItems(items + 1);
  //   // } else if (operation === 'decrement' && items > 0) {
  //   //   setItems(items - 1);
  //   // }
  // };

  return (
    <div className="conainer">
      <div className='row'>
        <Navbar item={counter} />
        <Header />
        {/* <div className='App'>
     <h1>{items}</h1>
       {
        items > 10 ? 'Eligble' : 'not Eliglble'
       }
          <button onClick={increse}>incl</button>
     </div> */}
        <div class="container  px-4 px-lg-5 mt-5">
            <div class="row gx-4 gx-lg-5 row-cols-1 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {
            productList.map((product) => {
              console.log(product);
              return  <Section product={product}  onButtonClick={handleClick} updateCounter={updateCounter}  />
            })
          }
            </div>
        </div>
   
    
      <Footer />
      </div>
    </div>
  );
}

export default App;
