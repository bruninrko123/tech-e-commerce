interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Gaming Headset Pro",
    description: "Headset gamer profissional com som surround 7.1, microfone com cancelamento de ruído e almofadas confortáveis para longas sessões de jogo.",
    price: "R$ 299,90",
    category: "Audio"
  },
  {
    id: 2,
    name: "RGB Gaming Mouse",
    description: "Mouse gamer de alta precisão com sensor óptico 16.000 DPI, 7 botões programáveis e iluminação RGB customizável.",
    price: "R$ 189,90",
    category: "Periféricos"
  },
  {
    id: 3,
    name: "Mechanical Keyboard",
    description: "Teclado mecânico com switches Cherry MX Blue, retroiluminação RGB por tecla e estrutura em alumínio premium.",
    price: "R$ 449,90",
    category: "Periféricos"
  },
  {
    id: 4,
    name: "4K Gaming Monitor",
    description: "Monitor gamer 27' 4K com taxa de atualização de 144Hz, HDR10 e tempo de resposta de 1ms para a melhor experiência visual.",
    price: "R$ 1.299,90",
    category: "Monitores"
  }
];

export default function ProductBanner() {
  return (
    <section style={{ backgroundColor: '#f9fafb', padding: '64px 16px' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
            Produtos em Destaque
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#6b7280' }}>
            Descubra os melhores equipamentos para elevar sua experiência tech
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
          {products.map((product) => (
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
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <button style={{
            backgroundColor: '#111827',
            color: 'white',
            padding: '12px 32px',
            borderRadius: '8px',
            fontWeight: '500',
            border: 'none',
            cursor: 'pointer'
          }}>
            Ver Todos os Produtos
          </button>
        </div>
      </div>
    </section>
  );
}