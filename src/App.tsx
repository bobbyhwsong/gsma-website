import { useState, useEffect } from 'react';
import {
  Globe,
  Shield,
  Briefcase,
  Award,
  Users,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Target,
  CheckCircle2,
  Menu,
  X
} from 'lucide-react';
import { COPY, NAV_IDS, type Language } from './content';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const lang: Language = document.documentElement.lang?.toLowerCase().startsWith('ko') ? 'ko' : 'en';
  const t = COPY[lang];
  const nextLang: Language = lang === 'ko' ? 'en' : 'ko';
  const baseUrl = import.meta.env.BASE_URL;
  const hrefFor = (l: Language) => (l === 'ko' ? `${baseUrl}ko/` : baseUrl);

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_IDS;
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-bold text-gray-900">{t.brand}</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {NAV_IDS.map(id => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === id
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {t.nav[id]}
                </button>
              ))}
              <a
                href={hrefFor(nextLang)}
                className="ml-2 inline-flex items-center justify-center rounded-lg border border-gray-200 px-3 py-1.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                aria-label={`Switch language to ${t.langSwitchLabel(nextLang)}`}
              >
                {t.langSwitchLabel(nextLang)}
              </a>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-6 space-y-4">
              {NAV_IDS.map(id => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium"
                >
                  {t.nav[id]}
                </button>
              ))}
              <a
                href={hrefFor(nextLang)}
                className="block w-full text-left text-gray-700 hover:text-blue-600 font-semibold pt-2 border-t border-gray-100"
                aria-label={`Switch language to ${t.langSwitchLabel(nextLang)}`}
              >
                {t.langSwitchLabel(nextLang)}
              </a>
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
              <Globe className="text-blue-400" size={20} />
              <span className="text-blue-300 text-sm font-medium">{t.home.pill}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {t.home.headline}
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              {t.home.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => scrollToSection('services')}
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all flex items-center justify-center space-x-2 group"
              >
                <span>{t.home.ctaPrimary}</span>
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-all"
              >
                {t.home.ctaSecondary}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t.about.title}</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{t.about.card.name}</h3>
                <p className="text-xl text-blue-600 font-medium mb-4">{t.about.card.role}</p>
                <p className="text-gray-600">{t.about.card.subtitle}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <Award className="text-blue-600 mr-2" size={20} />
                    {t.about.card.educationTitle}
                  </h4>
                  <div className="space-y-3 text-sm">
                    {(t.about.card.education.maTitle || t.about.card.education.maSchool || t.about.card.education.maNote) && (
                      <div>
                        {t.about.card.education.maTitle && (
                          <p className="font-semibold text-gray-900">{t.about.card.education.maTitle}</p>
                        )}
                        {t.about.card.education.maSchool && (
                          <p className="text-gray-600">{t.about.card.education.maSchool}</p>
                        )}
                        {t.about.card.education.maNote && (
                          <p className="text-gray-500">{t.about.card.education.maNote}</p>
                        )}
                      </div>
                    )}
                    {(t.about.card.education.baTitle || t.about.card.education.baSchool) && (
                      <div>
                        {t.about.card.education.baTitle && (
                          <p className="font-semibold text-gray-900">{t.about.card.education.baTitle}</p>
                        )}
                        {t.about.card.education.baSchool && (
                          <p className="text-gray-600">{t.about.card.education.baSchool}</p>
                        )}
                      </div>
                    )}
                    {(t.about.card.education.secondaryTitle || t.about.card.education.secondaryPlace) && (
                      <div>
                        {t.about.card.education.secondaryTitle && (
                          <p className="font-semibold text-gray-900">{t.about.card.education.secondaryTitle}</p>
                        )}
                        {t.about.card.education.secondaryPlace && (
                          <p className="text-gray-600">{t.about.card.education.secondaryPlace}</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <Shield className="text-blue-600 mr-2" size={20} />
                    {t.about.card.militaryTitle}
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-gray-900">{t.about.card.military.rafTitle}</p>
                    </div>
                    <div className="mt-4">
                      <p className="font-semibold text-gray-800">{t.about.card.military.jcsTitle}</p>
                      <p className="text-gray-600">{t.about.card.military.jcsSubtitle1}</p>
                      <p className="text-gray-600">{t.about.card.military.jcsSubtitle2}</p>
                      <ul className="mt-2 space-y-1 text-gray-600">
                        {t.about.card.military.jcsBullets.map((b, i) => (
                          <li key={i}>• {b}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4">
                      <p className="font-semibold text-gray-800">{t.about.card.military.cbrnTitle}</p>
                      <p className="text-gray-600">{t.about.card.military.cbrnSubtitle}</p>
                      <ul className="mt-2 space-y-1 text-gray-600">
                        {t.about.card.military.cbrnBullets.map((b, i) => (
                          <li key={i}>• {b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <Briefcase className="text-blue-600 mr-2" size={20} />
                  {t.about.card.clientsTitle}
                </h4>
                <div className="grid md:grid-cols-4 gap-6 text-sm">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">{t.about.card.clients.consultingTitle}</p>
                    <ul className="space-y-1 text-gray-600">
                      {t.about.card.clients.consultingBullets.map((b, i) => (
                        <li key={i}>• {b}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">{t.about.card.clients.defenseTitle}</p>
                    <ul className="space-y-1 text-gray-600">
                      {t.about.card.clients.defenseBullets.map((b, i) => (
                        <li key={i}>• {b}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">{t.about.card.clients.techTitle}</p>
                    <ul className="space-y-1 text-gray-600">
                      {t.about.card.clients.techBullets.map((b, i) => (
                        <li key={i}>• {b}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">{t.about.card.clients.govTitle}</p>
                    <ul className="space-y-1 text-gray-600">
                      {t.about.card.clients.govBullets.map((b, i) => (
                        <li key={i}>• {b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <Target className="text-blue-600 mr-2" size={20} />
                  {t.about.card.expertiseTitle}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {t.about.card.expertiseTags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t.services.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.services.subtitle}
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.cards.map((card, idx) => {
              const Icon =
                idx === 0 ? Shield : idx === 1 ? Globe : idx === 2 ? Target : idx === 3 ? Briefcase : Globe;
              return (
                <div
                  key={card.title}
                  className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all border border-gray-100"
                >
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="text-blue-600" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.title}</h3>
                  <ul className="space-y-3 text-gray-700">
                    {card.bullets.map(b => (
                      <li key={b} className="flex items-start space-x-2">
                        <ChevronRight size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="expertise" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t.models.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.models.subtitle}
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-2xl p-8 text-white">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Globe className="text-blue-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold">{t.models.longTermInternational.title}</h3>
              </div>
              <p className="text-gray-300 mb-6">
                {t.models.longTermInternational.desc}
              </p>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                  <p className="font-semibold mb-2">{t.models.longTermInternational.currentProjectTitle}</p>
                  <p className="text-sm text-gray-300">{t.models.longTermInternational.currentProjectDates}</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                  <p className="font-semibold mb-2">{t.models.longTermInternational.upcomingTitle}</p>
                  <p className="text-sm text-gray-300">{t.models.longTermInternational.upcomingDesc}</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Briefcase className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{t.models.domesticLongTerm.title}</h3>
              </div>
              <p className="text-gray-700 mb-6">
                {t.models.domesticLongTerm.desc}
              </p>
              <ul className="space-y-3">
                {t.models.domesticLongTerm.bullets.map(b => (
                  <li key={b} className="flex items-start space-x-2">
                    <CheckCircle2 className="text-blue-600 mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.models.smallCards.map(card => (
              <div key={card.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h4 className="text-xl font-bold text-gray-900 mb-4">{card.title}</h4>
                <ul className="space-y-2 text-gray-700">
                  {card.bullets.map(b => (
                    <li key={b} className="flex items-start space-x-2">
                      <ChevronRight size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t.projects.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.projects.subtitle}
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <Users className="text-blue-600 mb-4" size={32} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.projects.left.title}</h3>
              <ul className="space-y-3">
                {t.projects.left.bullets.map(b => (
                  <li key={b} className="flex items-start space-x-2">
                    <CheckCircle2 className="text-blue-600 mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <Award className="text-blue-600 mb-4" size={32} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.projects.right.title}</h3>
              <ul className="space-y-3">
                {t.projects.right.bullets.map(b => (
                  <li key={b} className="flex items-start space-x-2">
                    <ChevronRight className="text-blue-600 mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">{t.projects.mission.title}</h3>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto mb-6">
              {t.projects.mission.body}
            </p>
            <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t.contact.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.contact.subtitle}
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 text-center border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t.contact.cards.locationTitle}</h3>
              <p className="text-gray-700">
                <span dangerouslySetInnerHTML={{ __html: t.contact.cards.locationBodyHtml }} />
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 text-center border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t.contact.cards.phoneTitle}</h3>
              <a href="tel:+821087932169" className="text-blue-600 hover:text-blue-700 text-lg font-medium">
                +82 10-8793-2169
              </a>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 text-center border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t.contact.cards.emailTitle}</h3>
              <a href="mailto:kjkim@gsmaconsulting.com" className="text-blue-600 hover:text-blue-700 text-lg font-medium break-all">
                kjkim@gsmaconsulting.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <span className="text-xl font-bold text-white">{t.brand}</span>
            </div>
            <p className="text-gray-400 text-sm text-center md:text-right">
              {t.footer.copyright}
              <br />
              {t.footer.tagline}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
