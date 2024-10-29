import { Button, Grid, GridItem } from "@chakra-ui/react";
import supabase from "../supabaseClient";
import { useAppContext } from "../context/appContext";
import NameForm from "./NameForm";

export default function Header() {
  const { username, setUsername, randomUsername, session } = useAppContext();

  return (
    <Grid
      width="100%"
      templateColumns="max-content 1fr min-content"
      justifyContent="center" // Центрирование по горизонтали
      alignItems="center" // Центрирование по вертикали
      bg="white"
      position="sticky"
      top="0"
      zIndex="10"
      borderBottom="20px solid #1C1C1C"
      backgroundColor="#272727"
      height="60px" // Установите нужную высоту
    >
      {session ? (
        <>
          <GridItem mr="4">
            Welcome <strong>{username}</strong>
          </GridItem>
          <GridItem>
            <Button
              size="sm"
              variant="link"
              onClick={() => {
                const { error } = supabase.auth.signOut();
                if (error) return console.error("error signOut", error);
                const username = randomUsername();
                setUsername(username);
                localStorage.setItem("username", username);
              }}
            >
              Log out
            </Button>
          </GridItem>
        </>
      ) : (
        <GridItem>
          <NameForm username={username} setUsername={setUsername} />
        </GridItem>
      )}
    </Grid>
  );
}
