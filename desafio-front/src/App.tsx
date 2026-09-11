import { useState, useEffect } from 'react';
import { Header } from './components/Header/Header';
import { Banner } from './components/Banner/Banner';
import { Categories } from './components/Categories/Categories';
import { ProductShelf } from './components/ProductShelf/ProductShelf';
import { PartnersBanners } from './components/PartnersBanners/ParternsBanners';
import { Brands } from './components/Brands/Brands';
import { Footer } from './components/Footer/Footer';
import { ProductModal } from './components/ProductModal/ProductModal';
import './styles/global.scss';

export interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

export function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
  };

  useEffect(() => {
    // Força o título correto da aba no navegador
    document.title = "Econverse";

    async function loadProducts() {
      try {
        setLoading(true);
        const response = await fetch('/produtos.json');
        const data = await response.json();
        setProducts(data.products || []);
      } catch (err: any) {
        setError('Erro ao carregar produtos.');
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  return (
    <>
      <Header />

      <main>
        <Banner />
        <Categories />

        <ProductShelf
          products={products}
          onOpenModal={handleOpenModal}
          loading={loading}
          error={error}
        />

        <PartnersBanners />

        <ProductShelf
          products={products}
          onOpenModal={handleOpenModal}
          loading={loading}
          error={error}
          showSeeAll={true}
        />

        <Brands />

        <ProductShelf
          products={products}
          onOpenModal={handleOpenModal}
          loading={loading}
          error={error}
          showSeeAll={true}
        />
      </main>

      <Footer />

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}

export default App;