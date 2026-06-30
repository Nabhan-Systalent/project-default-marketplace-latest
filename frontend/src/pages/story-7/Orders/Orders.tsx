'use client';

import React from 'react';
import { OrdersTableProps, Order } from './Orders.types';

export const Orders: React.FC<OrdersTableProps> = ({ 
  orders, 
  isLoading, 
  error, 
  onStatusChange 
}) => {
  if (isLoading) {
    return (
      <div className="w-full p-8 text-center text-[var(--color-text-secondary)]">
        Loading orders...
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full p-8 text-center text-[var(--color-error)]">
        Error: {error}
      </div>
    );
  }

  if (!orders || orders.length === 0) {
    return (
      <div className="w-full p-8 text-center text-[var(--color-text-secondary)]">
        No orders found.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-[var(--color-border)]">
      <table className="w-full text-left border-collapse">
        <thead className="bg-[var(--color-background-subtle)]">
          <tr>
            <th className="p-4 font-semibold text-[var(--color-text-primary)]">Order ID</th>
            <th className="p-4 font-semibold text-[var(--color-text-primary)]">Customer</th>
            <th className="p-4 font-semibold text-[var(--color-text-primary)]">Total</th>
            <th className="p-4 font-semibold text-[var(--color-text-primary)]">Status</th>
            <th className="p-4 font-semibold text-[var(--color-text-primary)]">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[var(--color-border)]">
          {orders.map((order) => (
            <tr key={order.id} className="hover:bg-[var(--color-background-hover)] transition-colors">
              <td className="p-4 text-[var(--color-text-secondary)] font-mono">{order.id}</td>
              <td className="p-4 text-[var(--color-text-primary)] font-medium">{order.customerName}</td>
              <td className="p-4 text-[var(--color-text-primary)]">${order.total.toFixed(2)}</td>
              <td className="p-4">
                <span className={`px-2 py-1 rounded-full text-xs font-bold capitalize ${
                  order.status === 'pending' ? 'bg-amber-100 text-amber-800' :
                  order.status === 'processing' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {order.status}
                </span>
              </td>
              <td className="p-4">
                <select 
                  value={order.status}
                  onChange={(e) => onStatusChange(order.id, e.target.value as Order['status'])}
                  className="bg-[var(--color-background)] border border-[var(--color-border)] rounded px-2 py-1 text-sm focus:ring-2 focus:ring-[var(--color-primary)] outline-none"
                >
                  <option value="pending">Pending</option>
                  <option value="processing">Processing</option>
                  <option value="shipped">Shipped</option>
                  <option value="delivered">Delivered</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
