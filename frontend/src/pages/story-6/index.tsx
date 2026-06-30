import React, { useState, useEffect } from 'react';
import { Inventory } from './Inventory/Inventory';
import { listOrders, updateInventory } from '../../lib/api';

/**
 * Container for story-6 — synthesised by the AEGIS integration pass [SYS-264].
 * Mounts the screen's generated component(s), fetches list data, and wires
 * action handlers to the typed API client.
 */
export default function Page(): React.ReactElement {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>(undefined);

  const reload = () => {
    setIsLoading(true);
    Promise.resolve((listOrders as any)())
      .then((res: any) => setData(res))
      .catch((e: any) => setError(e?.message ?? String(e)))
      .finally(() => setIsLoading(false));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { reload(); }, []);

  const handleUpdate = (arg?: any) =>
    Promise.resolve((updateInventory as any)(arg)).then(() => reload())
      .catch((e: any) => setError(e?.message ?? String(e)));

  const inventoryProps: any = {
    item: data,
    onUpdate: handleUpdate,
    onCancel: () => {},
  };

  return (
    <div>
      <Inventory {...inventoryProps} />
    </div>
  );
}
