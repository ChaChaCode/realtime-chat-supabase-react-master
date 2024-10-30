import { Stack, Text } from "@chakra-ui/react";
import { useAppContext } from "../context/appContext";

export default function NameForm() {
  const { username } = useAppContext();

  return (
    <Stack direction="row" alignItems="center" justifyContent="center" width="100%" style={{ marginLeft: "20px" }}>
      <Text 
        width="100%" 
        textAlign="center" 
        flexGrow={1}
      >
        Чат и ты <strong>{username}</strong>
      </Text>
    </Stack>
  );
}
