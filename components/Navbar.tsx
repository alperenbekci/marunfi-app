import { Container, Flex, Text } from "@chakra-ui/react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Link from "next/link";

export default function Navbar() {
  const address = useAddress();

  return (
    <Container maxW={"1440px"} py={4}>
      <Flex
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Link href={"/"}>
          <Text fontWeight={"black"} fontSize={"3xl"}>
            MARUNFI
          </Text>
        </Link>
        {address && (
          <Flex flexDirection={"row"}>
            <Link href={"/transfer"}>
              <Text mr={8}>Transfer Et</Text>
            </Link>
            <Link href={"/claim"}>
              <Text mr={8}>Token Al</Text>
            </Link>
            <Link href={`/profile/${address}`}>
              <Text>Cüzdanım</Text>
            </Link>
          </Flex>
        )}
        <ConnectWallet />
      </Flex>
    </Container>
  );
}
