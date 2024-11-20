"use client";

import { SWRConfig } from "swr";

export default function SwrConfigProvider({ children }) {
  return (
    <SWRConfig
      value={{
        fetcher: (...args) => fetch(...args).then((res) => res.json()),
        revalidateOnFocus: false,
        dedupingInterval: 500,
        refreshInterval: 0,
        // revalidateIfStale: false,
        // revalidateOnReconnect: false,
      }}
    >
      {children}
    </SWRConfig>
  );
}
