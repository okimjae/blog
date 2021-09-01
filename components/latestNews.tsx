import type { NextPage, GetServerSideProps } from "next";
import {
  Heading,
  Text,
  Flex,
  Box,
  Image,
  SimpleGrid,
  Tooltip,
  Icon,
} from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import { MdInfoOutline, MdVisibility } from "react-icons/md";
import THE_NEWS_API_KEY from "../keys/keys";
import fromNow from "../utils/fromNow";
import readTime from "../utils/readTime";

const LatestNews: NextPage = (props: any) => {
  return (
    <Box maxW="1170">
      <Heading as="h1" size="lg" mb="6" mt="20">
        Latest News
      </Heading>

      <SimpleGrid columns={[2, 3, 4]} spacing="40px">
        {props?.posts?.map((e: any, key: number) => {
          return (
            <Box
              key={key}
              as="a"
              // href={e.url}
              rounded="lg"
              flexBasis={["auto", "45%"]}
              overflow="hidden"
              maxH="294"
              maxW="270"
            >
              <Box overflow="hidden" maxH="150" mb="6" borderRadius="6">
                <Image
                  src={
                    e.urlToImage ||
                    "https://s2.glbimg.com/oFncdoGSUg7AKnHTYfvO9sDFiCI=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/P/A/ZMFshYTXeKZ4ddaZGx0w/71q4bbqanvl.-ac-sl1500-.jpg"
                  }
                  alt={`Imagem do post: ${e.title}`}
                  w="100%"
                  h="150"
                />
              </Box>
              <Box>
                <Heading as="h3" size="sm" mb="2" noOfLines={2}>
                  {e.title} &rarr;
                </Heading>
                <Flex mt="6" justify="space-between" mb="2">
                  <Tooltip label={e.source.name}>
                    <>
                      <Icon as={MdInfoOutline} />
                      <Text>...</Text>
                    </>
                  </Tooltip>
                  <Text as="sup">{fromNow(e.publishedAt)}</Text>
                  <Text as="sup">
                    <Icon as={MdVisibility} />
                    {readTime(e.title + e.description + e.content)} min
                  </Text>
                </Flex>
              </Box>
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default LatestNews;
