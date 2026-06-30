import React, { useState, useEffect } from 'react';
import { Orders } from './Orders/Orders';
import { updateInventory } from '../../lib/api';

/**
 * Container for story-7 — synthesised by the AEGIS integration pass [SYS-264].
 * Mounts the screen's generated component(s), fetches list data, and wires
 * action handlers to the typed API client.
 */
export default function Page(): React.ReactElement {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>(undefined);

  const reload = () => {
    setIsLoading(true);
    Promise.resolve((updateInventory as any)())
      .then((res: any) => setData(res))
      .catch((e: any) => setError(e?.message ?? String(e)))
      .finally(() => setIsLoading(false));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { reload(); }, []);

  const handleUpdate = (arg?: any) =>
    Promise.resolve((updateInventory as any)(arg)).then(() => reload())
      .catch((e: any) => setError(e?.message ?? String(e)));

  const ordersProps: any = {
    orders: data,
    isLoading: isLoading,
    error: error,
    onStatusChange: handleUpdate,
  };

  return (
    <div>
      <Orders {...ordersProps} />
    </div>
  );
}
