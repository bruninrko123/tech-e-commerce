'use client';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import { products } from '../data/products';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  const categories = Array.from(new Set(products.map(product => product.category)));

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [selectedCategory, searchTerm]);

  return (
    <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh', padding: '24px 16px' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <Link
            href="/"
            style={{
              color: '#2563eb',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: '500',
              marginBottom: '16px',
              display: 'inline-block'
            }}
          >
            ← Back to Home
          </Link>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
            All Products
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#6b7280' }}>
            Explore our complete collection of premium tech products
          </p>
        </div>

        {/* Search Bar */}
        <div style={{ marginBottom: '32px' }}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              maxWidth: '400px',
              padding: '12px 16px',
              fontSize: '1rem',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              backgroundColor: 'white',
              outline: 'none',
              transition: 'border-color 0.2s'
            }}
            onFocus={(e) => e.target.style.borderColor = '#2563eb'}
            onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
          />
        </div>

        {/* Category Filter */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
            Categories
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <button
              onClick={() => setSelectedCategory('All')}
              style={{
                backgroundColor: selectedCategory === 'All' ? '#2563eb' : 'white',
                color: selectedCategory === 'All' ? 'white' : '#6b7280',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '0.875rem',
                fontWeight: '500',
                cursor: 'pointer',
                border: selectedCategory === 'All' ? 'none' : '1px solid #e5e7eb',
                transition: 'all 0.2s ease'
              }}
            >
              All ({products.length})
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  backgroundColor: selectedCategory === category ? '#2563eb' : 'white',
                  color: selectedCategory === category ? 'white' : '#6b7280',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  border: selectedCategory === category ? 'none' : '1px solid #e5e7eb',
                  transition: 'all 0.2s ease'
                }}
              >
                {category} ({products.filter(p => p.category === category).length})
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
              }}
            >
              <div style={{ padding: '24px' }}>
                {/* Category Badge */}
                <div style={{ marginBottom: '16px' }}>
                  <span style={{
                    backgroundColor: '#2563eb',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}>
                    {product.category}
                  </span>
                </div>

                {/* Product Info */}
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '12px' }}>
                  {product.name}
                </h3>
                <p style={{ color: '#6b7280', marginBottom: '20px', fontSize: '0.875rem', lineHeight: '1.6' }}>
                  {product.description}
                </p>

                {/* Price and Action */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2563eb' }}>
                    {product.price}
                  </span>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button style={{
                      backgroundColor: '#f3f4f6',
                      color: '#374151',
                      padding: '8px 12px',
                      borderRadius: '6px',
                      fontWeight: '500',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '0.875rem'
                    }}>
                      View Details
                    </button>
                    <button style={{
                      backgroundColor: '#2563eb',
                      color: 'white',
                      padding: '8px 16px',
                      borderRadius: '6px',
                      fontWeight: '500',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '0.875rem'
                    }}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        ) : (
          <div style={{ 
            textAlign: 'center', 
            padding: '64px 16px',
            backgroundColor: 'white',
            borderRadius: '12px',
            marginBottom: '32px'
          }}>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              color: '#111827', 
              marginBottom: '8px' 
            }}>
              No products found
            </h3>
            <p style={{ color: '#6b7280', marginBottom: '24px' }}>
              {searchTerm 
                ? `No products match "${searchTerm}". Try a different search term.`
                : `No products found in the "${selectedCategory}" category.`
              }
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              style={{
                backgroundColor: '#2563eb',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '6px',
                fontWeight: '500',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Load More Section */}
        {filteredProducts.length > 0 && (
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <p style={{ color: '#6b7280', marginBottom: '24px' }}>
              Showing {filteredProducts.length} of {products.length} products
              {searchTerm && ` for "${searchTerm}"`}
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            </p>
            {filteredProducts.length < products.length && (
              <button style={{
                backgroundColor: '#111827',
                color: 'white',
                padding: '12px 32px',
                borderRadius: '8px',
                fontWeight: '500',
                border: 'none',
                cursor: 'pointer'
              }}>
                Load More Products
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}