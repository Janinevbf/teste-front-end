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

  useEffect(() => {
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

        {/* Vitrine 1 com Abas */}
        <ProductShelf
          products={products}
          onOpenModal={(prod) => setSelectedProduct(prod)}
          loading={loading}
          error={error}
          hasTabs={true}
        />

        {/* Parceiros Bloco 1 */}
        <PartnersBanners />

        {/* Vitrine 2 */}
        <ProductShelf
          products={products}
          onOpenModal={(prod) => setSelectedProduct(prod)}
          loading={loading}
          error={error}
          hasTabs={false}
        />

        {/* Parceiros Bloco 2 */}
        <PartnersBanners />

        {/* Seção de Marcas */}
        <Brands />

        {/* Repetição final de Vitrine conforme Figma */}
        <ProductShelf
          products={products}
          onOpenModal={(prod) => setSelectedProduct(prod)}
          loading={loading}
          error={error}
          hasTabs={false}
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