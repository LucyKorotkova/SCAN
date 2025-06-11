import React from 'react';
import BeginnerCard from './BeginnerCard';
import ProCard from './ProCard';
import BusinessCard from './BusinessCard';

function Tariffs() {
  return (
    <div className="tariffs">
      <h2>Наши тарифы</h2>
      <div className="tariffs-list">
        <BeginnerCard />
        <ProCard />
        <BusinessCard />
      </div>
    </div>
  );
}

export default Tariffs;