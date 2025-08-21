import React from 'react';
import HeroSection from '../../components/Home/HeroSection/HeroSection';
import StatsSection from '../../components/Home/StatsSection/StatsSection';
import AboutSection from '../../components/Home/AboutSection/AboutSection';
import ServicesSection from '../../components/Home/ServicesSection/ServicesSection';
import WorkflowSection from '../../components/Home/WorkflowSection/WorkflowSection';
import BrandsSection from '../../components/Home/BrandsSection/BrandsSection';
import BrandsSection2 from '../../components/Home/BrandsSection/BrandsSection-2';
import ProductsSection from '../../components/Home/ProductsSection/ProductsSection';
import Contato from '../../components/Contato';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <WorkflowSection />
      <BrandsSection />
      <BrandsSection2 />
      <ProductsSection />
      <Contato />
    </>
  );
};

export default HomePage;