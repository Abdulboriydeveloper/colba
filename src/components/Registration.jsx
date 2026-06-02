import { useState, useEffect, useRef, useCallback } from "react";
import { BITRIX_FILIAL_IDS, sendLeadToBitrix } from "../utils/bitrixLead";
import logoOq120 from "../assets/images/logoOq-120.png";
import logoOq176 from "../assets/images/logoOq-176.png";
import "./Registration.css";

/* ══════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════ */
const T = {
  uz: {
    heroTitle: ["Kimyo va Biologiya ni", "o'rganishni", "xohlaysizmi?"],
    formTitle: "3 kunlik sinov darsiga yoziling!",
    formSub: "*Faqat Toshkent shahrida yashovchilar uchun!",
    namePh: "Ismingiz",
    phonePh: "Telefon raqamingiz",
    cityPh: "Shahringizni tanlang",
    filialPh: "Filialni tanlang",
    btnText: "Men bilan bog'laning!",
    btnWait: "Yuborilmoqda...",
    okTitle: "Rahmat",
    okMsg: "Tez orada siz bilan bog'lanamiz.",
    back: "Qaytish",
    langLbl: "Uzb",
    errNet: "Xatolik yuz berdi. Qayta urinib ko'ring.",
    cities: [
      { v: "toshkent", l: "Toshkent" },
      { v: "boshqa", l: "Boshqa shahar" },
    ],
    filials: [
      { v: "chilonzor", l: "Chilonzor filiali" },
      { v: "yunusobod", l: "Yunusobod filiali" },
      { v: "mirobod", l: "Mirobod filiali" },
      { v: "sergeli", l: "Sergeli filiali" },
    ],
  },
  ru: {
    heroTitle: ["Хотите", "выучить", "ХИМИЯ и БИОЛОГИЯ?"],
    formTitle: "Запишитесь на 3-дневный пробный урок!",
    formSub: "*Только для жителей города Ташкент!",
    namePh: "Ваше имя",
    phonePh: "Ваш номер телефона",
    cityPh: "Выберите город",
    filialPh: "Выберите филиал",
    btnText: "Свяжитесь со мной!",
    btnWait: "Отправка...",
    okTitle: "Спасибо",
    okMsg: "Мы свяжемся с вами в ближайшее время.",
    back: "Назад",
    langLbl: "Rus",
    errNet: "Произошла ошибка. Попробуйте снова.",
    cities: [
      { v: "toshkent", l: "Ташкент" },
      { v: "boshqa", l: "Другой город" },
    ],
    filials: [
      { v: "chilonzor", l: "Филиал Чиланзар" },
      { v: "yunusobod", l: "Филиал Юнусабад" },
      { v: "mirobod", l: "Филиал Мирабад" },
      { v: "sergeli", l: "Филиал Сергели" },
    ],
  },
};

