import {Container, Filters, ProductCard, ProductsGroupList, Title, TopBar} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold"/>
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
          <div className="flex gap-[80px]">
              {/*Фильтрация*/}
            <div className="w-[250px]">
                <Filters />
            </div>
              {/*Список товаров*/}
              <div className="flex-1">
                <ProductsGroupList title="Пиццы" items={[
                  {
                    id: 1,
                    name: 'Чисбургер пицца',
                    ImageUrl: 'https://media.dodostatic.net/image/r:233x233/11ee7d612fc7b7fca5be822752bee1e5.avif',
                    price: 500,
                    items: [{ price: 550 }]
                  },
                  {
                    id: 2,
                    name: 'Чисбургер пицца',
                    ImageUrl: 'https://media.dodostatic.net/image/r:233x233/11ee7d610d2925109ab2e1c92cc5383c.avif',
                    price: 500,
                    items: [{ price: 550 }]
                  },
                  {
                    id: 3,
                    name: 'Чисбургер пицца',
                    ImageUrl: 'https://media.dodostatic.net/image/r:233x233/11ee7d610d2925109ab2e1c92cc5383c.avif',
                    price: 500,
                    items: [{ price: 550 }]
                  },
                  {
                    id: 4,
                    name: 'Чисбургер пицца',
                    ImageUrl: 'https://media.dodostatic.net/image/r:233x233/11ee7d610d2925109ab2e1c92cc5383c.avif',
                    price: 500,
                    items: [{ price: 550 }]
                  },
                ]} categoryId={1} />

<ProductsGroupList title="Комбо" items={[
                  {
                    id: 1,
                    name: 'Чисбургер пицца',
                    ImageUrl: 'https://media.dodostatic.net/image/r:233x233/11ee7d612fc7b7fca5be822752bee1e5.avif',
                    price: 500,
                    items: [{ price: 550 }]
                  },
                  {
                    id: 2,
                    name: 'Чисбургер пицца',
                    ImageUrl: 'https://media.dodostatic.net/image/r:233x233/11ee7d610d2925109ab2e1c92cc5383c.avif',
                    price: 500,
                    items: [{ price: 550 }]
                  },
                  {
                    id: 3,
                    name: 'Чисбургер пицца',
                    ImageUrl: 'https://media.dodostatic.net/image/r:233x233/11ee7d610d2925109ab2e1c92cc5383c.avif',
                    price: 500,
                    items: [{ price: 550 }]
                  },
                  {
                    id: 4,
                    name: 'Чисбургер пицца',
                    ImageUrl: 'https://media.dodostatic.net/image/r:233x233/11ee7d610d2925109ab2e1c92cc5383c.avif',
                    price: 500,
                    items: [{ price: 550 }]
                  },
                ]} categoryId={2} />

              </div>
          </div>
      </Container>
    </>
  );
}
