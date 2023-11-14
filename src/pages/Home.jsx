import CardC from "../components/CardC";
import CarouselC from "../components/CarouselC";

const cards = [
  { nome: "Pão de Queijo", descricao: "Leve e ágil", img: "/paoqueijo.jpg" },
  { nome: "Mortadela", descricao: "Excelente aderência", img:"/mortadela.jpeg"},
  { nome: "Queijo", descricao: "Potência e controle" ,img:"/queijo.jpg"},
  { nome: "Donuts", descricao: "Proteção e conforto",img:"donuts.png" },
  { nome: "Pizza", descricao: "Deslize nas ondas", img:"pizza.jpg"},
  // { nome: "Bicicleta de Montanha", descricao: "Aventura na trilha" },
  // { nome: "Camiseta de Futebol", descricao: "Conforto e estilo" },
  // { nome: "Skate Elétrico", descricao: "Mobilidade urbana" },
  // { nome: "Raquete de Badminton", descricao: "Jogo de agilidade" },
  // { nome: "Mochila de Hidratação", descricao: "Mantenha-se hidratado" },
];

const Home = () => {
  return (
    <div>
      <CarouselC />
      <div style={{ padding: "80px 0" }}>
        <h2>Nossos produtos</h2>
        <div className="card-group">
          {cards.map((card, i) => (
            <CardC data={card} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
