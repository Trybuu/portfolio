import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          nav: {
            start: 'Start',
            about: 'About',
            projects: 'Projects',
            contact: 'Contact',
            resume: 'Resume',
          },
          introduce: {
            hello:
              'Hello! Im Marek, a Front End Developer passionate about crafting immersive digital experiences.',
            description:
              'With great attention to detail and a talent for bringing ideas to life, I focus on creating polished, easy-to-use websites and web applications that engage users.',
            button: 'Contact me',
          },
          about: {
            title: 'About',
            education: 'Education',
            educationDesc:
              'I discovered my love for programming while attending a Technical IT School. There, I built a strong foundation in IT knowledge. Next, I graduated with a degree in IT in Business from WSB University in Toruń. At the same time, I took many Front-End courses, honing my programming skills and creating projects. Im always eager to learn more about the latest technologies and trends in the programming world, and Im always looking for new challenges and opportunities to apply my programming skills to solve real-world problems.',
            websites: 'Comprehensive Website Creation',
            websitesDesc:
              'I specialize in creating websites from graphic design all the way through to publication and optimization for search engines. My expertise spans across UX/UI design, front-end and back-end development, as well as database management. I find immense satisfaction in the seamless integration of aesthetics and functionality, ensuring that every website I work on not only looks great but also performs flawlessly. Beyond my professional endeavors, Im a fervent believer in continuous learning, always seeking to expand my skill set and stay updated with the latest trends in web development.',
            incentive: 'Why do you need a website?',
            incentiveDesc:
              'In todays digital era, having a website is essential for businesses of all sizes. A website significantly expands customer reach, with 88% of consumers researching products online before purchasing. It enhances credibility, with 75% of consumers judging a companys credibility based on its website design. Websites offer cost-effective marketing, optimize for local search—"near me" searches have grown by over 500%—and provide 24/7 availability, increasing sales and customer satisfaction. Additionally, websites offer valuable insights into customer behavior, aiding in informed business decisions. Overall, a website is crucial for growth and engagement in the digital age.',
          },
        },
      },
      pl: {
        translation: {
          nav: {
            start: 'Start',
            about: 'O mnie',
            projects: 'Projekty',
            contact: 'Kontakt',
            resume: 'Pobierz Cv',
          },
          introduce: {
            hello:
              'Witaj! Mam na imię Marek, jestem Front End Developerem pasjonującym się tworzeniem imersyjnych cyfrowych doświadczeń.',
            description:
              'Z uwagą do najdrobniejszych do detali oraz talentem do wprowadzania pomysłów w życie, skupiam się na tworzeniu kompletnych, przejrzystych stron oraz aplikacji internetowych angażujących użytkowników.',
            button: 'Skontaktuj się ze mną',
          },
          about: {
            title: 'O mnie',
            education: 'Edukacja',
            educationDesc:
              'Moje zamiłowanie do programowania odkryłem w szkole technicznej o profilu informatycznym. Tam zdobyłem solidne podstawy wiedzy informatycznej. Następnie ukończyłem studia na kierunku Informatyka w Biznesie na Uniwersytecie WSB w Toruniu. Równolegle odbyłem wiele kursów Front-Endu, doskonaląc swoje umiejętności programistyczne i tworząc projekty. Zawsze jestem chętny do nauki nowych technologii i trendów w świecie programowania, a także zawsze szukam nowych wyzwań i możliwości zastosowania moich umiejętności programistycznych do rozwiązywania problemów rzeczywistego świata.',
            websites: 'Kompleksowe tworzenie stron internetowych',
            websitesDesc:
              'Specjalizuję się w tworzeniu stron internetowych od projektu graficznego po publikację i optymalizację dla wyszukiwarek. Moja wiedza obejmuje projektowanie UX/UI, rozwój front-endu i back-endu, a także zarządzanie bazami danych. Ogromną satysfakcję czerpię z płynnego łączenia estetyki i funkcjonalności, dzięki czemu każda witryna, nad którą pracuję, nie tylko wygląda świetnie, ale także działa bez zarzutu. Oprócz moich wysiłków zawodowych gorąco wierzę w ciągłe uczenie się, zawsze staram się poszerzać swoje umiejętności i być na bieżąco z najnowszymi trendami w tworzeniu stron internetowych.',
            incentive: 'Dlaczego potrzebujesz strony internetowej?',
            incentiveDesc:
              'W dzisiejszej erze cyfrowej posiadanie strony internetowej jest niezbędne dla firm każdej wielkości. Strona internetowa znacznie zwiększa zasięg klientów – 88% konsumentów szuka informacji o produktach w Internecie przed zakupem. Zwiększa wiarygodność – 75% konsumentów ocenia wiarygodność firmy na podstawie projektu jej strony internetowej. Strony internetowe oferują opłacalny marketing, optymalizują się pod kątem wyszukiwania lokalnego – liczba wyszukiwań „w pobliżu mnie” wzrosła o ponad 500% – i zapewniają dostępność 24 godziny na dobę, 7 dni w tygodniu, zwiększając sprzedaż i zadowolenie klientów. Ponadto strony internetowe oferują cenny wgląd w zachowania klientów, pomagając w podejmowaniu świadomych decyzji biznesowych. Ogólnie rzecz biorąc, strona internetowa ma kluczowe znaczenie dla rozwoju i zaangażowania w erze cyfrowej.',
          },
        },
      },
    },
  })

export default i18n
