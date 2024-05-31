import type { NextPage } from "next";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { MediaRenderer } from "@thirdweb-dev/react";
import { CARD_IMAGE_URL, HOME_IMAGE_URL } from "../const/addresses";
import FeatureCard from "../components/FeatureCard";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Container maxW={"1440px"}>
      <Flex h={"75vh"} px={20} borderRadius={20}>
        <Flex flexDirection={"row"}>
          <Flex flexDirection={"column"} justifyContent={"center"} w={"60%"}>
            <Stack spacing={4}>
              <Heading fontSize={"6xl"} mb={4}>
                Birkaç tıklama ile diğer cüzdanlara token gönderin.
              </Heading>
              <Text fontSize={"xl"} mb={2}>
                Transfer etmek için bir dizi token arasından seçim yapın. Token
                transferinize eşlik edecek bir mesaj yazın. Başlamak için
                cüzdanınızı bağlayın!
              </Text>
              <Link href={"/transfer"}>
                <Button w={"60%"}>Transfer Yap</Button>
              </Link>
            </Stack>
          </Flex>
          <Box>
            <MediaRenderer src={HOME_IMAGE_URL} height="100%" width="100%" />
          </Box>
        </Flex>
      </Flex>
      <SimpleGrid columns={2} spacing={4} mt={4}>
        <Flex>
          <MediaRenderer src={CARD_IMAGE_URL} height="100%" width="80%" />
        </Flex>
        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Stack spacing={4}>
            <FeatureCard
              step={"01"}
              title={"Token Seç"}
              description={
                "Göndermek için doğrulanmış tokenlerden birini seçin."
              }
            />
            <FeatureCard
              step={"02"}
              title={"Kime Gönderilecek"}
              description={
                "Token göndermek istediğiniz kişinin cüzdan adresini girin. Bu işlem geri alınamaz, bu yüzden doğru adresi girdiğinizden emin olun."
              }
            />
            <FeatureCard
              step={"03"}
              title={"Mesaj Yaz"}
              description={
                "Token transferinize eşlik edecek bir mesaj yazın. Bu isteğe bağlıdır."
              }
            />
          </Stack>
        </Flex>
      </SimpleGrid>
    </Container>
  );
};

export default Home;
