import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    neutral: PaletteColorOptions;
  }

  interface PaletteOptions {
    neutral?: PaletteColorOptions;
  }

  interface PaletteColor {
    [key: number]: string; // allow numeric shades
    main: string;
    light?: string;
    dark?: string;
    contrastText?: string;
  }

  interface PaletteColorOptions {
    [key: number]: string;
    main: string;
    light?: string;
    dark?: string;
    contrastText?: string;
  }
}
