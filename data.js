// 6M Compass — content data
// Framework content paraphrased from Ted Zoller's 6M course material (THBA/GIE companion use).

const SIXM = {

  meaning: {
    label: "Meaning",
    axis: "MEANING | Deriving the Value Proposition",
    vp: "Every venture starts at the union of two questions: what does the market need, and what do you understand that others don't? <b>That intersection is the value proposition.</b>",
    take: "Some founders start with an idea — they're innovation-driven, and the idea itself is the spark. Others start with a problem — they're market-driven, and they let the customer teach them what to build. Neither path is wrong, but ideas alone are table stakes; it's the discipline of pairing the idea with a real, validated need that turns a concept into a venture. Treat the 6Ms as a cycle, not a staircase — you'll come back to Meaning every time the market teaches you something new.",
    tools: [
      {n:"01", t:"Problem Map", tag:"Sprint Deliverable", d:"Mind-map the structure of the problem your idea solves before you defend the solution. Use Coggle or a similar free mapping tool — seeing the shape of the problem usually reframes the solution."},
      {n:"02", t:"One-Slide Executive Summary", tag:"Sprint Deliverable", d:"A single slide stating the pain you're solving, the solution in plain language, and how the venture makes money. This is the slide you hand to an outside advisor who has thirty seconds."},
      {n:"03", t:"Name, Brand & Logo", tag:"Sprint Deliverable", d:"Lock the venture's name and a simple logo before you build further materials. It should reinforce the value proposition, not just look nice."},
      {n:"04", t:"Value Proposition & USP Worksheet", tag:"Sprint Deliverable", d:"Restructure your value prop around three elements: the differentiator, the value to the customer, and the customer's purchasing motivation. Distill all three down to one unique selling point."},
    ],
    cases: [
      {name:"Opflow", who:"Video Case — Meaning", desc:"A surgical-waste tracking platform used throughout the course as the through-line case. The Meaning vignette is built around tightening an elevator pitch that was too long and too detailed — a useful model for cutting a pitch down to what actually carries the value proposition."},
      {name:"Jetpool", who:"Video Vignette — Ryan Stone, UNC MBA", desc:"A private aviation membership venture, used to study how a value proposition gets sharpened through customer-facing language — what to lead with, and what to cut."},
    ],
    external: [
      {t:"The Mom Test", a:"Rob Fitzpatrick — book", k:"Book", href:"https://www.momtestbook.com/"},
      {t:"Value Proposition Canvas", a:"Strategyzer — free downloadable tool", k:"Tool", href:"https://www.strategyzer.com/library/the-value-proposition-canvas"},
      {t:"Coggle", a:"Free mind-mapping tool for the Problem Map exercise", k:"Tool", href:"https://coggle.it/"},
    ]
  },

  market: {
    label: "Market",
    axis: "MARKET | Iterating on the Market and Targeting the Beachhead",
    vp: "Launch and learn beats learn and launch. <b>The market is the wisest teacher you'll have</b> — testing in the field tells you more than any amount of research from a desk.",
    take: "This module is about finding your beachhead — the first, narrowest customer segment you can serve completely — and using real contact with the market to validate or kill your assumptions. Don't confuse a big addressable market with a winnable one. Compare entrepreneurial effectuation (start with what you have and let the market pull you forward) against a traditional target-marketing approach (define the segment first, then build toward it) — most real ventures use both at different moments.",
    tools: [
      {n:"01", t:"MVP / MVS Slide", tag:"Sprint Deliverable", d:"A photo of a physical prototype, a wireframe, or a clear plan is enough to satisfy this — the offering needs to be visible, not finished."},
      {n:"02", t:"Concept-Testing Plan", tag:"Sprint Deliverable", d:"Design a customer interview script or survey that tests pricing and significance, not just general interest. Vague enthusiasm doesn't validate a venture."},
      {n:"03", t:"Primary Data Collection", tag:"Sprint Deliverable", d:"Collect responses from at least 10 real potential customers using agile, low-cost field research methods — not just people you already know."},
      {n:"04", t:"Rearview Mirror Competitor Grid", tag:"Sprint Deliverable", d:"Benchmark your offering against every real alternative in a tabular, attribute-by-attribute comparison — including the 'do nothing' competitor."},
      {n:"05", t:"Segmentation, Beachhead & Reference Customer Worksheet", tag:"Sprint Deliverable", d:"Size the market (TAM, SAM, SOM) from secondary sources, then define each segment's persona and a named, real reference customer for it."},
      {n:"06", t:"Positioning Statement", tag:"Sprint Deliverable", d:"Name your priority target segment — the beachhead — and write the one-line statement of how you intend to be known to it."},
      {n:"07", t:"Pricing Slide", tag:"Sprint Deliverable", d:"Propose a price for every unit, one-time, and recurring revenue stream you plan to offer."},
    ],
    cases: [
      {name:"Lonerider Brewing", who:"Video Vignette — Sumit Vohra, UNC MBA", desc:"A craft brewery case used to study how a venture differentiates itself to the end customer and to channel partners simultaneously, and how social media built an early brand presence."},
    ],
    external: [
      {t:"How to Talk to Users", a:"Y Combinator Startup Library", k:"Guide", href:"https://www.ycombinator.com/library/Iq-how-to-talk-to-users"},
      {t:"Crossing the Chasm", a:"Geoffrey Moore — book on beachhead strategy and market adoption curves", k:"Book", href:"#"},
      {t:"TAM / SAM / SOM worksheet", a:"Pair with the Segmentation & Beachhead worksheet in your Toolkit", k:"Method", href:"#"},
    ]
  },

  model: {
    label: "Model",
    axis: "MODEL | Designing and Iterating on the Business Model",
    vp: "New ventures don't only compete on the product. <b>They compete on the design of the business model itself</b> — how value moves between partners, the venture, channels, and customers.",
    take: "A great product with a weak business model loses to a good product with a great business model more often than founders expect. This module redefines the relationship between buyers and sellers, suppliers and distributors, and asks where the venture actually captures value versus where it just creates it. The 4C lens — Collaborators, Competencies, Channels, Customers — forces you to be explicit about both sides of the ledger: what each relationship costs you, and what it returns.",
    tools: [
      {n:"01", t:"4C Canvas", tag:"Sprint Deliverable", d:"For each product line: identify Collaboration partners who help create the value, Core competencies that let you deliver it, Channels that move it to customers, and the Customers themselves. Then map the cost factors and revenue streams running between each."},
      {n:"02", t:"Business Model Summary Slide", tag:"Sprint Deliverable", d:"A paragraph, a list, or a single graphic that lets an outsider understand how the business actually makes money in under a minute."},
    ],
    cases: [
      {name:"Bronto Software", who:"Video Vignette — Joe Colopy, UNC MBA", desc:"A B2B email marketing platform built through organic growth. The case is used to discuss how a business model evolves as a company scales and how culture shapes a high-performance venture."},
    ],
    external: [
      {t:"Business Model Canvas", a:"Strategyzer — free downloadable template", k:"Tool", href:"https://www.strategyzer.com/library/the-business-model-canvas"},
      {t:"Business Model Analysis for the Entrepreneur", a:"HBS teaching note referenced in Module 3", k:"Reading", href:"#"},
    ]
  },

  management: {
    label: "Management",
    axis: "MODEL/MANAGEMENT | Activating the Model With Your Team",
    vp: "The model defines what needs to happen. <b>Management is the discipline of building a team with the actual core competencies the model demands.</b>",
    take: "New ventures build teams to fill out the competencies the business model requires — not to fill generic titles. Advisors exist to cover what the founding team doesn't have yet, on purpose, not by accident. As the venture scales, leadership itself has to shift — from doing everything personally to guiding and empowering others, while protecting the culture that made the venture distinctive in the first place.",
    tools: [
      {n:"01", t:"Management / Team Tool", tag:"Sprint Deliverable", d:"Build structured profiles for your founding team and advisory board, each mapped explicitly to the core competency they cover."},
      {n:"02", t:"Org Chart", tag:"Sprint Deliverable", d:"Map the skills the model requires to a high-level org chart — job titles, hierarchy, and the unique competency each role must hold. Contract staff covering a core competency belong on the chart too."},
      {n:"03", t:"Governance Slide", tag:"Sprint Deliverable", d:"Describe how decisions get made, how disputes get resolved, and who each function is accountable to. Name your advisory board members and the specific skill each one brings."},
    ],
    cases: [
      {name:"Spectraforce", who:"Video Vignette — Amit Singh, UNC MBA", desc:"A global IT services and staffing firm. The case studies how leadership shifted from transactional and hands-on to strategic as the company scaled from startup to a thousand-person global workforce, and how a metrics-driven culture ('what you cannot measure, you cannot manage') was preserved along the way."},
    ],
    external: [
      {t:"Working backwards from your org chart", a:"Map every box to a competency the business model actually needs — resist hiring titles you've seen elsewhere", k:"Method", href:"#"},
    ]
  },

  milestones: {
    label: "Milestones",
    axis: "MANAGEMENT/MONEY | Milestoning and Venture Phasing",
    vp: "A milestone measures an outcome, not an activity. <b>It's a turning point</b> — evidence the venture has actually moved, not just that time has passed.",
    take: "Milestone planning is part art, part science: you're identifying the markers that prove progress, then integrating timing with the activities, deliveries, and resources needed to hit them. The earliest stage of any venture is volatile by nature — treat your plan as adaptable, not fixed, and use milestones to manage the handoff from ideation and validation into disciplined execution and scale.",
    tools: [
      {n:"01", t:"Major Milestones Slide", tag:"Sprint Deliverable", d:"Identify the specific, measurable milestones you'll use to manage the venture — major achievements or inflection points, not routine activities."},
      {n:"02", t:"Implementation Plan", tag:"Sprint Deliverable", d:"A Gantt chart, roadmap, or similar format phasing your milestones across at least three years in quarterly units. Cover formation, validation, product development, sales, staffing, and customer support."},
    ],
    cases: [
      {name:"Spectraforce — Milestones & KPIs", who:"Revisited from the Management case", desc:"Used again here to discuss how metrics and milestones are used jointly to oversee a venture as it scales — and what counts as a real milestone versus a vanity metric."},
    ],
    external: [
      {t:"Quarterly Gantt / roadmap template", a:"Any spreadsheet or project tool works — Notion, Asana, and Google Sheets all have free starter templates", k:"Tool", href:"#"},
    ]
  },

  money: {
    label: "Money",
    axis: "MONEY | Financial Modeling and Financing",
    vp: "Unit economics first, financing strategy second. <b>You can't capitalize a venture intelligently until you know what one customer actually costs and returns.</b>",
    take: "Start with the drivers — margin, burn, and volume — and validate each one before building the full model. From there, choose a pricing structure and revenue mix (one-time versus recurring) that matches your venture's actual growth goals, not the one that looks best on a slide. Only then does it make sense to talk capitalization strategy: how much you raise, in how many rounds, and how much equity you're willing to trade for it.",
    tools: [
      {n:"01", t:"Financial Assumptions Slide", tag:"Sprint Deliverable", d:"Lay out major costs, major revenue sources, pricing and volume estimates, and the timing of significant events — the inputs everything else depends on."},
      {n:"02", t:"P&L, Cash Flow & Capitalization Model", tag:"Sprint Deliverable", d:"Build at least a 3-year model (5 is better) with enough monthly detail to prove your implementation plan and financial assumptions actually tie together. Track cumulative cash flow closely — if the negative cash position is too deep, revisit your assumptions before you revisit your ask."},
      {n:"03", t:"Cap Table & Ask", tag:"Sprint Deliverable", d:"Plan your capitalization strategy across at least two rounds (e.g. Bootstrap → Seed → Series A) and define your ask: how much capital, for how much equity."},
    ],
    cases: [
      {name:"Unit Economics, Pricing & Cost Modeling", who:"Core lecture content", desc:"Covers how to validate price, volume, and cost drivers before modeling the venture bottom-up, and the trade-offs between unit revenue and recurring revenue for long-term financial health."},
    ],
    external: [
      {t:"Cap Table 101", a:"Carta — free video series on building and managing a cap table", k:"Course", href:"https://carta.com/learn/cap-table-101/"},
      {t:"Venture Deals", a:"Brad Feld & Jason Mendelson — book on term sheets and the financing process", k:"Book", href:"#"},
    ]
  }
};

const ORDER = ["meaning","market","model","management","milestones","money"];