const SLIDES = {
  uz: [
    { id: 1, color: "#22c55e", bg: "linear-gradient(135deg,#065f46,#10b981)", e: "👩‍🏫", title: "USTOZLAR", desc: "Har bir ustoz maxsus o'qitish kurslarini tamomlagan bo'lib, ularning tajribalari 10 yilgacha. Bunday ustozlarni hech nimaga alishmaymiz." },
    { id: 2, color: "#3b82f6", bg: "linear-gradient(135deg,#1e3a8a,#3b82f6)", e: "🏆", title: "100% NATIJA", desc: "Colba ta'lim dasturini to'liq yakunlagan o'quvchilar tibbiyot oliygohlariga muddatidan oldin kirishadi." },
    { id: 3, color: "#f97316", bg: "linear-gradient(135deg,#7c2d12,#f97316)", e: "🤝", title: "BEPUL YORDAMCHI USTOZ", desc: "Mavzuni o'zlashtirishda qiynalayotgan o'quvchilar uchun yordamchi ustozlar doim yonida bo'lib, mavzuni qayta tushuntirib berishadi." },
    { id: 4, color: "#ef4444", bg: "linear-gradient(135deg,#7f1d1d,#ef4444)", e: "📅", title: "HAR KUNLIK DARSLAR", desc: "Haftasiga 5 kun, 4-5 soatdan o'qitish orqali tibbiyot oliygohlariga kirishingizga yordam beramiz." },
    { id: 5, color: "#f59e0b", bg: "linear-gradient(135deg,#78350f,#f59e0b)", e: "📝", title: "HAR KUNLIK IMTIHON", desc: "O'quvchining mavzu o'zlashtirayotganini doimiy nazorat qilib borish uchun har kunlik imtihon tizimi joriy qilingan." },
    { id: 6, color: "#06b6d4", bg: "linear-gradient(135deg,#164e63,#06b6d4)", e: "🎁", title: "BEPUL MAJBURIY FANLAR", desc: "Ona tili, tarix va matematika fanlari Colba o'quvchilari uchun mutlaqo bepul o'qitiladi." },
  ],
  ru: [
    { id: 1, color: "#22c55e", bg: "linear-gradient(135deg,#065f46,#10b981)", e: "👩‍🏫", title: "УЧИТЕЛЯ", desc: "Каждый преподаватель прошёл специальные курсы повышения квалификации и имеет до 10 лет опыта работы." },
    { id: 2, color: "#3b82f6", bg: "linear-gradient(135deg,#1e3a8a,#3b82f6)", e: "🏆", title: "100% РЕЗУЛЬТАТ", desc: "Студенты, завершившие образовательную программу Colba, поступят в медицинские вузы раньше запланированного срока." },
    { id: 3, color: "#f97316", bg: "linear-gradient(135deg,#7c2d12,#f97316)", e: "🤝", title: "БЕСПЛАТНЫЙ ПОМОЩНИК УЧИТЕЛЯ", desc: "Для студентов, испытывающих трудности, всегда есть репетиторы, которые помогут повторно объяснить тему." },
    { id: 4, color: "#ef4444", bg: "linear-gradient(135deg,#7f1d1d,#ef4444)", e: "📅", title: "ЕЖЕДНЕВНЫЕ УРОКИ", desc: "Мы поможем вам поступить в медицинские вузы, проводя занятия по 4-5 часов в день, 5 дней в неделю." },
    { id: 5, color: "#f59e0b", bg: "linear-gradient(135deg,#78350f,#f59e0b)", e: "📝", title: "ЕЖЕДНЕВНЫЙ ЭКЗАМЕН", desc: "Для постоянного контроля за усвоением предмета введена система ежедневных экзаменов." },
    { id: 6, color: "#06b6d4", bg: "linear-gradient(135deg,#164e63,#06b6d4)", e: "🎁", title: "БЕСПЛАТНЫЕ ОБЯЗАТЕЛЬНЫЕ ПРЕДМЕТЫ", desc: "Родной язык, история и математика преподаются ученикам школы Colba совершенно бесплатно." },
  ],
};

const FLAGS = { uz: "🇺🇿", ru: "🇷🇺" };

/* ══════════════════════════════════════════════════
   PHONE HELPERS
══════════════════════════════════════════════════ */
function getPhoneDigits(value) {
  return value.replace(/\D/g, "");
}
function getLocalPhoneDigits(value) {
  const digits = getPhoneDigits(value);
  if (digits.startsWith("998")) return digits.slice(3, 12);
  if (digits.startsWith("0")) return digits.slice(1, 10);
  return digits.slice(0, 9);
}
function formatPhone(value) {
  const local = getLocalPhoneDigits(value);
  if (!local) return "";
  const parts = ["+998"];
  if (local.length > 0) parts.push(local.slice(0, 2));
  if (local.length > 2) parts.push(local.slice(2, 5));
  if (local.length > 5) parts.push(local.slice(5, 7));
  if (local.length > 7) parts.push(local.slice(7, 9));
  return parts.join(" ");
}
function isValidPhone(value) {
  return getPhoneDigits(value).length === 12 && getPhoneDigits(value).startsWith("998");
}

