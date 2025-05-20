export interface EmailContent {
  blocks: Array<EmailBlock>;
  version: string;
  settings?: Record<string, unknown>;
}

export interface EmailBlock {
  id: string;
  type: string;
  data: Record<string, unknown>;
}

export interface ThemeConfig {
  colors?: {
    primary?: string;
    secondary?: string;
    background?: string;
    text?: string;
    [key: string]: string | undefined;
  };
  fonts?: {
    body?: string;
    heading?: string;
    [key: string]: string | undefined;
  };
  spacing?: Record<string, string | number>;
  [key: string]: unknown;
}

export interface EmailBuilderProps {
  /**
   * Initial email content/template
   */
  initialContent?: EmailContent;

  /**
   * Custom theme configuration
   */
  themeConfig?: ThemeConfig;

  /**
   * Callback when content changes
   */
  onChange?: (content: EmailContent) => void;

  /**
   * Whether to enable editing
   */
  readOnly?: boolean;

  /**
   * Custom components to extend/override default components
   */
  components?: Record<string, React.ComponentType<unknown>>;

  /**
   * Additional options
   */
  options?: Record<string, unknown>;
}
