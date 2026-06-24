import React from 'react';
import HeroSection from './HeroSection';
import StatsRow from './StatsRow';
import WhyChooseUs from './WhyChooseUs';
import OurServices from './OurServices';
import QuoteAndHours from './QuoteAndHours';
import ExcellenceAndAccreditation from './ExcellenceAndAccreditation';
import ContactUs from './ContactUs';

export default function LandingPage() {
  return (
    <>
      <div id="home"><HeroSection /></div>
      <StatsRow />
      <div id="why-choose-us"><WhyChooseUs /></div>
      <div id="services"><OurServices /></div>
      <div id="quote-section"><QuoteAndHours /></div>
      <div id="about"><ExcellenceAndAccreditation /></div>
      <div id="contact"><ContactUs /></div>
    </>
  );
}