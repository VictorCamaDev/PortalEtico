declare module 'i18next' {
  interface i18n {
    use(plugin: any): i18n;
    init(options?: any): Promise<any>;
    language: string;
    changeLanguage(lng: string): Promise<any>;
    createInstance(): i18n;
  }

  interface I18next extends i18n {
    createInstance(): i18n;
  }

  const i18next: I18next;
  export default i18next;
}
