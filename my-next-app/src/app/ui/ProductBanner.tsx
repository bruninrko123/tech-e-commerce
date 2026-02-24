import Link from 'next/link';
import { products } from '../data/products';

// Show only first 4 products in the banner
const featuredProducts = products.slice(0, 4);

export default function ProductBanner() {
  return (
    <section style={{ backgroundColor: '#f9fafb', padding: '64px 16px' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
            Featured Products
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#6b7280' }}>
            Discover the best equipment to elevate your tech experience
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
          {featuredProducts.map((product) => (
            <div 
              key={product.id} 
              style={{ 
                backgroundColor: 'white', 
                borderRadius: '12px', 
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', 
                overflow: 'hidden',
                transition: 'box-shadow 0.3s ease'
              }}
            >
              <div style={{ padding: '24px' }}>
                <div style={{ marginBottom: '16px' }}>
                  <span style={{ 
                    backgroundColor: '#2563eb', 
                    color: 'white', 
                    padding: '4px 12px', 
                    borderRadius: '20px', 
                    fontSize: '0.875rem', 
                    fontWeight: '500' 
                  }}>
                    {product.category}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '8px' }}>
                  {product.name}
                </h3>
                <p style={{ color: '#6b7280', marginBottom: '16px', fontSize: '0.875rem', lineHeight: '1.6' }}>
                  {product.description}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2563eb' }}>
                    {product.price}
                  </span>
                  <button style={{
                    backgroundColor: '#2563eb',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    fontWeight: '500',
                    border: 'none',
                    cursor: 'pointer'
                  }}>
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link href="/products">
            <button style={{
              backgroundColor: '#111827',
              color: 'white',
              padding: '12px 32px',
              borderRadius: '8px',
              fontWeight: '500',
              border: 'none',
              cursor: 'pointer'
            }}>
              View All Products
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}