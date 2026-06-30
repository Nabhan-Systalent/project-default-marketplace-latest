export interface InventoryItem {
  id: string;
  name: string;
  sku: string;
  quantity: number;
  threshold: number;
  unit: string;
}

export interface InventoryUpdateProps {
  item: InventoryItem;
  onUpdate: (id: string, updates: Partial<InventoryItem>) => Promise<void>;
  onCancel: () => void;
}
