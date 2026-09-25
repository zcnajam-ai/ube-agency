import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  ExternalLink,
  FileSearch,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const url = "https://unifiedbrandingexperts.com/ai-seo";
const published = "2026-09-14";
const updated = "2026-09-22";

export const metadata: Metadata = {
  title: { absolute: "AI SEO Agency: Get Cited in ChatGPT, Google AI Overviews & Perplexity | UBE" },
  description:
    "UBE is an AI SEO agency that gets brands cited in ChatGPT, Google AI Overviews, and Perplexity. Schema-driven, entity-first, with named case studies and 100-site audit data. Packages from $349.",
  alternates: { canonical: url },
  openGraph: {
    title: "AI SEO Agency: Get Cited in ChatGPT, Google AI Overviews & Perplexity | UBE",
    description:
      "Schema-driven, entity-first AI SEO informed by UBE's 100-site audit. See the method, pricing, fit, and measurement framework.",
    url,
    type: "article",
    publishedTime: published,
    modifiedTime: updated,
  },
  twitter: {
    card: "summary_large_image",
    title: "AI SEO Agency: ChatGPT, AI Overviews & Perplexity | UBE",
    description:
      "A practical AI SEO, AEO, and GEO framework informed by UBE's 100-site study.",
  },
};

const faqs = [
  {
    question: "What is an AI SEO agency?",
    answer:
      "An AI SEO agency improves the technical, content, entity, and authority signals that help a business become understandable and retrievable in AI-assisted search. The work can include crawl diagnostics, structured data, entity alignment, answer-first content, source-worthy evidence, and measurement across traditional and AI search surfaces. It is not a separate replacement for technical SEO; it extends a sound search foundation.",
  },
  {
    question: "How is AI SEO different from traditional SEO?",
    answer:
      "Traditional SEO commonly focuses on crawling, indexing, rankings, and clicks from a results page. AI SEO keeps those foundations but also prepares information for systems that synthesize an answer from multiple sources. That means clearer entities, concise passages, verifiable claims, strong citations, consistent business facts, and content that directly resolves a question without losing context.",
  },
  {
    question: "How long does AI SEO take to work?",
    answer:
      "There is no fixed timeline. Technical corrections can be implemented quickly, but recrawling, reprocessing, authority growth, and citation changes happen on each platform's schedule. Existing authority, crawl frequency, competition, content quality, and access to original evidence all affect timing. We report completed work and observed visibility changes rather than promising a deadline for citations.",
  },
  {
    question: "What does AI SEO cost?",
    answer:
      "UBE's one-time AI Search Readiness Audit starts at $349. Ongoing plans start at $749 per month, with broader content and authority programs at $1,499 and $2,999 per month. Final scope depends on site size, technical condition, content volume, markets, required schema, and the evidence available to support expert claims.",
  },
  {
    question: "Do I need AI SEO if I already do traditional SEO?",
    answer:
      "Possibly. Strong traditional SEO gives AI discovery a necessary base, but a site can rank and still be difficult for an answer engine to interpret or cite. An audit can identify whether the missing layer is entity consistency, answer formatting, original evidence, structured data, external corroboration, or simply stronger core SEO. We do not recommend a retainer when the audit shows that focused corrections are enough.",
  },
  {
    question: "What's the difference between AEO and GEO?",
    answer:
      "Answer Engine Optimization, or AEO, structures information so systems can extract a direct and accurate answer. Generative Engine Optimization, or GEO, strengthens the evidence, entities, references, and content relationships that support inclusion in generated responses. In practice they overlap. UBE treats both as parts of AI SEO rather than selling three disconnected programs.",
  },
  {
    question: "Can you guarantee I'll get cited in ChatGPT?",
    answer:
      "No. No agency controls the sources, model updates, retrieval systems, personalization, or response generation used by ChatGPT or any other answer engine. We can improve measurable readiness, resolve technical barriers, build clearer evidence, and monitor representative prompts. We cannot guarantee a citation, ranking, traffic level, lead count, or revenue outcome.",
  },
  {
    question: "What AI engines do you optimize for?",
    answer:
      "Our framework considers Google AI Overviews, ChatGPT Search, Perplexity, Gemini, and Bing Copilot, alongside standard Google and Bing search. The engines do not publish identical selection rules, so the durable approach is accessible pages, consistent entities, well-supported claims, useful answer passages, sound internal linking, and reputable third-party corroboration.",
  },
  {
    question: "Can I do AI SEO myself?",
    answer:
      "Yes. A capable internal team can improve crawlability, write direct answers, align organization details, add valid schema, publish original research, and monitor visibility. An agency is most useful when the site has technical debt, multiple content owners, uncertain entity signals, or too little internal capacity to connect engineering, editorial, analytics, and digital PR work.",
  },
  {
    question: "How do you measure AI SEO success?",
    answer:
      "We measure controllable and observable indicators: crawl and index coverage, valid structured data, branded and non-branded search demand, cited-page visits, referral traffic from AI tools when identifiable, prompt-set visibility, entity consistency, conversions from organic landing pages, and the quality of earned references. Because AI results vary, we document the prompt set, date, location, account state, and engine used.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${url}#article`,
  headline: "AI SEO Agency: Get Cited in ChatGPT, Google AI Overviews & Perplexity",
  description:
    "A practical guide to AI SEO, AEO, and GEO: technical foundations, content engineering, entity signals, authority, pricing, fit, and measurement.",
  url,
  datePublished: published,
  dateModified: updated,
  inLanguage: "en-US",
  mainEntityOfPage: { "@type": "WebPage", "@id": url },
  author: {
    "@type": "Organization",
    "@id": "https://unifiedbrandingexperts.com/#organization",
    name: "Unified Branding Experts",
  },
  publisher: {
    "@type": "Organization",
    "@id": "https://unifiedbrandingexperts.com/#organization",
    name: "Unified Branding Experts",
    url: "https://unifiedbrandingexperts.com",
    logo: {
      "@type": "ImageObject",
      url: "https://unifiedbrandingexperts.com/images/logo/ube-logo.png",
    },
  },
  image: { "@id": `${url}#primaryimage` },
  citation: [
    "https://unifiedbrandingexperts.com/research/ai-search-readiness-study-2026",
  ],
  about: ["AI SEO", "Answer Engine Optimization", "Generative Engine Optimization"],
};

const imageSchema = {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "@id": `${url}#primaryimage`,
  url: "https://unifiedbrandingexperts.com/images/ai-seo/ai-seo-authority-hub-3d.webp",
  contentUrl: "https://unifiedbrandingexperts.com/images/ai-seo/ai-seo-authority-hub-3d.webp",
  width: 768,
  height: 768,
  caption: "AI SEO research and answer-engine authority system connecting evidence, citations and structured knowledge",
  representativeOfPage: true,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${url}#faq`,
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${url}#breadcrumb`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://unifiedbrandingexperts.com",
    },
    { "@type": "ListItem", position: 2, name: "AI SEO", item: url },
  ],
};

