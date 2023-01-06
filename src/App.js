import Header from './components/Header';
import Drawer from './components/Drawer';
import Card from './components/Card';

const goods = [
  { name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '12 999', img: 1 },
  { name: 'Мужские Кроссовки Nike Air Max 270', price: '12 999', img: 2 },
  { name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '8 499', img: 3 },
  { name: 'Кроссовки Puma X Aka Boku Future Rider', price: '8 999', img: 4 },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex align-center">
            <img
              src="/img/search.svg"
              alt="Search"
            />
            <input
              type="text"
              placeholder="Поиск..."
            />
          </div>
        </div>
        <div className="d-flex">
          {goods.map(({ name, price, img }) => (
            <Card
              name={name}
              price={price}
              img={img}
              key={img}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
