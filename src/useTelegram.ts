import { useEffect } from 'react';

export function useTelegram() {
  useEffect(() => {
    // Проверяем, что SDK загружен
    if (window.Telegram?.WebApp) {
      const webApp = window.Telegram.WebApp;

      // Отправляем событие ready, когда приложение загружено
      webApp.ready();

      // Устанавливаем цвет шапки на secondary_bg_color
      webApp.setHeaderColor('secondary_bg_color');

      // Отключаем вертикальные свайпы для закрытия или минимизации Mini App
      webApp.disableVerticalSwipes();
      
      // Можно добавить любые другие взаимодействия с WebApp SDK
      webApp.expand();

    }
  }, []);

  const closeApp = () => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.close();
    }
  };

  return { closeApp };
}
