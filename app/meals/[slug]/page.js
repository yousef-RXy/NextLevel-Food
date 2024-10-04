import React from 'react';

function Meal({ params }) {
  const { slug } = params;
  return <div>{slug}</div>;
}

export default Meal;
