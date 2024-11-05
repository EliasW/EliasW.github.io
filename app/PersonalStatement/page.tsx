import React from "react";

import "/globals.css";
import { Container, Space, Text, Title } from "@mantine/core";

export default function PersonalStatement() {
  return (
    <>
      <Container h={"80vh"} color="red" size="lg" p="md">
        <Title c={"rgb(107, 107, 132)"}>Personal Statement</Title>
        <Space h="md" />
        <Text className="text-content">
          Knowing how things work has been my interest for a long time now and
          ever since I joined high school, physics and mathematics have been my
          favorite subjects. I enjoy applying scientific knowledge in coming up
          with solutions to everyday challenges and in understanding the
          principles behind the operations of various engineering inventions.
          During the second year in high school, even though I had limited
          knowledge in physics, I was among those who participated in the
          Regional Science Congress. This was a forum where high school students
          showcased their scientific prowess by coming up with projects
          addressing specific challenges facing our society in general. Even
          though I did not emerge the winner, but it marked a major milestone in
          my future carrier as it exposed me to the challenges faced by
          engineers.
        </Text>
        <Space h="md" />
        <Text className="text-content">
          After finished my high school I won a regional scholarship in 2006 to
          study my bachelor’s degree in Computer Science and Engineering in
          Mekelle institute of Technology, Mekelle, Ethiopia, an institution
          that enrolls students from high school that have high entrance exam
          for universities. And I successfully completed my study in 2010 and
          graduated with a Very great Distinction. In addition to the course
          works, I did my thesis work on Image Steganography; hiding a secrete
          data inside an image; this thesis has been pursued by Professor Manoj
          V.N.V in 2010 at Mekelle Institute of Technology. The aim of the
          entire thesis was to implement and analyze the Least Significant bit
          algorithm; an algorithm to hide a data inside an image. We implement
          the algorithm and analyze the effect on different image types i.e.,
          JPG, GIF, and TIF and the results indicates that, data that are
          covered in JPG images are not noticeable by our eye if we embed the
          data on the last bit of the pixel on the image, Whereas, if we use the
          last two bits of the pixel to replace by the data it can be noticeable
          by the naked eye. In this work I understood how to do a research,
          specifically to answer the research questions.
        </Text>

        <Space h="md" />
        <Text className="text-content">
          Immediately after graduating from Mekelle Institute of Technology, I
          started to work in an industrial company in Mekelle, Ethiopia as
          System Engineer and I was developing embedded software’s using C, C++
          and Java. Even though, my work was not related to research and
          development, but I gained the experience to work as a team and to
          perform a specific task as an individual.
        </Text>

        <Space h="md" />
        <Text className="text-content">
          After working from 2010 to 2012 I understood to continue studying in
          developed countries and to explore the emerging ideas in digital
          technologies, and I get an admission to study Master degree in
          Embedded Computing Systems in Scuola Superiore Sant’anna and
          University of Pisa, Pisa, Italy (Jointly). And I deeply understand the
          concepts: Real Time Embedded System Design, Embedded System Design
          using Model based design and Real time kernel, Concurrent Distributed
          systems, Digital System Design, Optimization Methods, Digital Control
          and Mechatronics, Robotics and human machine interface, Computational
          Intelligence, and Internet of Things.
        </Text>

        <Space h="md" />
        <Text className="text-content">
          My enthusiasm to pursue my career in the research area stems after I
          joined the MSc to specialize Embedded Computing Systems. During my
          graduate studies I have had experiences and skills working in projects
          more specifically in Embedded Systems software development using C,
          C++, Java, Python, and nesC. Moreover, my final thesis was dealt with
          Design and Analysis of Routing Protocol for IPv6, in which an
          extensive performance evaluation of the routing protocols is studied
          and proposed a modified version of the existing Routing Protocol that
          forms the best paths with less energy consumption which s already
          validated by our simulation results. And I ended with a final mark of
          30/30.
        </Text>

        <Space h="md" />
        <Text className="text-content">
          With this being junior graduating student I understand the need to be
          able to pick things up quickly and I can assure you that during my
          stay in your research team I would prove to be a valuable asset.
        </Text>

        <Space h="md" />
        <Text className="text-content">
          It would be an honor to discuss with you my resume either personally
          or by a Skype interview. I am looking forward to hopefully hearing
          from you.
        </Text>

        <Space h="md" />
        <Text className="text-content">Yours sincerely,</Text>

        <Space h="md" />
        <Text className="text-content">Elias Wendm Atalay</Text>
      </Container>
    </>
  );
}
