import { Badge, Box, Container } from "@chakra-ui/react";
import { useLayoutEffect, useState } from "react";
import { useAppContext } from "../context/appContext";
import Messages from "./Messages";
import { BsChevronDoubleDown } from "react-icons/bs";

export default function Chat() {
  const [height, setHeight] = useState(window.innerHeight - 205);
  const {
    scrollRef,
    onScroll,
    scrollToBottom,
    isOnBottom,
    unviewedMessageCount,
  } = useAppContext();

  useLayoutEffect(() => {
    const updateHeight = () => {
      setHeight(window.innerHeight - 125);
    };

    // Установка начальной высоты и подписка на изменение размеров
    updateHeight();
    window.addEventListener("resize", updateHeight);

    // Очистка обработчика события при размонтировании компонента
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <Container maxW="600px" pb="20px">
      <Box
        bg="#1C1C1C"
        p="5"
        overflow="auto"
        borderRadius="10px"
        height={height}
        onScroll={onScroll}
        ref={scrollRef}
      >
        <Messages />
        {!isOnBottom && (
          <div
            style={{
              position: "sticky",
              bottom: 8,
              float: "right",
              cursor: "pointer",
            }}
            onClick={scrollToBottom}
          >
            {unviewedMessageCount > 0 ? (
              <Badge
                ml="1"
                fontSize="0.8em"
                colorScheme="green"
                display="flex"
                borderRadius="7px"
                padding="3px 5px"
                alignItems="center"
              >
                {unviewedMessageCount}
                <BsChevronDoubleDown style={{ marginLeft: "3px" }} />
              </Badge>
            ) : (
              <BsChevronDoubleDown style={{ marginLeft: "3px" }} />
            )}
          </div>
        )}
      </Box>
    </Container>
  );
}
