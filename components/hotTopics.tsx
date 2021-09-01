import type { NextPage, GetServerSideProps } from "next";
import Image from "next/image";
import {
  Heading,
  Text,
  Flex,
  Box,
  Grid,
  GridItem,
  useBreakpointValue,
  Tooltip,
} from "@chakra-ui/react";
import THE_NEWS_API_KEY from "../keys/keys";
const dayjs = require("dayjs");
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

const HotTopics: NextPage = (props: any) => {
  let display = useBreakpointValue({ base: "none", md: "block" });

  return (
    <Box as="article" maxW="1170" m="auto" maxH="480" h="100%">
      <Heading as="h1" size="2xl" mb="2" mt="20">
        Hot Topics
      </Heading>
      <Grid h="200px" templateColumns="repeat(5, 1fr)" gap={4}>
        <GridItem rowSpan={[5, null, 2, 2]} colSpan={[5, null, 3, 3]}>
          <Box position="relative" borderRadius={8} overflow="hidden">
            <Image
              src={props.posts[0].urlToImage}
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
              width={870}
              height={400}
            />
            <Flex
              overflow="hidden"
              h="400"
              maxH="400"
              w="100%"
              maxW="870"
              rounded="lg"
              // backgroundImage={props.posts[0].urlToImage}
              position="relative"
              backgroundPosition="center"
              backgroundSize="cover"
              alignItems="flex-end"
            >
              <Box
                p={6}
                backgroundColor="rgba(17, 25, 40, 0.4)"
                backdropFilter="blur(5px) saturate(180%)"
              >
                <Heading as="h3" size="md" mb="2" noOfLines={3}>
                  {props.posts[0].title} &rarr;
                </Heading>
                <Flex mt="6">
                  <Text as="sup">{props.posts[0].source.name}</Text>
                  <Text as="sup">{props.posts[0].publishedAt}</Text>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </GridItem>
        <GridItem
          rowSpan={[null, null, 3, 3]}
          colSpan={[null, null, 2, 2]}
          display={display}
        >
          <Flex p={8} h="100%" direction="column">
            <Heading as="h3" size="lg" mb="10" noOfLines={2}>
              {props.posts[0].description} &rarr;
            </Heading>
            <Text fontSize="lg">{props.posts[0].content}</Text>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default HotTopics;
