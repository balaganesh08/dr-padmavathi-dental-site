'use client';

import React, { useState } from 'react';

export default function TestFormPage() {
  const [formData, setFormData] = useState({
    name: 'Test User',
    phone: '8501802222',
    email: 'test@example.com',
    message: 'This is a test message from the form API test page.'
  });
  const [result, setResult] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult('Submitting...');
    
    try {
      console.log('Submitting test form data:', formData);
      
      const response = await fetch('/api/test-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);
      
      const data = await response.json();
      console.log('Response data:', data);
      
      if (data.success) {
        setResult(`✅ Success! ${data.message}\nCheck your email at shivaganeshram7@gmail.com`);
      } else {
        setResult(`❌ Error: ${data.error}`);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setResult(`❌ Network Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '50px auto', padding: '20px' }}>
      <h1>Form API Test</h1>
      <p>This page tests the form API directly to debug the issue.</p>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Phone:
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Message:
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            background: '#0891b2',
            color: 'white',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '4px',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            opacity: isSubmitting ? 0.7 : 1
          }}
        >
          {isSubmitting ? 'Testing...' : 'Test Form Submission'}
        </button>
      </form>
      
      {result && (
        <div style={{
          marginTop: '20px',
          padding: '15px',
          borderRadius: '4px',
          whiteSpace: 'pre-line',
          background: result.includes('Success') ? '#d1fae5' : '#fee2e2',
          color: result.includes('Success') ? '#065f46' : '#991b1b'
        }}>
          {result}
        </div>
      )}
      
      <div style={{ marginTop: '30px', padding: '15px', background: '#f3f4f6', borderRadius: '4px' }}>
        <h3>Debug Instructions:</h3>
        <ol>
          <li>Open browser console (F12)</li>
          <li>Click "Test Form Submission"</li>
          <li>Check console logs for detailed output</li>
          <li>Check your email at shivaganeshram7@gmail.com</li>
          <li>If this works but original forms don't, the issue is in the form components</li>
        </ol>
      </div>
    </div>
  );
}
