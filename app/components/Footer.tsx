import React from "react";
import { Flex, Group, NavLink, SimpleGrid, Text } from "@mantine/core";

const Footer: React.FC = () => {
  return (
    <Flex
      justify="center" // Center items horizontally
      align="center" // Center items vertically
      direction="row"
      w="100%" // Use full width
      p="md" // Add padding for aesthetics
      style={{ minHeight: "60px" }} // Ensure there's a minimum height for better visibility
    >
      <Flex align="center">
        <Text>follow me on</Text>
        <NavLink
          pl={5}
          pr={5}
          href="https://x.com/eliaswendm"
          label="Twitter"
          color="green"
          variant="subtle"
          style={{ color: "gray", width: "auto" }}
        />
        <Text>&</Text>
        <NavLink
          pl={5}
          pr={5}
          href="https://www.linkedin.com/in/elias-atalay-504a1130/"
          label="Linkdlen"
          color="green"
          variant="subtle"
          style={{ color: "gray", width: "auto" }}
        />
      </Flex>
    </Flex>
  );
};

export default Footer;
