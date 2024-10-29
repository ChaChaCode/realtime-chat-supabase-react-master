export {};

declare global {
  interface Window {
    Telegram?: {
      WebApp?: {
        ready: () => void;
        setHeaderColor: (color: string) => void;
        disableVerticalSwipes: () => void;
        close: () => void;
        expand: () => void;
        themeParams?: {
          bg_color?: string;
          text_color?: string;
          button_color?: string;
          button_text_color?: string;
          hint_color?: string;
          secondary_bg_color?: string;
        };
      };
    };
  }
}
