import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  ArrowRight,
  ArrowUp,
  ShieldCheck,
  Sparkles,
  Ruler,
  Home,
  ZoomIn,
} from "lucide-react";

const brand = {
  name: "glowopt",
  domain: "glowopt.org",

  phoneDisplay: "+90 530 401 18 78",
  phoneRaw: "905304011878",
  contactName: "İbrahim ALP",
  email: "teklif@glowopt.org",
  address: "Eskişehir, Türkiye",
  mapsUrl: "https://maps.app.goo.gl/dRiveZsbhg4ZNAgZA",
  mapsQuery: "Eskişehir iç mekan tasarım dekorasyon",
};

const galleryItems = [
  {
    title: "Modern Yaşam Alanı",
    category: "Salon Tasarımı",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
    description:
      "Sade çizgiler, sıcak ışık ve fonksiyonel yerleşim ile güven veren modern iç mekan yaklaşımı.",
  },
  {
    title: "Mutfak & Depolama",
    category: "Özel Çözüm",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1400&q=80",
    description:
      "Alanı verimli kullanan, günlük hayatı kolaylaştıran temiz ve uygulanabilir mutfak çözümleri.",
  },
  {
    title: "Ofis Dekorasyonu",
    category: "Kurumsal Alan",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
    description:
      "Marka kimliğini destekleyen, ferah ve üretkenliği artıran çalışma alanları.",
  },
  {
    title: "Yatak Odası",
    category: "Konfor Alanı",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=80",
    description:
      "Rahatlatıcı tonlar, doğru aydınlatma ve ölçülü dekorasyonla huzurlu yaşam alanları.",
  },
  {
    title: "Mağaza Tasarımı",
    category: "Ticari Mekan",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=80",
    description:
      "Müşteri deneyimini güçlendiren, net dolaşım ve güçlü vitrin etkisi oluşturan çözümler.",
  },
  {
    title: "Banyo Yenileme",
    category: "Uygulama",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1400&q=80",
    description:
      "Temiz detaylar, dayanıklı malzeme ve pratik kullanım odağıyla yenileme çalışmaları.",
  },
];

function Logo({ className = "" }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/logo.png"
        alt="glowopt.org İç Mekan Dekorasyon"
        className="h-14 w-auto object-contain sm:h-16 lg:h-[72px]"
      />
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-1.5 text-xs font-medium text-stone-600 shadow-sm sm:px-4 sm:py-2 sm:text-sm">
      <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
      {children}
    </div>
  );
}

