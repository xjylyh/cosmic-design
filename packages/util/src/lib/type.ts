export interface Config {
    // darkMode?: false | 'class' | 'media',
    theme?: ThemeConfig;
    // variants: VariantConfigs;
    // plugins: Plugin[];
}

export interface ThemeConfig {
    opacity?: SimpleConfig;
    spacing?: SimpleConfig;
    fontSize: FontSzieConfig;
    extend?: ThemeConfig;
}

export interface SimpleConfig {
    [index: string | number]: string;
}
export type FontConf = { fontSize: string };
export interface FontSzieConfig {
    [index: string]: string | string[] | [string, FontConf];
}
