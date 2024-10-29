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
  
      // Применяем цвета из themeParams, если они определены
      const themeParams = webApp.themeParams;
      if (themeParams) {
        document.body.style.backgroundColor = themeParams.bg_color || '#ffffff';
        document.body.style.color = themeParams.text_color || '#000000';
        document.documentElement.style.setProperty('--scrollbar-color', themeParams.button_color || '#888');
        document.documentElement.style.setProperty('--link-color', themeParams.button_text_color || 'teal');
      }
  
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
