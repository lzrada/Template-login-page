import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to",
      platform: "Your Platform Name",
      description1: "Here, we believe that building a strong professional network begins with your participation.",
      description2: "We are delighted to offer a modern and user-friendly service to ensure you have the best experience.",
      join: "Join now!",
      signIn: "Sign in",
      register: "Register",
      emailPlaceholder: "Enter Email or Phone",
      passwordPlaceholder: "Enter Password",
      recoverPassword: "Recover Password?",
      orContinueWith: "Or Continue With",
      signInButton: "Sign In",
    },
  },
  id: {
    translation: {
      welcome: "Selamat datang di",
      platform: "Nama Platform Anda",
      description1: "Kami percaya membangun jaringan profesional dimulai dari partisipasi Anda.",
      description2: "Kami senang menawarkan layanan modern dan mudah digunakan agar Anda mendapatkan pengalaman terbaik.",
      join: "Bergabung sekarang!",
      signIn: "Masuk",
      register: "Daftar",
      emailPlaceholder: "Masukkan Email atau Nomor Telepon",
      passwordPlaceholder: "Masukkan Kata Sandi",
      recoverPassword: "Lupa Kata Sandi?",
      orContinueWith: "Atau Login Dengan",
      signInButton: "Masuk",
    },
  },
  jp: {
    translation: {
      welcome: "ようこそ",
      platform: "あなたのプラットフォーム名",
      description1: "私たちは、強力な専門的ネットワークを構築することはあなたの参加から始まると信じています。",
      description2: "最高の体験を保証するために、モダンで使いやすいサービスを提供しています。",
      join: "今すぐ参加！",
      signIn: "サインイン",
      register: "登録",
      emailPlaceholder: "メールまたは電話番号を入力",
      passwordPlaceholder: "パスワードを入力",
      recoverPassword: "パスワードをお忘れですか？",
      orContinueWith: "または次で続行",
      signInButton: "サインイン",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