const toc = [
  ["what-is-ai-seo", "What is AI SEO"],
  ["what-an-agency-does", "What an agency does"],
  ["ube-methodology", "UBE methodology"],
  ["study-proof", "100-site study"],
  ["ai-seo-cost", "Cost and pricing"],
  ["fit", "Who it is for"],
  ["faq", "FAQ"],
  ["get-started", "Get started"],
];

const prose = "text-[17px] leading-8 text-[#585858]";
const h3 = "mt-8 text-2xl font-semibold tracking-[-0.03em] text-[#161616]";

export default function AiSeoHubPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#FAF7F6] text-[#161616]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="relative border-b border-[#E0DDDB] px-5 pb-16 pt-32 sm:px-8 lg:pb-24 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[#585858]">
            <Link className="underline-offset-4 hover:underline" href="/">Home</Link>
            <span aria-hidden="true" className="px-2">/</span>
            <span aria-current="page">AI SEO</span>
          </nav>
          <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_.75fr]">
            <div>
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.24em] text-[#715CC4]">
              AI SEO · AEO · GEO
            </p>
            <h1 className="text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
              AI SEO Agency: Get Cited in ChatGPT, Google AI Overviews &amp; Perplexity
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-8 text-[#585858] sm:text-2xl sm:leading-9">
              If your business is absent from the sources an AI answer relies on, a buyer may never see it. We connect technical SEO, answer-ready content, entity clarity, structured data, original evidence, and measurement so your brand has a credible chance to be retrieved and cited.
            </p>
            <p className="mt-5 max-w-3xl text-base leading-7 text-[#585858]">
              This is not a promise of placement. ChatGPT, Google, Perplexity, Gemini, and Bing control their own retrieval and response systems. Our job is to make your site accessible, specific, internally consistent, supported by evidence, and useful enough to deserve consideration.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-[#585858]">
              <span>Published September 14, 2026</span>
              <span aria-hidden="true">·</span>
              <span>Last updated September 22, 2026</span>
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact?package=AI%20SEO%20Audit"
                data-analytics-location="ai_seo_hero"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#9F8BE7] px-6 py-3 font-semibold text-[#161616] transition-colors hover:bg-[#b4a3f7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#715CC4]"
              >
                Start the $349 AI SEO Audit <ArrowRight aria-hidden="true" size={18} />
              </Link>
              <a
                href="tel:+12242668081"
                data-analytics-location="ai_seo_hero"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#E0DDDB] bg-white px-6 py-3 font-semibold text-[#161616] transition-colors hover:bg-[#F1ECEA] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#715CC4]"
              >
                <Phone aria-hidden="true" size={18} /> Call +1 224-266-8081
              </a>
            </div>
            </div>
            <figure className="group relative mx-auto w-full max-w-[520px] overflow-hidden rounded-[2rem] border border-[#E0DDDB] bg-[#161616] p-5 shadow-lg sm:p-8">
              <div className="absolute inset-[20%] rounded-full bg-[#9F8BE7]/25 blur-3xl transition-opacity duration-500 group-hover:opacity-90" aria-hidden="true" />
              <Image
                src="/images/ai-seo/ai-seo-authority-hub-3d.webp"
                alt="3D AI SEO research system connecting evidence, citations and structured knowledge"
                title="AI SEO Research and Answer-Engine Authority System"
                width={768}
                height={768}
                priority
                sizes="(max-width: 1024px) 82vw, 430px"
                className="relative h-auto w-full drop-shadow-[0_22px_28px_rgba(0,0,0,0.34)] transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-[1.04] motion-reduce:transform-none motion-reduce:transition-none"
              />
              <figcaption className="relative mt-3 text-center text-sm font-semibold text-white/85">
                AI SEO Research and Answer-Engine Authority System
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <nav aria-label="On this page" className="sticky top-0 z-30 overflow-x-auto border-b border-[#E0DDDB] bg-[#FAF7F6]/95 px-5 py-3 backdrop-blur lg:hidden">
        <div className="flex min-w-max gap-2">
          {toc.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="rounded-full border border-[#E0DDDB] bg-white px-4 py-2 text-sm text-[#161616]">
              {label}
            </a>
          ))}
        </div>
      </nav>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:py-24">
        <aside className="hidden lg:block">
          <nav aria-label="Table of contents" className="sticky top-28 rounded-2xl border border-[#E0DDDB] bg-white/95 p-5 shadow-sm backdrop-blur">
            <p className="mb-4 text-sm font-semibold">On this page</p>
            <ol className="space-y-3 text-sm text-[#585858]">
              {toc.map(([id, label], index) => (
                <li key={id}>
                  <a href={`#${id}`} className="flex gap-3 rounded-lg p-1 hover:text-[#715CC4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#715CC4]">
                    <span className="font-mono text-xs">{String(index + 1).padStart(2, "0")}</span>
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <article className="min-w-0 max-w-4xl">
          <section id="what-is-ai-seo" className="scroll-mt-28 border-b border-[#E0DDDB] pb-16">
            <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">What is AI SEO (and why it matters in 2026)</h2>
            <p className={`${prose} mt-7`}>
              AI SEO is the practice of improving a brand’s eligibility to appear as a source in AI-assisted discovery. It starts with the same requirements as search engine optimization: a crawlable site, useful pages, stable URLs, descriptive metadata, and enough authority for search systems to trust the information. It then adds work for an answer environment, where the user may receive a synthesized response instead of a list of blue links.
            </p>
            <p className={`${prose} mt-5`}>
              An answer engine needs to identify who made a claim, what entity the claim describes, whether other sources support it, and which passage answers the question without ambiguity. A page can be technically indexed yet remain hard to retrieve because its language is vague, its business details conflict across the web, its evidence is weak, or the useful answer is buried beneath sales copy. AI SEO addresses those gaps as one connected system.
            </p>
            <h3 className={h3}>AI SEO vs traditional SEO</h3>
            <p className={`${prose} mt-4`}>
              Traditional SEO evaluates how pages are discovered, indexed, ranked, and clicked. AI SEO also evaluates whether a passage can stand on its own inside a generated answer. Keyword relevance still matters, but so do entity relationships, citations, information gain, and clear attribution. We keep conventional diagnostics such as canonical tags, internal links, rendering, Core Web Vitals, and query performance because an inaccessible page cannot become a dependable answer source.
            </p>
            <p className={`${prose} mt-5`}>
              The practical difference is in editorial construction. A standard service page might say that a company offers a tailored solution. An answer-ready page names the deliverables, dependencies, limits, pricing factors, and steps. It defines terms before expanding them. It separates verified observations from opinion. It links to the evidence behind important facts. That specificity helps a buyer and gives a retrieval system a cleaner passage to evaluate.
            </p>
            <h3 className={h3}>AEO and GEO defined</h3>
            <p className={`${prose} mt-4`}>
              Answer Engine Optimization (AEO) makes information easy to extract as a direct response. It uses descriptive headings, concise definitions, question-and-answer formats where appropriate, semantic HTML, and schema that matches the visible page. Generative Engine Optimization (GEO) focuses on the evidence and authority that make the response supportable: original research, expert attribution, credible citations, consistent entities, and corroboration beyond the company’s own domain.
            </p>
            <p className={`${prose} mt-5`}>
              The labels are useful, but the work should not be split into artificial silos. A precise answer without authority may not be selected. Authority without accessible, well-structured content may not be retrieved. We use AI SEO as the operating layer that connects technical SEO, AEO, GEO, content, digital PR, and analytics.
            </p>
            <h3 className={h3}>Why this matters now</h3>
            <p className={`${prose} mt-4`}>
              Buyers increasingly ask complete questions: which platform fits a catalog, what an implementation costs, or how two approaches differ. AI products can summarize those decisions before a visitor reaches a website. The commercial goal is therefore broader than ranking a page. A business needs accurate information that can be discovered, understood, attributed, and verified across several search experiences.
            </p>
            <p className={`${prose} mt-5`}>
              That shift does not make every brand a fit for an AI SEO retainer. If core pages are thin, indexing is unstable, or the offer is not clearly explained, foundational work comes first. This hub provides a plain-language SEO, AEO, and GEO comparison, while the <Link className="font-semibold text-[#715CC4] underline-offset-4 hover:underline" href="/insights/ai-seo-aeo-geo-guide">complete AI SEO guide</Link> covers the disciplines in greater depth.
            </p>
          </section>

          <section id="what-an-agency-does" className="scroll-mt-28 border-b border-[#E0DDDB] py-16">
            <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">What an AI SEO agency actually does</h2>
            <p className={`${prose} mt-7`}>
              A credible engagement begins by separating controllable work from platform behavior. We can repair rendering, improve information architecture, publish stronger evidence, and instrument measurement. We cannot choose the sources shown by an AI system. The agency’s value is coordination: technical, editorial, entity, and authority tasks follow one prioritized diagnostic instead of becoming disconnected checklists.
            </p>
            <h3 className={h3}>Technical foundations</h3>
            <p className={`${prose} mt-4`}>
              We inspect robots directives, XML sitemaps, canonicals, redirects, server-rendered content, status codes, mobile behavior, page speed, and internal link depth. We compare declared URLs with the versions search engines select. Structured data is audited against visible content, not added as decoration. Organization, WebSite, Service, Article, FAQPage, Person, BreadcrumbList, and Offer types are used only when the page supports them.
            </p>
            <p className={`${prose} mt-5`}>
              We also look for operational drift: prices that disagree across pages, an old company name in schema, duplicated analytics tags, generic social images, or a JavaScript dependency that hides the main answer from the initial HTML. These defects weaken trust for people and machines. The output is a prioritized correction list tied to affected URLs and a validation method.
            </p>
            <h3 className={h3}>Content formatting for LLM retrieval</h3>
            <p className={`${prose} mt-4`}>
              Content engineering begins with real buyer questions and one dominant intent per URL. We write short definitions, comparison criteria, numbered processes, explicit inclusions and exclusions, and answers that retain meaning outside the surrounding paragraph. Long-form content earns its length through examples, decisions, and evidence rather than repeated introductions.
            </p>
            <p className={`${prose} mt-5`}>
              We also reduce ambiguity. “It depends” becomes a list of the variables that change price or timing. “Better results” becomes the observable metric and the period being compared. Unsupported superlatives are removed. Helpful passages link to deeper material, such as our guide to <Link className="font-semibold text-[#715CC4] underline-offset-4 hover:underline" href="/insights/how-to-get-your-business-mentioned-in-chatgpt">earning consideration in ChatGPT Search</Link> and our analysis of <Link className="font-semibold text-[#715CC4] underline-offset-4 hover:underline" href="/insights/how-to-optimize-for-google-ai-overviews">Google AI Overview optimization</Link>.
            </p>
            <h3 className={h3}>Entity and authority building</h3>
            <p className={`${prose} mt-4`}>
              An entity is the identifiable business, person, product, or concept described by the content. We align the company’s official name, website, logo, contact details, profiles, authors, and service relationships across the site. Author pages and review processes should identify real responsibility. Third-party mentions should be earned and relevant, not manufactured through link schemes.
            </p>
            <p className={`${prose} mt-5`}>
              Authority grows when a business contributes something worth referencing: original data, a transparent methodology, a well-documented case study, a useful calculator, or expert commentary grounded in practice. UBE’s study is one example. It publishes the scoring model, aggregate findings, limits, and downloadable data so a reader can evaluate the work rather than accept a vague claim.
            </p>
            <h3 className={h3}>Measurement</h3>
            <p className={`${prose} mt-4`}>
              We establish a baseline in Google Search Console and GA4, then monitor index coverage, queries, landing pages, organic lead paths, referral sources, and representative prompt sets. AI referrals are imperfect because some tools remove or aggregate attribution. Prompt results also vary by time, account, geography, and model. Reporting must record those conditions and distinguish an observed citation from a durable trend.
            </p>
          </section>

          <section id="ube-methodology" className="scroll-mt-28 border-b border-[#E0DDDB] py-16">
            <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">How we approach AI SEO at UBE (the methodology)</h2>
            <p className={`${prose} mt-7`}>
              Our method moves from diagnosis to evidence. Each stage has a deliverable, an owner, and a test. The sequence matters: publishing more articles before resolving duplicate URLs or unclear entity data usually creates more pages to maintain, not more authority. The full <Link className="font-semibold text-[#715CC4] underline-offset-4 hover:underline" href="/services/ai-seo-agency">AI SEO service scope</Link> explains how implementation support fits around this framework.
            </p>
            {[
              ["Step 1 — AI search readiness audit", "We crawl priority templates, inspect indexing and canonicals, review structured data, map current queries, test representative answer prompts, and document entity inconsistencies. The audit separates urgent defects, content opportunities, authority gaps, and measurement limitations. Recommendations name the URL, intended outcome, dependency, and validation step."],
              ["Step 2 — Entity and schema foundation", "We establish one consistent organization identity and connect the site's services, authors, articles, research, offers, and case studies to it. JSON-LD is server-rendered and validated against the visible page. We repair breadcrumbs, canonicals, sitemap entries, headings, and metadata where they conflict with the intended entity or page purpose."],
              ["Step 3 — Content engineering", "We assign one search intent to each priority URL, answer the questions buyers ask before purchase, and build extractable passages with supporting context. Existing pages are improved before overlapping pages are created. Editorial briefs include evidence sources, internal links, conversion action, and a cannibalization check."],
              ["Step 4 — Authority building", "We identify publishable evidence and the audiences that can genuinely use it. That may include original research, expert contributions, partner documentation, or verified case studies. Outreach is based on relevance and editorial value. We do not buy links, create fake profiles, or turn deliverables into invented performance results."],
              ["Step 5 — Continuous measurement", "We compare crawl, index, query, landing-page, conversion, referral, and prompt-set observations against the baseline. Work is adjusted when evidence changes. A citation screenshot is treated as an observation, not proof of permanent visibility. Decisions stay tied to qualified discovery and leads rather than vanity counts."],
            ].map(([title, body]) => (
              <div key={title} className="mt-8 rounded-2xl border border-[#E0DDDB] bg-white/95 p-6 shadow-sm backdrop-blur sm:p-8">
                <h3 className="text-2xl font-semibold tracking-[-0.03em]">{title}</h3>
                <p className={`${prose} mt-4`}>{body}</p>
              </div>
            ))}
            <p className={`${prose} mt-8`}>
              For Shopify operators, the same sequence connects catalog architecture, product entities, merchant policies, collection content, and technical performance. Our <Link className="font-semibold text-[#715CC4] underline-offset-4 hover:underline" href="/insights/shopify-ai-seo-guide">Shopify AI SEO guide</Link> shows how those commerce-specific inputs change the work.
            </p>
          </section>

          <section id="study-proof" className="scroll-mt-28 border-b border-[#E0DDDB] py-16">
            <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Proof: the 100-Site AI Search Readiness Study</h2>
            <p className={`${prose} mt-7`}>
              UBE audited 100 North American business websites against 45 criteria across technical readiness, content retrievability, entity signals, AEO, and GEO authority. The research is a diagnostic snapshot, not a universal ranking-factor study. Its value is that the methodology, aggregate results, and limitations are visible, giving teams a concrete way to examine readiness claims.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["95.85%", "Technical Readiness", "19.17 out of 20 available points"],
                ["36.53%", "GEO / Authority Readiness", "10.96 out of 30 available points"],
                ["62.20%", "Content Retrievability", "12.44 out of 20 available points"],
                ["58%", "Failed Organization JSON-LD", "Sites that did not pass this criterion"],
              ].map(([value, label, note]) => (
                <div key={label} className="rounded-2xl border border-[#E0DDDB] bg-white/95 p-6 shadow-sm">
                  <p className="font-mono text-4xl font-semibold text-[#715CC4]">{value}</p>
                  <p className="mt-3 text-lg font-semibold">{label}</p>
                  <p className="mt-1 text-sm leading-6 text-[#585858]">{note}</p>
                </div>
              ))}
            </div>
            <p className={`${prose} mt-8`}>
              The contrast is the important finding. Many sampled sites handled basic technical access reasonably well, while authority and evidence signals were much weaker. Eighty percent also failed the original data and proprietary research criterion. That does not mean every company needs a large research report. It means specific, attributable knowledge remains scarce compared with generic service copy.
            </p>
            <p className={`${prose} mt-5`}>
              Read the <Link className="font-semibold text-[#715CC4] underline-offset-4 hover:underline" href="/research/ai-search-readiness-study-2026">100-Site AI Search Readiness Study</Link> for the scoring model, complete findings, caveats, and downloadable aggregate CSV. We reference these four figures exactly as reported and do not turn them into a prediction about any individual site’s visibility.
            </p>
          </section>

          <section id="ai-seo-cost" className="scroll-mt-28 border-b border-[#E0DDDB] py-16">
            <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">What AI SEO costs (and what affects the price)</h2>
            <p className={`${prose} mt-7`}>
              Start with the smallest scope that can answer the decision. A one-time audit is appropriate when a team needs a verified baseline and prioritized corrections. An ongoing plan makes sense when implementation requires continuing technical work, new content, authority development, and monthly measurement. Pricing does not include a promise of rankings or citations.
            </p>
            <div className="mt-8 overflow-x-auto rounded-2xl border border-[#E0DDDB] bg-white">
              <table className="w-full min-w-[660px] text-left">
                <caption className="sr-only">AI SEO package pricing and focus</caption>
                <thead className="bg-[#161616] text-white">
                  <tr><th className="p-5">Plan</th><th className="p-5">Price</th><th className="p-5">Primary use</th></tr>
                </thead>
                <tbody className="divide-y divide-[#E0DDDB]">
                  <tr><td className="p-5 font-semibold">Audit</td><td className="p-5 font-mono">$349 one time</td><td className="p-5 text-[#585858]">Readiness baseline, blockers, and prioritized roadmap</td></tr>
                  <tr><td className="p-5 font-semibold">Starter</td><td className="p-5 font-mono">$749/month</td><td className="p-5 text-[#585858]">Focused implementation and core content corrections</td></tr>
                  <tr><td className="p-5 font-semibold">Growth</td><td className="p-5 font-mono">$1,499/month</td><td className="p-5 text-[#585858]">Broader content engineering, schema, and measurement</td></tr>
                  <tr><td className="p-5 font-semibold">Authority</td><td className="p-5 font-mono">$2,999/month</td><td className="p-5 text-[#585858]">Research-led authority and multi-cluster execution</td></tr>
                </tbody>
              </table>
            </div>
            <p className={`${prose} mt-6`}>
              See the <Link className="font-semibold text-[#715CC4] underline-offset-4 hover:underline" href="/ai-seo-packages">AI SEO packages and deliverables</Link> for a tier-by-tier comparison. Package fit is confirmed after reviewing the site; a larger plan is not automatically the better recommendation.
            </p>
            <h3 className={h3}>What changes the price</h3>
            <p className={`${prose} mt-4`}>
              Scope changes with the number of indexable templates, technical condition, languages, locations, product catalog size, content quality, publishing cadence, stakeholder approvals, required integrations, and access to subject-matter experts. A 20-page service site with clean rendering is different from a marketplace containing thousands of parameterized URLs.
            </p>
            <p className={`${prose} mt-5`}>
              Evidence availability also matters. When claims need research, interviews, data analysis, legal review, or client approval, that work must be planned. Third-party tools and paid data sources can add costs. We document assumptions and exclusions before implementation so a buyer can compare scopes instead of comparing one headline price with an undefined deliverable.
            </p>
          </section>

          <section id="fit" className="scroll-mt-28 border-b border-[#E0DDDB] py-16">
            <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Who AI SEO is for (and who it isn’t)</h2>
            <p className={`${prose} mt-7`}>
              AI SEO is most useful when the business already has a real offer, verifiable expertise, and a reason for buyers to compare it with alternatives. It is especially relevant for companies whose customers ask research-heavy questions before contacting a provider or buying a considered product.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-[#E0DDDB] bg-white/95 p-7">
                <h3 className="flex items-center gap-3 text-2xl font-semibold"><Check aria-hidden="true" className="text-[#715CC4]" /> Right fit</h3>
                <ul className="mt-5 space-y-4 text-[#585858]">
                  <li>Organizations with useful expertise that is poorly represented online.</li>
                  <li>eCommerce and service businesses with stable products, pricing logic, and accountable subject-matter experts.</li>
                  <li>Sites with search visibility but weak citations, confusing entities, or content that does not answer buyer questions directly.</li>
                  <li>Teams willing to publish evidence, clarify limitations, and measure qualified actions rather than isolated mentions.</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-[#E0DDDB] bg-white/95 p-7">
                <h3 className="flex items-center gap-3 text-2xl font-semibold"><ShieldCheck aria-hidden="true" className="text-[#715CC4]" /> Not a fit</h3>
                <ul className="mt-5 space-y-4 text-[#585858]">
                  <li>Businesses seeking guaranteed citations, rankings, leads, sales, or a fixed return.</li>
                  <li>Offers that rely on unsupported health, financial, legal, or performance claims.</li>
                  <li>Teams unwilling to correct inaccurate business details or disclose material service limitations.</li>
                  <li>Sites expecting mass-produced pages, fake reviews, purchased links, or copied competitor content.</li>
                </ul>
              </div>
            </div>
            <p className={`${prose} mt-8`}>
              Sometimes the right next step is conventional technical SEO, positioning work, analytics repair, or a stronger product page rather than an AI-specific program. The audit exists to make that distinction. UBE builds and optimizes digital systems, but sales also depend on the offer, product-market fit, price, competition, traffic, budget, customer service, and ongoing execution.
            </p>
          </section>

          <section id="faq" className="scroll-mt-28 border-b border-[#E0DDDB] py-16">
            <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">AI SEO FAQ</h2>
            <p className={`${prose} mt-7`}>
              These answers summarize the decision points we address during scope. Each answer is visible on the page and represented in the matching FAQPage schema.
            </p>
            <div className="mt-8 space-y-4">
              {faqs.map(({ question, answer }) => (
                <details key={question} className="group rounded-2xl border border-[#E0DDDB] bg-white/95 p-6">
                  <summary className="cursor-pointer list-none pr-8 text-lg font-semibold marker:content-none">
                    {question}
                  </summary>
                  <p className={`${prose} mt-4`}>{answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section id="get-started" className="scroll-mt-28 pt-16">
            <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Get started with UBE AI SEO</h2>
            <p className={`${prose} mt-7`}>
              Begin with evidence. The $349 audit reviews the pages, technical signals, entities, answer content, and authority inputs that shape readiness. You receive a prioritized roadmap that identifies what to fix, what to measure, and which assumptions still need verification. If implementation is justified, we recommend the smallest suitable ongoing scope.
            </p>
            <p className={`${prose} mt-5`}>
              If you already have a technical audit, Search Console export, content inventory, or prompt-tracking baseline, include it in the scope conversation. We will assess what can be reused and avoid repeating work without a reason. You can also review the service model and package comparison before contacting us.
            </p>
            <div className="mt-10 rounded-2xl bg-[#161616] p-7 text-white sm:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#b4a3f7]">A clear first decision</p>
              <p className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Find out whether your constraint is technical access, content retrieval, entity clarity, or authority.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact?package=AI%20SEO%20Audit"
                  data-analytics-location="ai_seo_final"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#9F8BE7] px-6 py-3 font-semibold text-[#161616] transition-colors hover:bg-[#b4a3f7]"
                >
                  Start the $349 Audit <FileSearch aria-hidden="true" size={18} />
                </Link>
                <Link
                  href="/contact?type=ai-seo"
                  data-analytics-location="ai_seo_final"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 bg-white px-6 py-3 font-semibold text-[#161616] transition-colors hover:bg-[#F1ECEA]"
                >
                  Book a scope call <ArrowRight aria-hidden="true" size={18} />
                </Link>
              </div>
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/75">
                <Link className="underline-offset-4 hover:underline" href="/services/ai-seo-agency">Review AI SEO services</Link>
                <Link className="underline-offset-4 hover:underline" href="/ai-seo-packages">Compare AI SEO packages</Link>
                <a className="inline-flex items-center gap-1 underline-offset-4 hover:underline" href="tel:+12242668081">
                  <Phone aria-hidden="true" size={15} /> +1 224-266-8081
                </a>
              </div>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
