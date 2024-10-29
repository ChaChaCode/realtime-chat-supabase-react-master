// telegram.d.ts
interface Window {
  Telegram: {
    WebApp: {
      initDataUnsafe: {
        user?: {
          id: number;
          first_name: string;
          last_name?: string;
          username?: string;
        };
      };
      HapticFeedback: {
        /**
         * A method to indicate that an impact occurred. 
         * The Telegram app will play the appropriate haptics based on the given style.
         * 
         * @param style One of the following values:
         * - 'light': A collision between small or lightweight UI objects.
         * - 'medium': A collision between medium-sized or medium-weight UI objects.
         * - 'heavy': A collision between large or heavyweight UI objects.
         * - 'rigid': A collision between hard or inflexible UI objects.
         * - 'soft': A collision between soft or flexible UI objects.
         */
        impactOccurred: (style?: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft') => void;
      };
      ready: () => void;
      close: () => void;
      setHeaderColor: (color: string) => void;
      disableVerticalSwipes: () => void; // Добавляем новый метод
      expand: () => void; // Если вы также добавили метод expand
      colorScheme?: 'light' | 'dark'; // Добавляем свойство colorScheme
      theme_changed?: (newTheme: 'light' | 'dark') => void; // Добавляем свойство theme_changed
    };
  };
}
