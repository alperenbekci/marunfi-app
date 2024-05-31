import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import {
  MediaRenderer,
  Web3Button,
  useContract,
  useContractMetadata,
} from "@thirdweb-dev/react";
import {
  AIRDROP_TOKEN_CONTRACT_ADDRESS,
  CLAIM_TOKEN_IMAGE,
} from "../const/addresses";

export default function ClaimPage() {
  const { contract } = useContract(
    AIRDROP_TOKEN_CONTRACT_ADDRESS,
    "token-drop"
  );

  const { data: contractMetadata } = useContractMetadata(contract);

  const claimAmount = 10;
  const toast = useToast();

  return (
    <Container maxW={"1440px"} h={"80vh"}>
      <SimpleGrid columns={2} spacing={10} h={"100%"}>
        <Flex>
          <MediaRenderer src={CLAIM_TOKEN_IMAGE} height="100%" width="100%" />
        </Flex>
        <Flex flexDirection={"column"} justifyContent={"center"}>
          <Stack spacing={4}>
            <Heading fontSize={"5xl"}>
              TOKEN ${contractMetadata?.symbol}
            </Heading>
            <Text fontSize={"xl"}>
              Bu sayfa üzerinden ${contractMetadata?.symbol} tokeninizi talep
              edin. Bu tokeni, MARUNFI platformunun transfer özelliğini test
              etmek için kullanabilirsiniz.
            </Text>
            <Text fontWeight={"bold"}>
              {claimAmount} ${contractMetadata?.symbol} Tokeni almak için
              aşağıdaki butona tıklayın.
            </Text>
            <Box>
              <Web3Button
                contractAddress={AIRDROP_TOKEN_CONTRACT_ADDRESS}
                action={(contract) => contract.erc20.claim(claimAmount)}
                onSuccess={() =>
                  toast({
                    title: "Transfer Başarılı",
                    description: "Tokenleri başarıyla aldınız!",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                  })
                }
              >
                Token Al
              </Web3Button>
            </Box>
          </Stack>
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
