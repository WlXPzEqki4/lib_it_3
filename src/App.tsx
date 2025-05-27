import React from 'react';
import Header from './components/Header';
import ScrollProgress from './components/ScrollProgress';
import Introduction from './sections/Introduction';
import PerilousPassage from './sections/PerilousPassage';
import TraffickerProfiles from './sections/TraffickerProfiles';
import NetworkAnalysis from './sections/NetworkAnalysis';
import ArrivalExperiences from './sections/ArrivalExperiences';
import CircumventingDublin from './sections/CircumventingDublin';
import AuthoritiesChallenge from './sections/AuthoritiesChallenge';
import WiderWeb from './sections/WiderWeb';
import Conclusion from './sections/Conclusion';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-900 text-gray-100 font-sans">
      <ScrollProgress />
      <Header />
      
      <main className="relative overflow-hidden">
        <Introduction />
        <PerilousPassage />
        <TraffickerProfiles />
        <NetworkAnalysis />
        <ArrivalExperiences />
        <CircumventingDublin />
        <AuthoritiesChallenge />
        <WiderWeb />
        <Conclusion />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;