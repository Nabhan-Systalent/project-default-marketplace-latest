'use client';

import React, { useState, useEffect } from 'react';
import { Order, OrderListProps } from './Orders.types';

export const Orders: React.FC<OrderListProps> = ({ className = '' }) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        // Simulating API call for listOrders
        const data = await new Promise<Order[]>((resolve) =>
          setTimeout(() => {
            resolve([
              { id: 'ORD-001', customer: 'Acme Corp', total: 1500, status: 'Shipped' },
              { id: 'ORD-002', customer: 'Globex', total: 850, status: 'Pending' },
            ]);
          }, 800)
        );
        setOrders(data);
      } catch (err) {
        setError('Failed to load orders.');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <div className="p-8 text-center">Loading orders...</div>;
  if (error) return <div className="p-8 text-red-500 text-center">{error}</div>;

  return (
    <div className={`overflow-hidden bg-white shadow rounded-lg ${className}`}>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {orders.length === 0 ? (
            <tr><td colSpan={4} className="px-6 py-4 text-center">No orders found.</td></tr>
          ) : (
            orders.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.customer}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${order.total}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