/* ══════════════════════════════════════════════════
   SUB-COMPONENTS
══════════════════════════════════════════════════ */
function CustomSelect({ wrap, trigger, label, placeholder, hasValue, isOpen, isErr, onToggle, options, activeVal, onPick, ariaLabel, dropdownId }) {
  return (
    <div
      className={`fs-wrap${isOpen ? " open" : ""}${isErr ? " fs-err" : ""}`}
      id={wrap}
    >
      <button
        className={`fs-trigger${hasValue ? " has-value" : ""}`}
        id={trigger}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={dropdownId}
        aria-required="true"
        aria-label={ariaLabel}
        aria-invalid={isErr}
        onClick={onToggle}
      >
        <span>{label || placeholder}</span>
        <span className="fs-arrow" aria-hidden="true">▾</span>
      </button>
      <div className="fs-dropdown" id={dropdownId} role="listbox" aria-label={ariaLabel}>
        {options.map((opt) => (
          <button
            key={opt.v}
            type="button"
            className={`fs-option${opt.v === activeVal ? " active" : ""}`}
            role="option"
            aria-selected={opt.v === activeVal}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); onPick(opt); }}
          >
            {opt.l}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════ */
export default function Registration() {
  const [lang, setLang] = useState("uz");
  const [current, setCurrent] = useState(0);
  const [animDir, setAnimDir] = useState(null); // 'enter' | 'exit-next' | 'exit-prev' | null
  const [animating, setAnimating] = useState(false);

  // Form state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selCity, setSelCity] = useState("");
  const [selFilial, setSelFilial] = useState("");
  const [cityOpen, setCityOpen] = useState(false);
  const [filialOpen, setFilialOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const [nameErr, setNameErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);
  const [cityErr, setCityErr] = useState(false);
  const [filialErr, setFilialErr] = useState(false);
  const [netError, setNetError] = useState("");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [successName, setSuccessName] = useState("");

  const timerRef = useRef(null);
  const slides = SLIDES[lang];
  const t = T[lang];

  // Slider auto-play
  const goTo = useCallback(
    (idx, dir) => {
      if (animating) return;
      setAnimating(true);
      setAnimDir(dir === "next" ? "exit-next" : "exit-prev");
      setTimeout(() => {
        setCurrent(idx);
        setAnimDir("enter");
        setTimeout(() => {
          setAnimDir(null);
          setAnimating(false);
        }, 380);
      }, 380);
    },
    [animating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, "next");
  }, [current, slides.length, goTo]);

  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 4800);
  }, [next]);

  useEffect(() => {
    const t = setTimeout(() => {
      timerRef.current = setInterval(next, 4800);
    }, 9000);
    return () => { clearTimeout(t); clearInterval(timerRef.current); };
  }, [next]);

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = () => { setCityOpen(false); setFilialOpen(false); setLangOpen(false); };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const closeAll = () => { setCityOpen(false); setFilialOpen(false); setLangOpen(false); };

  // City pick
  const onCityPick = (opt) => {
    setSelCity(opt.v);
    setSelFilial("");
    setCityErr(false);
    setCityOpen(false);
    if (opt.v !== "toshkent") setFilialErr(false);
  };

  // Filial pick
  const onFilialPick = (opt) => {
    setSelFilial(opt.v);
    setFilialErr(false);
    setFilialOpen(false);
  };

  // Phone formatting
  const handlePhoneFocus = () => {
    if (!phone) setPhone("+998 ");
  };
  const handlePhoneInput = (e) => {
    setPhone(formatPhone(e.target.value));
    setPhoneErr(false);
  };
  const handlePhoneBlur = () => {
    if (getLocalPhoneDigits(phone).length === 0) setPhone("");
  };

  // Submit
  const handleSubmit = async () => {
    if (sending) return;
    const trimmedName = name.trim();
    const formattedPhone = formatPhone(phone).trim();
    let hasErr = false;

    if (!trimmedName) { setNameErr(true); hasErr = true; } else setNameErr(false);
    if (!isValidPhone(formattedPhone)) { setPhoneErr(true); hasErr = true; } else setPhoneErr(false);
    if (!selCity) { setCityErr(true); hasErr = true; } else setCityErr(false);
    if (selCity === "toshkent" && !selFilial) { setFilialErr(true); hasErr = true; } else setFilialErr(false);

    if (hasErr) return;

    setSending(true);
    setNetError("");
    try {
      if (selCity === "toshkent") {
        const filialLabel = t.filials.find((f) => f.v === selFilial)?.l || selFilial;
        await sendLeadToBitrix({
          name: trimmedName,
          phone: formattedPhone,
          filial: { label: filialLabel, bitrixId: BITRIX_FILIAL_IDS[selFilial] },
          lang,
          sourceLabel: "Registration",
        });
      } else {
        console.info("[Colba] Boshqa shahar tanlandi — lid Bitrix ga yuborilmadi.");
      }
      setSuccessName(trimmedName);
      setSuccess(true);
    } catch (err) {
      console.error("[Colba] Bitrix xatosi:", err);
      setNetError(t.errNet);
    } finally {
      setSending(false);
    }
  };

  // Reset
  const handleReset = () => {
    setSuccess(false);
    setName("");
    setPhone("");
    setSelCity("");
    setSelFilial("");
    setNameErr(false);
    setPhoneErr(false);
    setCityErr(false);
    setFilialErr(false);
    setNetError("");
  };

  // Lang switch
  const switchLang = (l) => {
    setLang(l);
    setCurrent(0);
    setSuccess(false);
    handleReset();
    setLangOpen(false);
  };

  const slide = slides[current];
  const slideClassName = `slide-card${animDir ? ` slide-${animDir}` : ""}`;
  const cityLabel = selCity ? t.cities.find((c) => c.v === selCity)?.l : "";
  const filialLabel = selFilial ? t.filials.find((f) => f.v === selFilial)?.l : "";

  return (
    <div className="registration-page">
      {/* NAVBAR */}
      <nav className="registration-navbar" aria-label="Asosiy">
        <a className="nav-logo" href="#">
          <img
            src={logoOq176}
            srcSet={`${logoOq120} 120w, ${logoOq176} 176w`}
            sizes="(max-width: 480px) 120px, (max-width: 860px) 140px, 176px"
            alt="Colba"
            className="registration-logo-img"
            width="176"
            height="65"
          />
        </a>
        <div className="lang-wrap">
          <button
            className="nav-lang"
            type="button"
            aria-haspopup="true"
            aria-expanded={langOpen}
            aria-controls="langDd"
            onClick={(e) => { e.stopPropagation(); setLangOpen((v) => !v); setCityOpen(false); setFilialOpen(false); }}
          >
            <span className="flag" aria-hidden="true">{FLAGS[lang]}</span>
            <span>{t.langLbl}</span>
            <span className="chevron" aria-hidden="true">▾</span>
          </button>
          <div className={`lang-dd${langOpen ? " open" : ""}`} id="langDd" role="menu">
            <button className="dd-item" type="button" data-lang="uz" role="menuitem"
              onClick={(e) => { e.stopPropagation(); switchLang("uz"); }}>
              🇺🇿 O'zbekcha
            </button>
            <button className="dd-item" type="button" data-lang="ru" role="menuitem"
              onClick={(e) => { e.stopPropagation(); switchLang("ru"); }}>
              🇷🇺 Русский
            </button>
          </div>
        </div>
      </nav>

      {/* MAIN */}
      <main className="registration-main">
        {/* LEFT */}
        <div className="registration-left">
          <h1 className="registration-hero-title">
            {t.heroTitle.map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </h1>

          <div className="slider-outer">
            <div
              className={slideClassName}
              style={{ background: slide.bg }}
              aria-live="polite"
            >
              <div className="sc-deco" aria-hidden="true"><span /><span /></div>
              <div className="sc-photo">
                <div
                  className="sc-photo-placeholder"
                  style={{ fontSize: "88px", alignItems: "flex-end" }}
                  aria-hidden="true"
                >
                  {slide.e}
                </div>
              </div>
              <div className="sc-body">
                <h2 className="sc-title"
                  dangerouslySetInnerHTML={{ __html: slide.title.replace(/\n/g, "<br/>") }}
                />
                <p className="sc-desc">{slide.desc}</p>
              </div>
            </div>

            <div className="sdots" aria-label="Slaydlar">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  className={`sdot${i === current ? " active" : ""}`}
                  style={{ "--c": s.color }}
                  aria-label={`${i + 1}-slayd`}
                  aria-current={i === current ? "true" : "false"}
                  onClick={(e) => {
                    e.stopPropagation();
                    goTo(i, i > current ? "next" : "prev");
                    resetTimer();
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ARROW */}
        <div className="arrow-wrap" aria-hidden="true">
          <svg width="64" height="46" viewBox="0 0 64 46" fill="none" focusable="false">
            <path d="M56.7209 5.40605C56.7827 6.1656 56.8446 6.92516 56.8181 7.73139C46.786 -0.779873 32.4866 -2.1719 20.5207 4.71075C7.45239 12.2886 -1.51059 29.3561 1.33808 44.602C1.44667 45.45 3.01641 45.6399 3.17303 44.6519C5.46419 31.2196 8.34762 18.2669 20.7353 10.2562C30.4343 4.00433 44.6933 3.60689 53.239 11.6579C51.5341 11.4262 49.7876 11.3296 48.0827 11.0979C43.7789 10.6537 43.5716 17.3272 47.7403 17.7295L60.4283 19.0668C62.0865 19.2101 64.0629 17.6008 63.9341 15.858C63.7233 12.4609 63.6009 9.01718 63.3901 5.62009C63.3826 1.32344 56.5315 0.979048 56.7209 5.40605Z" fill="white" />
          </svg>
        </div>

        {/* RIGHT — FORM */}
        <div className="registration-right">
          <div className="form-card">
            {!success ? (
              <div id="formView">
                <div className="fc-header">
                  <h2 className="fc-title">{t.formTitle}</h2>
                  <p className="fc-sub">{t.formSub}</p>
                </div>

                <div className="fc-fields">
                  {/* Name */}
                  <div className={`fi${nameErr ? " fi-err" : ""}`}>
                    <label className="sr-only" htmlFor="nameInput">{t.namePh}</label>
                    <input
                      type="text"
                      id="nameInput"
                      autoComplete="name"
                      required
                      aria-required="true"
                      aria-invalid={nameErr}
                      placeholder={t.namePh}
                      value={name}
                      onChange={(e) => { setName(e.target.value); setNameErr(false); }}
                    />
                  </div>

                  {/* Phone */}
                  <div className={`fi${phoneErr ? " fi-err" : ""}`}>
                    <label className="sr-only" htmlFor="phoneInput">{t.phonePh}</label>
                    <input
                      type="tel"
                      id="phoneInput"
                      autoComplete="tel"
                      inputMode="numeric"
                      maxLength={17}
                      required
                      aria-required="true"
                      aria-invalid={phoneErr}
                      placeholder={t.phonePh}
                      value={phone}
                      onFocus={handlePhoneFocus}
                      onChange={handlePhoneInput}
                      onBlur={handlePhoneBlur}
                    />
                  </div>

                  {/* City */}
                  <CustomSelect
                    wrap="cityWrap"
                    trigger="cityTrigger"
                    label={cityLabel}
                    placeholder={t.cityPh}
                    hasValue={!!selCity}
                    isOpen={cityOpen}
                    isErr={cityErr}
                    onToggle={(e) => { e.stopPropagation(); if (cityOpen) { closeAll(); } else { closeAll(); setCityOpen(true); } }}
                    options={t.cities}
                    activeVal={selCity}
                    onPick={onCityPick}
                    ariaLabel={t.cityPh}
                    dropdownId="cityDropdown"
                  />

                  {/* Filial */}
                  {selCity === "toshkent" && (
                    <div className="filial-row visible">
                      <CustomSelect
                        wrap="filialWrap"
                        trigger="filialTrigger"
                        label={filialLabel}
                        placeholder={t.filialPh}
                        hasValue={!!selFilial}
                        isOpen={filialOpen}
                        isErr={filialErr}
                        onToggle={(e) => { e.stopPropagation(); if (filialOpen) { closeAll(); } else { closeAll(); setFilialOpen(true); } }}
                        options={t.filials}
                        activeVal={selFilial}
                        onPick={onFilialPick}
                        ariaLabel={t.filialPh}
                        dropdownId="filialDropdown"
                      />
                    </div>
                  )}
                </div>

                {netError && (
                  <p className="fc-error" role="alert" style={{ display: "block" }}>{netError}</p>
                )}

                <button
                  className="fc-btn"
                  type="button"
                  disabled={sending}
                  onClick={handleSubmit}
                >
                  {sending ? (
                    <>
                      <span className="fc-spinner" />
                      {t.btnWait}
                    </>
                  ) : t.btnText}
                </button>
              </div>
            ) : (
              <div className="fc-success">
                <div className="fc-check" aria-hidden="true">✓</div>
                <h3>{t.okTitle}, {successName}!</h3>
                <p>{t.okMsg}</p>
                <button className="fc-reset" type="button" onClick={handleReset}>{t.back}</button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
