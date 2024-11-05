// app/page.tsx
"use client";

import {
  Container,
  Button,
  Text,
  Title,
  Center,
  Stack,
  Image,
  Group,
  List,
} from "@mantine/core";
import ProfileImage from "../public/img.jpg";
import "../globals.css";

export default function HomePage() {
  console.log("ProfileImage", ProfileImage);
  return (
    <>
      <Container h={"80vh"} color="red" size="lg" p="md">
        <Stack
          h={300}
          bg="var(--mantine-color-body)"
          align="stretch"
          //justify="center"
          gap="md"
        >
          <Title order={1} c={"rgb(107, 107, 132)"}>
            Welcome to my home / Benvenuti nella mia casa
          </Title>
          <Group justify="center" gap="sm" grow>
            <Text className="text-content">
              Well come to Elias’s blog. This blog was designed to make great
              source of Techno & education news, tutorials, and libraries for
              the beginners, intermediate, and experts. I’m trying to share
              educational information, provide software solutions, develop
              libraries and/or tutorials for content that I think is hard to be
              understood.
            </Text>
            <Image
              h={300}
              //  width={1500}
              fit="contain"
              src={"https://eliasw.github.io/img.jpg"}
              style={{ display: "flex", flex: 1 }}
            />
          </Group>
          <Title c={"rgb(107, 107, 132)"}>Who I'm</Title>
          <Text className="text-content">
            Behind this site am I, Elias, Graduated from the faculty of
            Engineering from Scuola Sant'anna and University of Pisa (Jointly),
            Pisa, Italy. I graduated in Master of Science in Embedded Computing
            Systems in July 24 2015. I have finished my Master degree with
            thesis on Design and Analysis of Routing protocol for IPv6 Wireless
            Sensor Networks, were the current routing protocol is analysed in
            detail and came up with new approach that form the routing with best
            route with the same energy consumption with the current approach.
          </Text>
          <Text className="text-content">
            If you need further information you can contact me at:
            elias.atalay88@gmail.com
          </Text>
          <Title c={"rgb(107, 107, 132)"}>Currently</Title>
          <Text className="text-content">
            I'm full Software Developer based in Como, Italy
          </Text>
          <Text className="text-content">
            Experienced Application / web Developer with a demonstrated history
            of working in the information technology and services industry.
            Skilled in Javascript/HTM/CSS. Strong business development
            professional with a Master’s Degree In Computer Engineering from
            Scuola Superiore Sant'Anna and University of Pisa Jointly.
          </Text>
          <List style={{ fontSize: "x-large" }}>
            <List.Item>
              <Text
                fw={700}
                mr={10}
                style={{ fontSize: "x-large" }}
                component="span"
              >
                Frontend:
              </Text>
              Typescript, Javascript, Angular, React, Nextjs, Redux , HTML5,
              CSS3, Tailwind CSS, Mantineui, Materialui Bootstrap, Styled
              Components
            </List.Item>
            <List.Item>
              <Text
                fw={700}
                mr={10}
                style={{ fontSize: "x-large" }}
                component="span"
              >
                Backend:
              </Text>
              Java, Node.js, express.js
            </List.Item>
            <List.Item>
              <Text
                fw={700}
                mr={10}
                style={{ fontSize: "x-large" }}
                component="span"
              >
                Tools & methods:
              </Text>
              Visual studio, Netlify, Chrome-dev-tools, CL, Webpack, Babel,
              ESLint, Prettier, npm, Yarn
            </List.Item>
            <List.Item>
              <Text
                fw={700}
                mr={10}
                style={{ fontSize: "x-large" }}
                component="span"
              >
                Version Control:
              </Text>
              Git, GitHub, GitLab, Bitbucket
            </List.Item>
            <List.Item>
              <Text
                fw={700}
                mr={10}
                style={{ fontSize: "x-large" }}
                component="span"
              >
                APIs and State Management:
              </Text>
              RESTful APIs, GraphQL, Redux, Zustand, React Query, React Context,
              Apollo Client
            </List.Item>
          </List>
        </Stack>
      </Container>
    </>
  );
}