export default function GlowoptLandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [logoOpen, setLogoOpen] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 500);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const whatsappUrl = useMemo(() => {
    const text = encodeURIComponent(
      "Merhaba, glowopt.org üzerinden ulaşıyorum. İç mekan tasarım/dekorasyon için teklif almak istiyorum."
    );

    return `https://wa.me/${brand.phoneRaw}?text=${text}`;
  }, []);

  const mapsUrl = useMemo(() => {
    if (brand.mapsUrl) return brand.mapsUrl;

    const query = encodeURIComponent(brand.mapsQuery);
    return `https://www.google.com/maps/search/?api=1&query=${query}`;
  }, []);

  const mailUrl = useMemo(() => {
    const subject = encodeURIComponent(
      "İç mekan tasarım/dekorasyon teklif talebi"
    );

    const body = encodeURIComponent(`Merhaba,

İç mekan tasarım/dekorasyon hizmetiniz için teklif almak istiyorum.

Proje türü:
Adres/konum:
Yaklaşık metrekare:
Telefon:

Teşekkürler.`);

    return `mailto:${brand.email}?subject=${subject}&body=${body}`;
  }, []);

  const navLinks = [
    { label: "Biz Kimiz", href: "#biz-kimiz" },
    { label: "Misyon", href: "#misyon" },
    { label: "Vizyon", href: "#vizyon" },
    { label: "Galeri", href: "#galeri" },
    { label: "İletişim", href: "#iletisim" },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f3ee] text-stone-900">
      <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-[#f7f3ee]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-5 lg:px-8">
          <button
            type="button"
            onClick={() => setLogoOpen(true)}
            className="cursor-zoom-in rounded-2xl transition hover:scale-[1.02]"
            aria-label="Glowopt logosunu büyüt"
          >
            <Logo />
          </button>

          <nav className="hidden items-center gap-8 text-sm font-medium text-stone-700 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-stone-950"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${brand.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white/50 px-4 py-2 text-sm font-semibold transition hover:bg-white"
            >
              <Phone className="h-4 w-4" />
              Ara
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-stone-950 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>

          <button
            onClick={() => setMenuOpen((value) => !value)}
            className="rounded-full border border-stone-300 bg-white/60 p-2 lg:hidden"
            aria-label="Menüyü aç/kapat"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-stone-200 bg-[#f7f3ee] px-4 py-4 lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-stone-700 hover:bg-white"
                >
                  {link.label}
                </a>
              ))}

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-stone-950 px-5 py-3 text-sm font-semibold text-white"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Mesajı Gönder
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <section className="relative overflow-hidden px-4 py-10 sm:px-5 sm:py-14 lg:px-8 lg:py-24">
          <div className="absolute left-1/2 top-0 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-white/70 blur-3xl sm:h-[540px] sm:w-[540px]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="text-center lg:text-left"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-stone-600 shadow-sm sm:mb-5 sm:px-4 sm:py-2 sm:text-sm">
                <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                Eskişehir iç mekan tasarım & dekorasyon
              </div>

              <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-[0.96] tracking-[-0.06em] text-stone-950 sm:text-5xl md:text-6xl lg:mx-0 lg:text-7xl">
                Yaşam alanınızı sade, şık ve güvenilir bir dokunuşla yenileyin.
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-stone-600 sm:text-lg sm:leading-8 lg:mx-0">
                glowopt; ev, ofis ve ticari mekanlar için anlaşılır süreç,
                temiz tasarım dili ve uygulanabilir dekorasyon çözümleri sunar.
                Fotoğraflarımızla yapılan işleri görün, hızlıca teklif alın.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href="#galeri"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-stone-950 px-6 py-3.5 text-sm font-bold text-white shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl sm:px-7 sm:py-4"
                >
                  Çalışmaları Gör
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href={mailUrl}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-300 bg-white/70 px-6 py-3.5 text-sm font-bold text-stone-900 transition hover:bg-white sm:px-7 sm:py-4"
                >
                  <Mail className="h-4 w-4" />
                  Teklif Al
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative mx-auto w-full max-w-xl lg:max-w-none"
            >
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-white p-2 shadow-2xl sm:rounded-[2.5rem] sm:p-3">
                <img
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1500&q=80"
                  alt="Modern iç mekan tasarım örneği"
                  className="h-72 w-full rounded-[1.35rem] object-cover sm:h-96 sm:rounded-[2rem] lg:h-[520px]"
                />

                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/90 p-4 shadow-xl backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-8 sm:rounded-[1.75rem] sm:p-5">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="rounded-xl bg-stone-950 p-2.5 text-white sm:rounded-2xl sm:p-3">
                      <Home className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>

                    <div>
                      <div className="text-sm font-semibold text-stone-950 sm:text-base">
                        Anahtar fikir
                      </div>
                      <p className="mt-1 text-xs leading-5 text-stone-600 sm:text-sm sm:leading-6">
                        Sade görünüm, doğru ışık, fonksiyonel yerleşim ve güven
                        veren uygulama.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section
          id="biz-kimiz"
          className="px-4 py-10 sm:px-5 sm:py-14 lg:px-8 lg:py-16"
        >
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm sm:rounded-[2rem] sm:p-8 lg:col-span-1">
              <SectionLabel>Biz Kimiz</SectionLabel>

              <h2 className="mt-5 text-2xl font-semibold tracking-tight text-stone-950 sm:text-3xl">
                Mekanı daha iyi hissettiren çözümler üretiriz.
              </h2>

              <p className="mt-4 text-sm leading-7 text-stone-600 sm:text-base">
                glowopt, Eskişehir merkezli iç mekan tasarım ve dekorasyon
                yaklaşımıyla ev, ofis ve ticari alanlarda sade, uygulanabilir
                ve estetik çözümler sunar.
              </p>
            </div>

            <div
              id="misyon"
              className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm sm:rounded-[2rem] sm:p-8"
            >
              <div className="mb-5 inline-flex rounded-2xl bg-[#f7f3ee] p-3 text-stone-950">
                <Ruler className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                Misyon
              </h3>

              <p className="mt-4 text-sm leading-7 text-stone-600 sm:text-base">
                Müşterinin ihtiyacını doğru anlayıp bütçe, kullanım alışkanlığı
                ve mekan potansiyelini dikkate alan net tasarım çözümleri
                üretmek.
              </p>
            </div>

            <div
              id="vizyon"
              className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm sm:rounded-[2rem] sm:p-8 md:col-span-2 lg:col-span-1"
            >
              <div className="mb-5 inline-flex rounded-2xl bg-[#f7f3ee] p-3 text-stone-950">
                <Sparkles className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                Vizyon
              </h3>

              <p className="mt-4 text-sm leading-7 text-stone-600 sm:text-base">
                Eskişehir'de güvenilir, ulaşılabilir ve işiyle konuşulan bir iç
                mekan tasarım/dekorasyon markası olmak.
              </p>
            </div>
          </div>
        </section>

        <section
          id="galeri"
          className="px-4 py-10 sm:px-5 sm:py-14 lg:px-8 lg:py-16"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-col justify-between gap-5 sm:mb-10 lg:flex-row lg:items-end">
              <div className="text-center lg:text-left">
                <SectionLabel>Galeri</SectionLabel>

                <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-stone-950 sm:text-4xl lg:mx-0 lg:text-5xl">
                  Yapılan işleri görerek karar verin.
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-stone-600 sm:text-base lg:mx-0">
                  Fotoğraflara tıklayın; detay büyüsün. Bu alan gerçek proje
                  fotoğrafları geldikçe markanın en güçlü güven kanıtı olacak.
                </p>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-bold transition hover:bg-stone-950 hover:text-white sm:px-6"
              >
                <MessageCircle className="h-4 w-4" />
                Projemi Konuşalım
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              {galleryItems.map((item) => (
                <button
                  key={item.title}
                  onClick={() => setActiveItem(item)}
                  className="group overflow-hidden rounded-[1.5rem] bg-white text-left shadow-sm ring-1 ring-stone-200 transition hover:-translate-y-1 hover:shadow-xl sm:rounded-[2rem]"
                >
                  <div className="relative h-56 overflow-hidden sm:h-64 lg:h-72">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/10 to-transparent" />

                    <div className="absolute right-4 top-4 rounded-full bg-white/90 p-3 text-stone-950 opacity-0 shadow-lg transition group-hover:opacity-100">
                      <ZoomIn className="h-5 w-5" />
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white sm:bottom-5 sm:left-5 sm:right-5">
                      <div className="text-xs font-medium text-white/80 sm:text-sm">
                        {item.category}
                      </div>

                      <h3 className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <p className="p-4 text-sm leading-6 text-stone-600 sm:p-5">
                    {item.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-10 sm:px-5 sm:py-14 lg:px-8 lg:py-16">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3 lg:gap-6">
            {[
              [
                ShieldCheck,
                "Güven veren süreç",
                "İlk görüşmeden teklif aşamasına kadar sade, anlaşılır ve şeffaf iletişim.",
              ],
              [
                Ruler,
                "Ölçülü çözümler",
                "Mekanın kullanımına ve bütçeye göre uygulanabilir tasarım önerileri.",
              ],
              [
                Sparkles,
                "Temiz estetik",
                "Gözü yormayan, modern ve uzun süre kullanılabilecek tasarım dili.",
              ],
            ].map(([Icon, title, text]) => (
              <div
                key={title}
                className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm sm:rounded-[2rem] sm:p-7"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-stone-950 p-3 text-white">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-stone-600 sm:text-base">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="iletisim"
          className="px-4 py-10 sm:px-5 sm:py-14 lg:px-8 lg:py-16"
        >
          <div className="mx-auto overflow-hidden rounded-[1.75rem] bg-stone-950 shadow-2xl sm:rounded-[2.5rem] lg:max-w-7xl">
            <div className="grid lg:grid-cols-[1fr_0.9fr]">
              <div className="p-6 text-center text-white sm:p-10 lg:p-16 lg:text-left">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/80">
                  <Mail className="h-4 w-4" />
                  Teklif Al
                </div>

                <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:mx-0 lg:text-5xl">
                  Mekanınız için ilk adımı bugün atın.
                </h2>

                <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-stone-300 sm:text-base sm:leading-8 lg:mx-0">
                  Kısa bir mesajla proje türünüzü, yaklaşık metrekareyi ve
                  konumu paylaşın. Size uygun tasarım/dekorasyon süreci için
                  dönüş yapalım.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                  <a
                    href={mailUrl}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-stone-950 transition hover:-translate-y-0.5 sm:px-7 sm:py-4"
                  >
                    <Mail className="h-4 w-4" />
                    Mail ile Teklif Al
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10 sm:px-7 sm:py-4"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp'tan Yaz
                  </a>
                </div>
              </div>

              <div className="bg-white p-5 sm:p-8 lg:p-16">
                <div className="rounded-[1.5rem] border border-stone-200 bg-[#f7f3ee] p-5 sm:rounded-[2rem] sm:p-7">
                  <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                    İletişim
                  </h3>

                  <div className="mt-6 space-y-5 text-sm text-stone-700 sm:text-base">
                    <div className="flex items-start gap-4">
                      <ShieldCheck className="mt-1 h-5 w-5 shrink-0" />
                      <span>{brand.contactName}</span>
                    </div>

                    <a
                      href={`tel:${brand.phoneRaw}`}
                      className="flex items-start gap-4 transition hover:text-stone-950"
                    >
                      <Phone className="mt-1 h-5 w-5 shrink-0" />
                      <span>{brand.phoneDisplay}</span>
                    </a>

                    <a
                      href={mailUrl}
                      className="flex items-start gap-4 transition hover:text-stone-950"
                    >
                      <Mail className="mt-1 h-5 w-5 shrink-0" />
                      <span className="break-all">{brand.email}</span>
                    </a>

                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-start gap-4 transition hover:text-stone-950"
                    >
                      <MapPin className="mt-1 h-5 w-5 shrink-0" />
                      <span>
                        {brand.address}
                        <br />
                        Google Maps üzerinden yol tarifi al
                      </span>
                    </a>
                  </div>

                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-stone-950 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 sm:py-4"
                  >
                    <MapPin className="h-4 w-4" />
                    Haritada Aç
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {showTopButton && (
        <button
  type="button"
  onClick={() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }}
  aria-label="Sayfanın en üstüne çık"
  className="fixed bottom-4 left-4 z-[90] inline-flex h-12 w-12 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-950 shadow-2xl transition hover:scale-105 hover:bg-stone-950 hover:text-white sm:bottom-5 sm:left-5 sm:h-14 sm:w-14"
>
  <ArrowUp className="h-6 w-6 sm:h-7 sm:w-7" />
</button>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp mesajı gönder"
        className="fixed bottom-4 right-4 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-105 sm:bottom-5 sm:right-5 sm:h-14 sm:w-14"
      >
        <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
      </a>

      <footer className="border-t border-stone-200 px-4 py-8 sm:px-5 sm:py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center lg:flex-row lg:text-left">
          <button
            type="button"
            onClick={() => setLogoOpen(true)}
            className="cursor-zoom-in rounded-2xl transition hover:scale-[1.02]"
            aria-label="Glowopt logosunu büyüt"
          >
            <Logo />
          </button>

          <div className="text-xs text-stone-500 sm:text-sm">
            © {new Date().getFullYear()} {brand.name}. Tüm hakları saklıdır. •{" "}
            {brand.domain}
          </div>
        </div>
      </footer>

      {logoOpen && (
        <div
          className="fixed inset-0 z-[70] grid place-items-center bg-stone-950/85 p-4 backdrop-blur-sm"
          onClick={() => setLogoOpen(false)}
        >
          <div
            className="relative w-full max-w-xl rounded-[2rem] bg-[#f7f3ee] p-4 shadow-2xl sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setLogoOpen(false)}
              className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2.5 text-stone-950 shadow-lg"
              aria-label="Logoyu kapat"
            >
              <X className="h-5 w-5" />
            </button>

            <img
              src="/logo.png"
              alt="glowopt.org İç Mekan Dekorasyon büyük logo"
              className="mx-auto max-h-[78vh] w-full rounded-[1.5rem] object-contain"
            />
          </div>
        </div>
      )}

      {activeItem && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-stone-950/80 p-4 backdrop-blur-sm sm:p-5"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-[1.5rem] bg-white shadow-2xl sm:rounded-[2rem]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setActiveItem(null)}
              className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2.5 text-stone-950 shadow-lg sm:right-4 sm:top-4 sm:p-3"
              aria-label="Galeriyi kapat"
            >
              <X className="h-5 w-5" />
            </button>

            <img
              src={activeItem.image}
              alt={activeItem.title}
              className="max-h-[60vh] w-full object-cover sm:max-h-[68vh]"
            />

            <div className="p-5 sm:p-6">
              <div className="text-sm font-medium text-stone-500">
                {activeItem.category}
              </div>

              <h3 className="mt-1 text-2xl font-semibold tracking-tight text-stone-950 sm:text-3xl">
                {activeItem.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-stone-600 sm:text-base">
                {activeItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}