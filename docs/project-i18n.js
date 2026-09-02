(() => {
  const dictionaries = {
    en: {
      about: 'ABOUT',
      github: 'GITHUB',
      audience: 'FOR WHO',
      topics: 'TOPICS',
      navigation: 'NAVIGATION',
      availability: 'AVAILABILITY',
      installation: 'INSTALLATION',
      navCopy: 'Home, Apps, breadcrumb, previous project, next project and language switcher are shown in the project header.',
      notecortexIntro: 'Bring notes, tasks and calendar into a clear space designed to help you stay focused.',
      notecortexAbout1: 'Centralize important information without multiplying apps and windows.',
      notecortexAbout2: 'NoteCortex helps prepare your day and follow personal projects.',
      notecortexAudience: 'For people who juggle notes, appointments and tasks and need a clear overview.',
      notecortexAvailability: 'NoteCortex is in preparation. Public download will be announced on NeuroForge.',
      notedroppyIntro: 'Send text, links or a selection to your notes instantly without interrupting your current work.',
      notedroppyAbout1: 'Capture what matters while browsing, reading or working.',
      notedroppyAbout2: 'NoteDroppy sends content directly to your notes so you can stay focused.',
      notedroppyAudience: 'For NotePlan users who want to save an idea or a web page without losing their rhythm.',
      notedroppyInstall: 'Download the latest version from GitHub Releases, then open the app on your Mac.'
    },
    fr: {
      about: 'ABOUT',
      github: 'GITHUB',
      audience: 'POUR QUI',
      topics: 'TOPICS',
      navigation: 'NAVIGATION',
      availability: 'DISPONIBILITE',
      installation: 'INSTALLATION',
      navCopy: "Home, Apps, fil d'Ariane, projet précédent, projet suivant et sélecteur de langues sont affichés dans le header projet.",
      notecortexIntro: 'Réunissez vos notes, vos tâches et votre agenda dans un espace clair conçu pour vous aider à rester concentré.',
      notecortexAbout1: 'Centralisez les informations importantes sans multiplier les applications et les fenêtres.',
      notecortexAbout2: 'NoteCortex facilite la préparation de votre journée et le suivi de vos projets personnels.',
      notecortexAudience: "Pour celles et ceux qui jonglent entre notes, rendez-vous et tâches et souhaitent retrouver une vue d'ensemble.",
      notecortexAvailability: 'NoteCortex est actuellement en préparation. Le téléchargement public sera annoncé sur NeuroForge.',
      notedroppyIntro: 'Envoyez instantanément un texte, un lien ou une sélection vers vos notes, sans interrompre ce que vous êtes en train de faire.',
      notedroppyAbout1: 'Capturez ce qui compte pendant que vous naviguez, lisez ou travaillez.',
      notedroppyAbout2: 'NoteDroppy transmet directement le contenu à vos notes pour vous permettre de rester concentré.',
      notedroppyAudience: 'Pour les utilisateurs de NotePlan qui veulent conserver une idée ou une page web sans perdre leur rythme.',
      notedroppyInstall: "Téléchargez la dernière version depuis GitHub Releases, puis ouvrez l'application sur votre Mac."
    },
    de: {
      about: 'INFO',
      github: 'GITHUB',
      audience: 'FUR WEN',
      topics: 'TOPICS',
      navigation: 'NAVIGATION',
      availability: 'VERFUGBARKEIT',
      installation: 'INSTALLATION',
      navCopy: 'Home, Apps, Breadcrumb, vorheriges Projekt, nachstes Projekt und Sprachauswahl stehen im Projektkopf.',
      notecortexIntro: 'Notizen, Aufgaben und Kalender in einem klaren Raum sammeln, damit der Fokus bleibt.',
      notecortexAbout1: 'Wichtige Informationen zentralisieren, ohne Apps und Fenster zu vervielfachen.',
      notecortexAbout2: 'NoteCortex hilft bei Tagesplanung und personlichen Projekten.',
      notecortexAudience: 'Fur Menschen, die Notizen, Termine und Aufgaben in einer Ubersicht brauchen.',
      notecortexAvailability: 'NoteCortex ist in Vorbereitung. Der offentliche Download wird auf NeuroForge angekundigt.',
      notedroppyIntro: 'Text, Links oder Auswahl sofort an Notizen senden, ohne die Arbeit zu unterbrechen.',
      notedroppyAbout1: 'Erfassen, was zahlt, wahrend Sie lesen, surfen oder arbeiten.',
      notedroppyAbout2: 'NoteDroppy sendet Inhalte direkt an Ihre Notizen, damit der Fokus bleibt.',
      notedroppyAudience: 'Fur NotePlan-Nutzer, die Ideen oder Webseiten ohne Rhythmusverlust sichern wollen.',
      notedroppyInstall: 'Laden Sie die neueste Version aus GitHub Releases und offnen Sie die App auf dem Mac.'
    },
    es: {
      about: 'ACERCA',
      github: 'GITHUB',
      audience: 'PARA QUIEN',
      topics: 'TOPICS',
      navigation: 'NAVEGACION',
      availability: 'DISPONIBILIDAD',
      installation: 'INSTALACION',
      navCopy: 'Home, Apps, ruta, proyecto anterior, proyecto siguiente y selector de idiomas aparecen en el encabezado.',
      notecortexIntro: 'Reune notas, tareas y calendario en un espacio claro para mantener el foco.',
      notecortexAbout1: 'Centraliza la informacion importante sin multiplicar apps y ventanas.',
      notecortexAbout2: 'NoteCortex ayuda a preparar el dia y seguir proyectos personales.',
      notecortexAudience: 'Para quienes manejan notas, citas y tareas y necesitan una vision clara.',
      notecortexAvailability: 'NoteCortex esta en preparacion. La descarga publica se anunciara en NeuroForge.',
      notedroppyIntro: 'Envia texto, enlaces o una seleccion a tus notas sin interrumpir tu trabajo.',
      notedroppyAbout1: 'Captura lo importante mientras navegas, lees o trabajas.',
      notedroppyAbout2: 'NoteDroppy envia contenido directamente a tus notas para mantener el foco.',
      notedroppyAudience: 'Para usuarios de NotePlan que quieren guardar ideas o paginas sin perder ritmo.',
      notedroppyInstall: 'Descarga la ultima version desde GitHub Releases y abre la app en tu Mac.'
    },
    it: {
      about: 'INFO',
      github: 'GITHUB',
      audience: 'PER CHI',
      topics: 'TOPICS',
      navigation: 'NAVIGAZIONE',
      availability: 'DISPONIBILITA',
      installation: 'INSTALLAZIONE',
      navCopy: 'Home, Apps, percorso, progetto precedente, progetto successivo e lingue sono nel header del progetto.',
      notecortexIntro: 'Riunisci note, attivita e calendario in uno spazio chiaro per restare concentrato.',
      notecortexAbout1: 'Centralizza le informazioni importanti senza moltiplicare app e finestre.',
      notecortexAbout2: 'NoteCortex aiuta a preparare la giornata e seguire i progetti personali.',
      notecortexAudience: 'Per chi gestisce note, appuntamenti e attivita e vuole una visione chiara.',
      notecortexAvailability: 'NoteCortex e in preparazione. Il download pubblico sara annunciato su NeuroForge.',
      notedroppyIntro: 'Invia testo, link o selezioni alle note senza interrompere il lavoro.',
      notedroppyAbout1: 'Cattura cio che conta mentre navighi, leggi o lavori.',
      notedroppyAbout2: 'NoteDroppy invia il contenuto direttamente alle note per mantenere il focus.',
      notedroppyAudience: 'Per utenti NotePlan che vogliono salvare idee o pagine senza perdere ritmo.',
      notedroppyInstall: 'Scarica l ultima versione da GitHub Releases e apri l app sul Mac.'
    },
    ko: {
      about: 'ABOUT',
      github: 'GITHUB',
      audience: '대상',
      topics: 'TOPICS',
      navigation: 'NAVIGATION',
      availability: '공개 상태',
      installation: '설치',
      navCopy: 'Home, Apps, 경로, 이전 프로젝트, 다음 프로젝트, 언어 선택이 프로젝트 헤더에 표시됩니다.',
      notecortexIntro: '노트, 할 일, 일정을 한곳에 모아 집중을 돕는 macOS 공간입니다.',
      notecortexAbout1: '여러 앱과 창을 늘리지 않고 중요한 정보를 모읍니다.',
      notecortexAbout2: 'NoteCortex는 하루 준비와 개인 프로젝트 관리를 돕습니다.',
      notecortexAudience: '노트, 일정, 할 일을 함께 관리하며 전체 흐름이 필요한 사용자용입니다.',
      notecortexAvailability: 'NoteCortex는 준비 중입니다. 공개 다운로드는 NeuroForge에서 안내됩니다.',
      notedroppyIntro: '작업 흐름을 끊지 않고 텍스트, 링크, 선택 내용을 노트로 보냅니다.',
      notedroppyAbout1: '읽고 탐색하고 일하는 동안 중요한 내용을 캡처합니다.',
      notedroppyAbout2: 'NoteDroppy는 콘텐츠를 바로 노트로 보내 집중을 유지하게 합니다.',
      notedroppyAudience: '아이디어나 웹페이지를 흐름을 잃지 않고 저장하려는 NotePlan 사용자용입니다.',
      notedroppyInstall: 'GitHub Releases에서 최신 버전을 내려받고 Mac에서 앱을 여세요.'
    },
    ja: {
      about: 'ABOUT',
      github: 'GITHUB',
      audience: '対象',
      topics: 'TOPICS',
      navigation: 'NAVIGATION',
      availability: '公開状態',
      installation: 'INSTALL',
      navCopy: 'Home、Apps、パンくず、前のプロジェクト、次のプロジェクト、言語切替をヘッダーに表示します。',
      notecortexIntro: 'ノート、タスク、カレンダーを一つの明快な作業空間にまとめます。',
      notecortexAbout1: 'アプリやウィンドウを増やさず、重要な情報を集約します。',
      notecortexAbout2: 'NoteCortexは一日の準備と個人プロジェクトの追跡を助けます。',
      notecortexAudience: 'ノート、予定、タスクを扱い、全体像を必要とするユーザー向けです。',
      notecortexAvailability: 'NoteCortexは準備中です。公開ダウンロードはNeuroForgeで告知します。',
      notedroppyIntro: '作業を止めずにテキスト、リンク、選択範囲をノートへ送ります。',
      notedroppyAbout1: '閲覧、読書、作業中に大切なものを記録します。',
      notedroppyAbout2: 'NoteDroppyは内容を直接ノートへ送り、集中を保ちます。',
      notedroppyAudience: 'アイデアやWebページを流れを崩さず保存したいNotePlanユーザー向けです。',
      notedroppyInstall: 'GitHub Releasesから最新版を取得し、Macでアプリを開きます。'
    },
    zh: {
      about: 'ABOUT',
      github: 'GITHUB',
      audience: '适用对象',
      topics: 'TOPICS',
      navigation: 'NAVIGATION',
      availability: '可用状态',
      installation: '安装',
      navCopy: 'Home、Apps、面包屑、上一个项目、下一个项目和语言切换显示在项目页顶部。',
      notecortexIntro: '把笔记、任务和日程集中到清晰的 macOS 工作空间。',
      notecortexAbout1: '集中重要信息，不再打开过多应用和窗口。',
      notecortexAbout2: 'NoteCortex 帮助准备一天并跟踪个人项目。',
      notecortexAudience: '适合同时处理笔记、约会和任务并需要全局视图的用户。',
      notecortexAvailability: 'NoteCortex 正在准备中。公开下载会在 NeuroForge 公布。',
      notedroppyIntro: '不中断当前工作，把文本、链接或选区立即发送到笔记。',
      notedroppyAbout1: '在浏览、阅读或工作时捕获重要内容。',
      notedroppyAbout2: 'NoteDroppy 将内容直接发送到笔记，帮助保持专注。',
      notedroppyAudience: '适合想保存想法或网页且不打断节奏的 NotePlan 用户。',
      notedroppyInstall: '从 GitHub Releases 下载最新版本，然后在 Mac 上打开应用。'
    }
  };

  const params = new URLSearchParams(window.location.search);
  const requested = params.get('lang') || 'en';
  const lang = dictionaries[requested] ? requested : 'en';
  const dict = dictionaries[lang];
  const page = document.body.dataset.project;
  const langLabels = {
    en: 'EN',
    fr: 'FR',
    de: 'DE',
    es: 'ES',
    it: 'IT',
    ko: 'KO',
    ja: 'JA',
    zh: 'ZH'
  };

  document.documentElement.lang = lang;
  const currentLangLabel = document.querySelector('.nfo-topline span:last-child');
  if (currentLangLabel) currentLangLabel.textContent = `CP437 / ${langLabels[lang]}`;
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const value = dict[node.dataset.i18n];
    if (value) node.textContent = value;
  });
  document.querySelectorAll('[data-i18n-project]').forEach((node) => {
    const value = dict[`${page}${node.dataset.i18nProject}`];
    if (value) node.textContent = value;
  });
  document.querySelectorAll('.nfo-langbar a').forEach((link) => {
    const active = link.dataset.lang === lang;
    link.toggleAttribute('aria-current', active);
  });

  const lightbox = document.createElement('div');
  lightbox.className = 'nfo-lightbox';
  lightbox.hidden = true;
  lightbox.innerHTML = '<button type="button" aria-label="Close screenshot">CLOSE</button><img alt="">';
  document.body.appendChild(lightbox);

  const lightboxImage = lightbox.querySelector('img');
  const closeLightbox = () => {
    lightbox.hidden = true;
    lightboxImage.removeAttribute('src');
    lightboxImage.alt = '';
  };

  document.querySelectorAll('.nfo-project-shot-link').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const image = link.querySelector('img');
      lightboxImage.src = link.href;
      lightboxImage.alt = image ? image.alt : 'Project screenshot';
      lightbox.hidden = false;
      lightbox.querySelector('button').focus();
    });
  });

  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox || event.target.tagName === 'BUTTON') closeLightbox();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !lightbox.hidden) closeLightbox();
  });
})();
