// app/components/MantinClient.tsx
'use client'; // Mark this as a client component

import { MantineProvider, MantineProviderProps } from "@mantine/core";
import '@mantine/core/styles.css';
import { ReactNode } from "react";

interface MantinClientProps extends MantineProviderProps {
  children: ReactNode;
}

export default function MantineProviderWrapper({ children }: MantinClientProps) {
  return (
    <MantineProvider
      withGlobalClasses
      
      theme={{
      //  colors: "light",
        primaryColor: "blue",
      }}
    >
      {children}
    </MantineProvider>
  );
}
