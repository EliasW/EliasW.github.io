"use client";
import { Tabs, Title, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { MantineProvider } from "@mantine/core";

import { useRouter } from "next/navigation";

const HeaderTop = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string | null>("");
  /*
  switch (activeTab) {
    case "home":
      router.push("/");
      break;
    case "personalStatement":
      router.push("/PersonalStatement");
  }
*/
  useEffect(() => {
    if (activeTab === "home") {
      router.push("/");
    } else if (activeTab === "personalStatement") {
      router.push("/PersonalStatement");
    }
  }, [activeTab]);
  console.log("active tab", activeTab);

  return (
    <div
      style={{
        height: "80px",
        padding: "md",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        backgroundColor: "white", // Add a background to prevent transparency
        //  borderBottom: "1px solid #ddd",
      }}
    >
      <Tabs
        style={{ outlineOffset: "-2px" }}
        color="red"
        value={activeTab}
        onChange={setActiveTab}
      >
        <Tabs.List m={20}>
          <Tabs.Tab value="home">
            <Text size="xl">Home </Text>
          </Tabs.Tab>
          <Tabs.Tab value="personalStatement">
            <Text size="xl">Personal Statement </Text>
          </Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </div>
  );
};
export default HeaderTop;
