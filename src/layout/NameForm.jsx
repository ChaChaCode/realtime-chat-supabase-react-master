import { useEffect, useRef, useState } from "react";
import { Input, Stack, IconButton, Text } from "@chakra-ui/react";
import { BiSave, BiEdit } from "react-icons/bi";
import { useAppContext } from "../context/appContext";

export default function NameForm() {
  const { username, setUsername } = useAppContext();
  const [newUsername, setNewUsername] = useState(username);
  const [isEditing, setIsEditing] = useState(false);

  // Добавляем состояние для id и username из Telegram WebApp API
  const [telegramId, setTelegramId] = useState("");
  const [telegramUsername, setTelegramUsername] = useState("");

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  useEffect(() => {
    setNewUsername(username);
  }, [username]);

  useEffect(() => {
    // Получаем данные пользователя из Telegram WebApp API
    const tgUser = window.Telegram.WebApp?.initDataUnsafe?.user;
    if (tgUser) {
      setTelegramId(tgUser.id);
      setTelegramUsername(tgUser.username);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleEditing();

    if (!newUsername) {
      setNewUsername(username);
      return;
    }

    setUsername(newUsername);
    localStorage.setItem("username", newUsername);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginLeft: "20px" }}>
      <Stack direction="row" alignItems="center" justifyContent="center" width="100%">
        {isEditing ? (
          <Input
            name="username"
            placeholder="Choose a username"
            onChange={(e) => setNewUsername(e.target.value)}
            value={newUsername}
            bg="#1C1C1C"
            size="sm"
            border="none"
            onBlur={handleSubmit}
            ref={inputRef}
            maxLength="15"
          />
        ) : (
          <Text 
            onClick={toggleEditing} 
            cursor="pointer" 
            width="100%" 
            textAlign="center" 
            flexGrow={1}
            fontSize="5px" 
          >
            Твой id tg - {telegramId}, твой username - {telegramUsername}, твой аккаунт - <strong>{newUsername}</strong>
          </Text>
        )}
        <IconButton
          size="sm"
          paddingBottom="12px"
          variant="outline"
          colorScheme="teal"
          aria-label="Save"
          fontSize="15px"
          icon={isEditing ? <BiSave /> : <BiEdit />}
          border="none"
          onClick={(e) => {
            if (isEditing) {
              handleSubmit(e);
            } else toggleEditing();
          }}
        />
      </Stack>
    </form>
  );
}
