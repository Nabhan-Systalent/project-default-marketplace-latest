'use client';

import React, { useState, useEffect } from 'react';
import { DashboardProps } from './Dashboard.types';

interface Metric {
  label: string;
  value: string | number;
  change?: string;
}

export const Dashboard: React.FC<DashboardProps> = ({ className = '' }) => {
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        setLoading(true);
        // Simulating API call for getCommissions
        const response = await new Promise<Metric[]>((resolve) =>
          setTimeout(() => {
            resolve([
              { label: 'Total Commissions', value: '$12,450', change: '+12%' },
              { label: 'Active Orders', value: '45' },
              { label: 'Pending Payouts', value: '$2,300', change: '-5%' },
            ]);
          }, 800)
        );
        setMetrics(response);
      } catch (err) {
        setError('Failed to load dashboard metrics.');
      } finally {
        setLoading(false);
      }
    };

    fetchMetrics();
  }, []);

  if (loading) return <div className="p-8 text-center">Loading dashboard...</div>;
  if (error) return <div className="p-8 text-red-500 text-center">{error}</div>;

  return (
    <div className={`space-y-6 ${className}`}>
      <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm"
          >
            <p className="text-sm font-medium text-gray-500">{metric.label}</p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-bold text-gray-900">{metric.value}</span>
              {metric.change && (
                <span className={`text-sm font-medium ${metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {metric.change}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
