export interface Order {
  id: string;
  customer: string;
  total: number;
  status: 'Pending' | 'Shipped' | 'Delivered';
}

export interface OrderListProps {
  className?: string;
}
