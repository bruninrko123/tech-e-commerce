import NavBar from "./ui/NavBar";
import ProductBanner from "./ui/ProductBanner";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div style={{ minHeight: '100vh' }}>
        <section style={{
          background: 'linear-gradient(to right, var(--primary-blue), var(--primary-purple))',
          color: 'white',
          padding: '80px 0'
        }}>
          <div style={{ maxWidth: '64rem', margin: '0 auto', textAlign: 'center', padding: '0 16px' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '24px' }}>Welcome to TechShop</h1>
            <p style={{ fontSize: '1.25rem', marginBottom: '32px' }}>A sua loja de tecnologia com os melhores produtos e preços</p>
            <button style={{ 
              backgroundColor: 'white', 
              color: 'var(--primary-blue)', 
              padding: '12px 32px', 
              borderRadius: '8px', 
              fontWeight: '500',
              border: 'none',
              cursor: 'pointer'
            }}>
              Explorar Produtos
            </button>
          </div>
        </section>
        <ProductBanner />
      </div>
    </main>
  );
}
