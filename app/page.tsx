'use client';

import { useEffect, useState } from 'react';
import { ArrowDown, Mail, Phone, MapPin, Heart, Star, Users, Award } from 'lucide-react';
import Image from 'next/image';
import image1 from '../lib/images/image1.jpg';
import image2 from '../lib/images/image2.jpg';
import image3 from '../lib/images/image3.jpg';
import print1 from '../lib/images/print1.jpg';
import print2 from '../lib/images/print2.jpg';
import print3 from '../lib/images/print3.jpg';
import logo from '../lib/images/logo.jpg';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({
    hero: false,
    about: false,
    products: false,
    story: false,
    contact: false,
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionName = entry.target.getAttribute('data-section');
            if (sectionName) {
              setIsVisible(prev => ({ ...prev, [sectionName]: true }));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-slate-800">LUXE</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-slate-600 hover:text-orange-500 transition-colors scroll-smooth">Home</a>
              <a href="#about" className="text-slate-600 hover:text-orange-500 transition-colors scroll-smooth">About</a>
              <a href="#products" className="text-slate-600 hover:text-orange-500 transition-colors scroll-smooth">Collection</a>
              <a href="#contact" className="text-slate-600 hover:text-orange-500 transition-colors scroll-smooth">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        data-section="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-slate-900/40"></div>
        <div className={`relative z-10 text-center text-white px-4 max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible.hero ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Handcrafted
            <span className="block text-orange-400">Elegance</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-200 leading-relaxed">
            Authentic Sri Lankan craftsmanship meets contemporary British style. 
            Each piece tells a story of tradition, passion, and timeless beauty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Explore Collection
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
              Our Story
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-white w-6 h-6" />
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        data-section="about"
        className="py-24 bg-white relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${
            isVisible.about ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
          }`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Where Tradition Meets Innovation
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                From the vibrant markets of Colombo to the sophisticated streets of London, 
                we bridge cultures through exceptional handmade clothing.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center group">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors duration-300">
                  <Heart className="text-orange-600 w-10 h-10" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">Handcrafted with Love</h3>
                <p className="text-slate-600 leading-relaxed">Every stitch is placed with care by skilled artisans who have perfected their craft over generations.</p>
              </div>
              
              <div className="text-center group">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                  <Star className="text-blue-600 w-10 h-10" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">Premium Quality</h3>
                <p className="text-slate-600 leading-relaxed">We source only the finest materials, ensuring each garment stands the test of time and fashion.</p>
              </div>
              
              <div className="text-center group">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                  <Award className="text-green-600 w-10 h-10" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">Unique Designs</h3>
                <p className="text-slate-600 leading-relaxed">Each piece is a one-of-a-kind creation, blending traditional Sri Lankan patterns with modern aesthetics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section 
        id="products" 
        data-section="products"
        className="py-24 bg-slate-100 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${
            isVisible.products ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
          }`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Our Signature Collection
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Discover pieces that celebrate the rich heritage of Sri Lankan craftsmanship
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <Image
                    src={image3}
                    alt="Handwoven Dress"
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-semibold">Handwoven Elegance</h3>
                    <p className="text-sm">Traditional patterns, modern cut</p>
                  </div>
                </div>
              </div>
              
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <Image
                    src={image1}
                    alt="Artisan Blouse"
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-semibold">Artisan Blouses</h3>
                    <p className="text-sm">Intricate embroidery details</p>
                  </div>
                </div>
              </div>
              
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <Image
                    src={image2}
                    alt="Cultural Fusion"
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-semibold">Cultural Fusion</h3>
                    <p className="text-sm">East meets West elegance</p>
                  </div>
                </div>
              </div>
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <Image
                    src={print3}
                    alt="Handwoven Dress"
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-semibold">Handwoven Elegance</h3>
                    <p className="text-sm">Traditional patterns, modern cut</p>
                  </div>
                </div>
              </div>
              
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <Image
                    src={print1}
                    alt="Artisan Blouse"
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-semibold">Artisan Blouses</h3>
                    <p className="text-sm">Intricate embroidery details</p>
                  </div>
                </div>
              </div>
              
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <Image
                    src={print2}
                    alt="Cultural Fusion"
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-semibold">Cultural Fusion</h3>
                    <p className="text-sm">East meets West elegance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section 
        data-section="story"
        className="py-24 bg-white relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            isVisible.story ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
          }`}>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Our Journey from Colombo to London
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Founded with a passion for preserving traditional Sri Lankan textile arts, LUXE 
                began as a small workshop in Colombo. Today, we proudly serve discerning customers across 
                the UK with our unique blend of heritage craftsmanship and contemporary design.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Each garment carries the story of skilled artisans whose families have been weaving, 
                dyeing, and embroidering for generations. We honor their legacy while creating pieces 
                that speak to the modern, style-conscious individual.
              </p>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">500+</div>
                  <div className="text-slate-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">15+</div>
                  <div className="text-slate-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">100%</div>
                  <div className="text-slate-600">Handmade</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image 
                src={logo}
                alt="Artisan at work"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-xl shadow-lg">
                <Users className="w-8 h-8 mb-2" />
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm">Skilled Artisans</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        data-section="contact"
        className="py-24 bg-slate-900 text-white relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${
            isVisible.contact ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
          }`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Ready to discover your perfect piece? We'd love to hear from you.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-400 transition-colors duration-300">
                  <Phone className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-slate-300">+44 20 7946 0958</p>
              </div>
              
              <div className="text-center group">
                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-400 transition-colors duration-300">
                  <Mail className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-slate-300">hello@ceylonthreads.co.uk</p>
              </div>
              
              <div className="text-center group">
                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-400 transition-colors duration-300">
                  <MapPin className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-slate-300">
                  42 Portobello Road<br />
                  London, W11 2EB<br />
                  United Kingdom
                </p>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-300 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">LUXE</h3>
              <p className="text-slate-400 leading-relaxed">
                Bringing the finest Sri Lankan handmade clothing to the UK. 
                Each piece is a celebration of tradition, craftsmanship, and timeless style.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-orange-400 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-orange-400 transition-colors">About</a></li>
                <li><a href="#products" className="hover:text-orange-400 transition-colors">Collection</a></li>
                <li><a href="#contact" className="hover:text-orange-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">ig</span>
                </div>
                <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">tw</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p>&copy; 2025 LUXE. All rights reserved. Handcrafted with love in Sri Lanka.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}