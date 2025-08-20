// frontend/src/components/ui/Chart.jsx

import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const Chart = ({ data, dataKey, barColor, title }) => {
  return (
    <div className="w-full h-full p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-gray-300" />
          <XAxis dataKey="name" className="text-sm text-gray-600" />
          <YAxis className="text-sm text-gray-600" />
          <Tooltip cursor={{ fill: '#f3f4f6' }} />
          <Bar dataKey={dataKey} fill={barColor} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;