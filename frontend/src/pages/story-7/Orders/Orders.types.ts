export interface Order {
  id: string;
  customerName: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total: number;
  createdAt: string;
}

export interface OrdersTableProps {
  orders: Order[];
  isLoading?: boolean;
  error?: string | null;
  onStatusChange: (id: string, status: Order['status']) => void;
}
