import { Box, Card, Flex, Heading, Input, Text } from "@chakra-ui/react";
import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import { TRANSFER_CONTRACT_ADDRESS } from "../const/addresses";
import TokenSelection from "./TokenSelection";
import { useState } from "react";
import TokenBalance from "./TokenBalance";
import TransferButton from "./TransferButton";

export default function TransferCard() {
  const address = useAddress();

  const { contract } = useContract(TRANSFER_CONTRACT_ADDRESS);

  const { data: verifiedTokens, isLoading: isVerifiedTokensLoading } =
    useContractRead(contract, "getVerifiedTokens");

  const [formData, setFormData] = useState({
    receiver: "",
    amount: "",
    message: "",
  });

  const [selectedToken, setSelectedToken] = useState("");

  const handleChange = (event: any, name: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: event.target.value,
    }));
  };

  const handleTokenSelection = (tokenAddress: string) => {
    setSelectedToken(tokenAddress);
  };

  return (
    <Card w={"50%"} p={20}>
      <Heading>Transferler </Heading>

      <Text mt={4} fontWeight={"bold"}>
        Token Seçin:
      </Text>
      <Flex flexDirection={"row"} mt={4}>
        {!isVerifiedTokensLoading &&
          verifiedTokens.map((token: string) => (
            <Box key={token} onClick={() => handleTokenSelection(token)}>
              <TokenSelection
                tokenAddress={token}
                isSelected={selectedToken === token}
              />
            </Box>
          ))}
      </Flex>

      <TokenBalance tokenAddress={selectedToken} />

      <Text mt={4} fontWeight={"bold"}>
        Cüzdan Adresi:
      </Text>
      <Input
        placeholder="0x0000000"
        type="text"
        value={formData.receiver}
        onChange={(event) => handleChange(event, "receiver")}
      />
      <Text mt={4} fontWeight={"bold"}>
        Miktar:
      </Text>
      <Input
        placeholder="0.0"
        type="number"
        value={formData.amount}
        onChange={(event) => handleChange(event, "amount")}
      />
      <Text mt={4} fontWeight={"bold"}>
        Mesaj:
      </Text>
      <Input
        placeholder="Transferinize kısa bir mesaj ekleyiniz."
        type="text"
        value={formData.message}
        onChange={(event) => handleChange(event, "message")}
      />
      <Box mt={8}>
        {address ? (
          <TransferButton
            tokenAddress={selectedToken}
            receiver={formData.receiver}
            amount={formData.amount.toString()}
            message={formData.message}
          />
        ) : (
          <Text>Token transferi için cüzdanınızı bağlayın.</Text>
        )}
      </Box>
    </Card>
  );
}
