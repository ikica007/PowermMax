/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Phone, Mail, MapPin, Snowflake, Flame, 
  Wrench, Thermometer, Wind, ShieldCheck, Droplets, 
  Zap, Clock, ThumbsUp, CheckCircle2, MessageCircle,
  ChevronRight
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Početna', href: '#home' },
    { name: 'O nama', href: '#about' },
    { name: 'Usluge', href: '#services' },
    { name: 'Zašto mi', href: '#why-us' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="block bg-white p-1.5 md:p-2 rounded-xl shadow-sm transition-transform hover:scale-105">
              <img src="/power max.PNG" alt="Power Max Logo" className="h-10 md:h-12 w-auto" />
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className={`font-medium text-sm uppercase tracking-wide hover:text-brand-red transition-colors ${scrolled ? 'text-gray-800' : 'text-white/90'}`}>
                {link.name}
              </a>
            ))}
            <a href="tel:068761100" className={`flex items-center gap-2 font-bold px-4 py-2 rounded-full transition-all ${scrolled ? 'bg-brand-blue text-white hover:bg-brand-blue/90' : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'}`}>
              <Phone size={16} />
              068 761 100
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={`${scrolled ? 'text-brand-blue' : 'text-white'}`}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-gray-800 hover:text-brand-red hover:bg-gray-50 border-b border-gray-100"
                >
                  {link.name}
                </a>
              ))}
              <a href="tel:068761100" className="mt-4 flex items-center justify-center gap-2 bg-brand-blue text-white font-bold px-4 py-3 rounded-lg">
                <Phone size={18} />
                Pozovite nas: 068 761 100
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-start pt-32 md:pt-48 bg-[#21346e] overflow-hidden">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://res.cloudinary.com/de7gefkxl/video/upload/v1775675160/motion_2.0-fast_Modern_white_wall-mounted_split_air_conditioner_unit_3D_render_isometric_view_co-0_pbjf15.mp4" type="video/mp4" />
      </video>
      
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Main Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex items-center justify-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl pt-10"
        >
          <h1 className="font-heading font-bold uppercase text-white text-6xl md:text-8xl lg:text-[100px] leading-[0.98] tracking-[-2px] md:tracking-[-4px]">
            <span className="block">ČIST VAZDUH</span>
            <span className="block">SAVRŠENA</span>
            <span className="block">KLIMA</span>
          </h1>
          
          <p className="mt-6 font-heading font-normal text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            Profesionalna montaža, servis i čišćenje klima uređaja i toplotnih pumpi — širom Crne Gore
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            {/* Custom CTA Button */}
            <a href="tel:068761100" className="relative group w-[220px] h-[65px] flex items-center justify-center transition-transform duration-300 hover:scale-105 active:scale-95 mx-auto sm:mx-0">
              <svg className="absolute inset-0 w-full h-full drop-shadow-lg" viewBox="0 0 220 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0H210C215.523 0 220 4.47715 220 10V45L200 65H10C4.47715 65 0 60.5228 0 55V10C0 4.47715 4.47715 0 10 0Z" fill="white"/>
              </svg>
              <span className="relative z-10 font-heading font-bold uppercase text-[18px] text-[#161a20] flex items-center gap-2">
                <Phone size={20} />
                POZOVITE NAS
              </span>
            </a>

            {/* Second CTA Button */}
            <a href="#contact" className="w-[240px] h-[65px] flex items-center justify-center border-2 border-white text-white font-heading font-bold uppercase text-[18px] transition-colors duration-300 hover:bg-white hover:text-[#161a20] mx-auto sm:mx-0">
              ZATRAŽITE PONUDU
            </a>
          </div>
        </motion.div>

      </div>

      {/* Bottom Info Bar */}
      <div className="relative z-20 w-full bg-black/50 backdrop-blur-sm border-t border-white/10 py-4 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-white text-sm font-medium">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-brand-red" />
            <span>Cijela Crna Gora</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-brand-red" />
            <span>068 761 100</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-brand-red" />
            <span>maxp39371@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-brand-red font-bold tracking-wider uppercase text-sm mb-2">O nama</h2>
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark mb-6 leading-tight">
              Vaš partner za ugodnu klimu tokom cijele godine
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              POWER MAX DOO je mlada i ambiciozna firma iz Bijelog Polja, osnovana 2025. godine. Specijalizovani smo za postavljanje, servis i održavanje klimatizacionih sistema i toplotnih pumpi.
            </p>
            <p className="text-gray-600 mb-8">
              Iako smo bazirani na sjeveru, naš stručni tim pokriva teritoriju <strong className="text-brand-dark">cijele Crne Gore</strong>. Bilo da ste u Podgorici, na primorju ili na sjeveru, garantujemo brzu reakciju, pouzdanost i vrhunski kvalitet usluge. Naš cilj je da osiguramo optimalnu temperaturu i čist vazduh u vašem stambenom ili poslovnom prostoru.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-start gap-3">
                <div className="bg-brand-light p-3 rounded-lg text-brand-blue">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Stručan tim</h4>
                  <p className="text-sm text-gray-500">Licencirani instalateri</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-brand-light p-3 rounded-lg text-brand-blue">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Brza usluga</h4>
                  <p className="text-sm text-gray-500">Poštovanje rokova</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop" 
                alt="Montaža klima uređaja" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-brand-blue text-white p-6 rounded-xl shadow-xl border-4 border-white hidden md:block">
              <p className="font-heading text-4xl font-bold">100%</p>
              <p className="text-sm font-medium text-blue-200 uppercase tracking-wider">Zadovoljnih klijenata</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Wind size={32} />,
      title: "Montaža klima uređaja",
      desc: "Profesionalna ugradnja klima uređaja za stambene i poslovne objekte uz garanciju na izvedene radove."
    },
    {
      icon: <Wrench size={32} />,
      title: "Servis i održavanje",
      desc: "Redovni godišnji servisi, dopuna freona i popravka svih vrsta kvarova na klima uređajima."
    },
    {
      icon: <Flame size={32} />,
      title: "Montaža toplotnih pumpi",
      desc: "Energetski efikasna rješenja za grijanje i hlađenje. Kompletna instalacija sistema toplotnih pumpi."
    },
    {
      icon: <Thermometer size={32} />,
      title: "Servis toplotnih pumpi",
      desc: "Dijagnostika, održavanje i popravka sistema toplotnih pumpi za njihov dugotrajan i pouzdan rad."
    },
    {
      icon: <Droplets size={32} />,
      title: "Čišćenje i dezinfekcija",
      desc: "Dubinsko pranje unutrašnjih jedinica, uklanjanje bakterija, gljivica i neprijatnih mirisa."
    },
    {
      icon: <Zap size={32} />,
      title: "Hitne intervencije",
      desc: "Brza reakcija na terenu za hitne popravke sistema kako bi vaš prostor ponovo bio ugodan."
    }
  ];

  return (
    <section id="services" className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-red font-bold tracking-wider uppercase text-sm mb-2">Naše usluge</h2>
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Kompletna rješenja za klimatizaciju
          </h3>
          <p className="text-gray-600 text-lg">
            Nudimo širok spektar usluga kako bismo osigurali savršenu temperaturu u vašem domu ili kancelariji.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
            >
              <div className="w-16 h-16 bg-brand-light rounded-xl flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h4 className="font-heading text-xl font-bold text-brand-dark mb-3">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const reasons = [
    { icon: <Clock />, title: "Brza reakcija", desc: "Poštujemo vaše vrijeme i dolazimo u dogovorenom roku." },
    { icon: <ThumbsUp />, title: "Korektne cijene", desc: "Transparentan cjenovnik bez skrivenih troškova." },
    { icon: <ShieldCheck />, title: "Garancija na rad", desc: "Stojimo iza kvaliteta naših usluga i ugrađene opreme." },
    { icon: <MessageCircle />, title: "Dostupni 7 dana", desc: "Tu smo za vas svakog dana u sedmici za hitne slučajeve." },
  ];

  return (
    <section id="why-us" className="py-20 bg-brand-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-brand-red font-bold tracking-wider uppercase text-sm mb-2">Zašto odabrati nas</h2>
            <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Pouzdanost i kvalitet na prvom mjestu
            </h3>
            <p className="text-blue-100 text-lg mb-8">
              Naš pristup poslu zasniva se na stručnosti, odgovornosti i zadovoljstvu klijenata. Svakom projektu pristupamo sa maksimalnom pažnjom.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="text-brand-red mt-1">{reason.icon}</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{reason.title}</h4>
                    <p className="text-blue-200 text-sm">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-brand-red transform translate-x-4 translate-y-4 rounded-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2070&auto=format&fit=crop" 
              alt="Serviser na radu" 
              className="relative z-10 rounded-2xl w-full h-auto object-cover aspect-[4/3]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Coverage = () => {
  const cities = ["Podgorica", "Nikšić", "Bar", "Budva", "Herceg Novi", "Kotor", "Bijelo Polje", "Berane", "Pljevlja", "Tivat", "Ulcinj", "Žabljak"];
  
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="font-heading text-2xl font-bold text-brand-dark mb-8">Pokrivamo cijelu teritoriju Crne Gore</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {cities.map((city, idx) => (
            <span key={idx} className="px-4 py-2 bg-brand-light text-brand-blue font-medium rounded-full text-sm border border-blue-100">
              {city}
            </span>
          ))}
          <span className="px-4 py-2 bg-brand-red/10 text-brand-red font-bold rounded-full text-sm">
            + i ostali gradovi
          </span>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const city = formData.get('city');
    const service = formData.get('service');
    const message = formData.get('message');

    const text = `Novi upit sa sajta:%0A%0A*Ime:* ${name}%0A*Telefon:* ${phone}%0A*Grad:* ${city || 'Nije navedeno'}%0A*Usluga:* ${service}%0A*Poruka:* ${message || 'Nema poruke'}`;
    
    // Otvori WhatsApp u novom prozoru (neophodno zbog iframe restrikcija u preview-u)
    window.open(`https://wa.me/38268761100?text=${text}`, '_blank');
    
    setIsSubmitted(true);
    e.currentTarget.reset();
    
    // Sakrij poruku o uspjehu nakon 5 sekundi
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-brand-red font-bold tracking-wider uppercase text-sm mb-2">Kontakt</h2>
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark mb-6">
              Zatražite ponudu ili zakažite servis
            </h3>
            <p className="text-gray-600 mb-10 text-lg">
              Imate problem sa klimom ili planirate ugradnju novog sistema? Kontaktirajte nas i naš tim će vam odgovoriti u najkraćem roku.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="bg-brand-light p-3 rounded-full text-brand-blue">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">Telefon / WhatsApp / Viber</p>
                  <a href="tel:068761100" className="text-xl font-bold text-brand-dark hover:text-brand-red transition-colors">068 761 100</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="bg-brand-light p-3 rounded-full text-brand-blue">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">Email adresa</p>
                  <a href="mailto:maxp39371@gmail.com" className="text-lg font-bold text-brand-dark hover:text-brand-red transition-colors">maxp39371@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="bg-brand-light p-3 rounded-full text-brand-blue">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">Sjedište firme</p>
                  <p className="text-lg font-bold text-brand-dark">Ul. Tršova br. 60</p>
                  <p className="text-gray-600">Bijelo Polje, Crna Gora</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h4 className="font-heading text-2xl font-bold text-brand-dark mb-6">Pošaljite nam upit</h4>
            
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg flex items-center gap-3">
                <div className="bg-green-100 p-1 rounded-full">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <p className="font-medium">Vaš upit je uspješno proslijeđen na WhatsApp!</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Ime i prezime</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all" placeholder="Vaše ime" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                  <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all" placeholder="Vaš broj telefona" />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">Grad</label>
                  <input type="text" id="city" name="city" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all" placeholder="Npr. Podgorica" />
                </div>
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Vrsta usluge</label>
                <select id="service" name="service" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all bg-white">
                  <option>Montaža klime</option>
                  <option>Servis klime</option>
                  <option>Montaža toplotne pumpe</option>
                  <option>Servis toplotne pumpe</option>
                  <option>Drugo</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Poruka (opciono)</label>
                <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all resize-none" placeholder="Opišite vaš zahtjev..."></textarea>
              </div>
              <button type="submit" className="w-full bg-brand-red hover:bg-red-700 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                Pošalji upit <ChevronRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 lg:col-span-2">
            <a href="#home" className="inline-block bg-white p-2 rounded-xl shadow-sm mb-6 transition-transform hover:scale-105">
              <img src="/power max.PNG" alt="Power Max Logo" className="h-12 md:h-16 w-auto" />
            </a>
            <p className="text-gray-400 max-w-md mb-6">
              Vaš pouzdan partner za ugradnju, servis i održavanje klimatizacionih sistema i toplotnih pumpi. Pokrivamo cijelu Crnu Goru brzim i kvalitetnim uslugama.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders if needed */}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Brzi linkovi</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Početna</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">O nama</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Usluge</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Zašto mi</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Kontakt info</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-brand-red shrink-0 mt-1" />
                <span>Ul. Tršova br. 60<br/>Bijelo Polje, Crna Gora</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-brand-red shrink-0" />
                <a href="tel:068761100" className="hover:text-white transition-colors">068 761 100</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-brand-red shrink-0" />
                <a href="mailto:maxp39371@gmail.com" className="hover:text-white transition-colors">maxp39371@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} POWER MAX DOO. Sva prava zadržana.</p>
          <p>Direktor: Kerim Kasumović</p>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/38268761100" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
      aria-label="Kontaktirajte nas na WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        Pišite nam
      </span>
    </a>
  );
};

export default function App() {
  return (
    <div className="font-sans antialiased selection:bg-brand-red selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Coverage />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
