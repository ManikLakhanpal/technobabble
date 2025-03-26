"use client"

import React, { useState } from 'react';
import { GraduationCap, Phone, Mail, Instagram, Twitter, Facebook } from 'lucide-react';
import HeroPage from '@/components/heroSection';

function Home() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroPage />

      {/* Why Technoclass Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-black">
          <h2 className="text-4xl font-bold text-center mb-12">Why Technoclass</h2>
          <h3 className="text-2xl font-semibold text-center mb-8">Think. Create. Innovate.</h3>
          <p className=" text-center max-w-3xl mx-auto mb-12">
            Product description will be here in one small paragraph. Product description will be here in one small paragraph.
            Product description will be here in one small paragraph.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold">105</div>
              <div className="text-sm text-gray-600">Net Weight</div>
            </div>
            <div>
              <div className="text-3xl font-bold">26</div>
              <div className="text-sm text-gray-600">Top Speed</div>
            </div>
            <div>
              <div className="text-3xl font-bold">38</div>
              <div className="text-sm text-gray-600">Max Range</div>
            </div>
            <div>
              <div className="text-3xl font-bold">89</div>
              <div className="text-sm text-gray-600">Max Torques</div>
            </div>
            <div>
              <div className="text-3xl font-bold">22%</div>
              <div className="text-sm text-gray-600">Hill Climbing</div>
            </div>
            <div>
              <div className="text-3xl font-bold">2x</div>
              <div className="text-sm text-gray-600">Hydraulic Disc Brakes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1585123334904-845d60e97b29?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                alt="Product 1"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <p>Some product image will be here</p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                alt="Product 2"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <p>Some product image will be here</p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                alt="Product 3"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <p>Some product image will be here</p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                alt="Product 4"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <p>Some feature will be here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Video tile will be here</h3>
              <p className="text-gray-600">
                Product description will be here in one small paragraph. Product description will be here
                in one small paragraph. Product description
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Video thumbnail"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Testimonials</h2>
          <div className="max-w-2xl mx-auto text-center">
            <img 
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
              alt="Yung lee"
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <h4 className="text-xl font-semibold mb-4">Yung lee</h4>
            <p className="text-gray-600">
              Product description will be here in one small paragraph. Product description will be here in one small paragraph.
              Product description will be here in one small paragraph. Product description.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contact number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                  value={formData.contactNumber}
                  onChange={(e) => setFormData({...formData, contactNumber: e.target.value})}
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800"
            >
              Let's Talk
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <GraduationCap className="h-8 w-8 mb-4" />
              <div className="flex items-center mb-2">
                <Mail className="h-4 w-4 mr-2" />
                <span>Hello@techcompany.co</span>
              </div>
              <div className="flex items-center mb-4">
                <Phone className="h-4 w-4 mr-2" />
                <span>+91-157-256-4862</span>
              </div>
              <div className="flex space-x-4">
                <Facebook className="h-5 w-5" />
                <Twitter className="h-5 w-5" />
                <Instagram className="h-5 w-5" />
              </div>
            </div>
            <div>
              <h4 className="text-orange-500 font-semibold mb-4">Navigate</h4>
              <ul className="space-y-2">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About us</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#blog">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-orange-500 font-semibold mb-4">Categories</h4>
              <ul className="space-y-2">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About us</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#blog">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-orange-500 font-semibold mb-4">Features</h4>
              <ul className="space-y-2">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About us</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#blog">Blog</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>Copyright © 2023 Stackblitz by Stackblitz Inc | All rights reserved | Privacy Policy | Terms of Use</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
