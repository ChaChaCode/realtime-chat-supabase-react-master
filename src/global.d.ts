export {}; // Указываем, что это модуль

declare global {
  interface Window {
    Telegram?: {
      WebApp?: {
        ready: () => void;
        setHeaderColor: (color: string) => void;
        disableVerticalSwipes: () => void;
        close: () => void;
        expand: () => void;
      };
    };
  }
}
