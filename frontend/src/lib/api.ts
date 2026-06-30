// auto-generated — do not edit

const BASE = '/api';

/** View earned commissions */
export async function getCommissions(): Promise<unknown> {
  const res = await fetch(`${BASE}/commissions`, { method: 'GET' });
  if (!res.ok) throw new Error(`getCommissions failed: ${res.status}`);
  const text = await res.text();
  return (text ? JSON.parse(text) : undefined) as unknown;
}

/** List vendor orders */
export async function listOrders(): Promise<unknown> {
  const res = await fetch(`${BASE}/orders`, { method: 'GET' });
  if (!res.ok) throw new Error(`listOrders failed: ${res.status}`);
  const text = await res.text();
  return (text ? JSON.parse(text) : undefined) as unknown;
}

/** Update stock level */
export async function updateInventory(): Promise<void> {
  const res = await fetch(`${BASE}/inventory`, { method: 'POST' });
  if (!res.ok) throw new Error(`updateInventory failed: ${res.status}`);
}
