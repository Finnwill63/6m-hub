// 6M Compass — content data, v2
// Structure reorganized around the 6-level diagnostic questions used in CommonWeal's
// public founder-coaching tool (commonweal.co), built on Ted Zoller's 6M framework.
// Milestones has been replaced with Mindset per that public structure.
// Framework intros paraphrased from Zoller's course material (THBA/GIE companion use).
// Resources are mapped to the specific question they best help answer.

const SIXM = {

  meaning: {
    label: "Meaning",
    axis: "MEANING | Purpose, Problem, and Value Proposition",
    vp: "Every venture starts at the union of two questions: what does the market need, and what do you understand that others don't? <b>That intersection is the value proposition.</b>",
    take: "Some founders start with an idea — they're innovation-driven. Others start with a problem — they're market-driven, and let the customer teach them what to build. Neither path is wrong, but ideas alone are table stakes; it's the discipline of pairing the idea with a real, validated need that turns a concept into a venture.",
    questions: [
      { level:1, q:"What problem are you solving?", sub:"Clearly articulate the pain point",
        resources:[
          {t:"Problem Map", a:"Coggle — mind-map the structure of the problem before you defend the solution", k:"Tool", href:"https://coggle.it/"},
          {t:"Opflow", a:"Video case — a surgical-waste tracking platform used to teach cutting a pitch down to the pain point that actually carries it", k:"Case Study", href:"#"},
        ]},
      { level:2, q:"Why does this problem matter?", sub:"Validate urgency and impact",
        resources:[
          {t:"The Mom Test", a:"Rob Fitzpatrick — how to ask customers questions that surface real urgency instead of polite encouragement", k:"Book", href:"https://www.momtestbook.com/"},
          {t:"Jetpool", a:"Video vignette — Ryan Stone, UNC MBA — refining a pitch to convey why the problem is urgent, not just real", k:"Case Study", href:"#"},
        ]},
      { level:3, q:"What is your unique insight?", sub:"Define differentiated perspective",
        resources:[
          {t:"Value Proposition & USP Worksheet", a:"Restructure your differentiator, customer value, and purchasing motivation into one sentence", k:"Tool", href:"#"},
          {t:"Value Proposition Canvas", a:"Strategyzer — free downloadable tool pairing customer jobs/pains/gains against your product", k:"Tool", href:"https://www.strategyzer.com/library/the-value-proposition-canvas"},
        ]},
      { level:4, q:"What is your vision for change?", sub:"Articulate transformed future state",
        resources:[
          {t:"How Great Leaders Inspire Action", a:"Simon Sinek — TED Talk on finding your 'why' before your 'what'", k:"Video", href:"https://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action"},
        ]},
      { level:5, q:"Why are you the one to solve this?", sub:"Establish founder-problem fit",
        resources:[
          {t:"How I Built This", a:"Guy Raz, NPR — founder origin stories; listen for how real founders found their problem fit", k:"Podcast", href:"https://www.npr.org/series/490248027/how-i-built-this"},
        ]},
      { level:6, q:"What legacy will you create?", sub:"Define lasting impact and purpose",
        resources:[
          {t:"One-Slide Executive Summary", a:"Pain, solution, and business model in one slide — the distillation you hand an outsider", k:"Tool", href:"#"},
          {t:"Name, Brand & Logo", a:"Lock the venture's identity so it reinforces the value proposition and the impact you intend to leave", k:"Tool", href:"#"},
        ]},
    ]
  },

  market: {
    label: "Market",
    axis: "MARKET | Demand, Segmentation, and Market Entry",
    vp: "Launch and learn beats learn and launch. <b>The market is the wisest teacher you'll have</b> — testing in the field tells you more than any amount of research from a desk.",
    take: "This dimension is about finding your beachhead — the first, narrowest customer segment you can serve completely — and using real contact with the market to validate or kill your assumptions. A big addressable market and a winnable one are not the same thing.",
    questions: [
      { level:1, q:"Who has this problem?", sub:"Identify initial target segment",
        resources:[
          {t:"Primary Data Collection", a:"Collect responses from at least 10 real potential customers using agile field research", k:"Tool", href:"#"},
          {t:"How to Talk to Users", a:"Y Combinator Startup Library", k:"Guide", href:"https://www.ycombinator.com/library/Iq-how-to-talk-to-users"},
        ]},
      { level:2, q:"How big is the opportunity?", sub:"Size the addressable market",
        resources:[
          {t:"Segmentation, Beachhead & Reference Customer Worksheet", a:"Size TAM/SAM/SOM from secondary sources, then define a persona and a named reference customer per segment", k:"Tool", href:"#"},
        ]},
      { level:3, q:"What are the adoption barriers?", sub:"Map customer switching costs",
        resources:[
          {t:"Rearview Mirror Competitor Grid", a:"Benchmark against every real alternative — including 'do nothing' — attribute by attribute", k:"Tool", href:"#"},
          {t:"Concept-Testing Plan", a:"Design a customer interview or survey that tests pricing and significance, not just interest", k:"Tool", href:"#"},
        ]},
      { level:4, q:"How will you reach them?", sub:"Define go-to-market channels",
        resources:[
          {t:"Positioning Statement", a:"Name your priority target segment and how you intend to be known to it", k:"Tool", href:"#"},
          {t:"Lonerider Brewing", a:"Video vignette — Sumit Vohra, UNC MBA — differentiating to customers and channel partners at once", k:"Case Study", href:"#"},
        ]},
      { level:5, q:"How will the market evolve?", sub:"Forecast market dynamics",
        resources:[
          {t:"Crossing the Chasm", a:"Geoffrey Moore — beachhead strategy and market adoption curves", k:"Book", href:"#"},
          {t:"Y Combinator Startup Podcast", a:"Tactical episodes on customer discovery, MVPs, and reaching product-market fit", k:"Podcast", href:"https://www.ycombinator.com/library"},
        ]},
      { level:6, q:"How will you expand?", sub:"Plan adjacent market entry",
        resources:[
          {t:"Pricing Slide", a:"Propose a price for every unit, one-time, and recurring stream — a signal of readiness for adjacent segments", k:"Tool", href:"#"},
          {t:"Typeform", a:"Free tier — test a new segment's willingness-to-pay before you commit to expansion", k:"Tool", href:"https://www.typeform.com/"},
        ]},
    ]
  },

  model: {
    label: "Model",
    axis: "MODEL | How You Create, Deliver, and Capture Value",
    vp: "New ventures don't only compete on the product. <b>They compete on the design of the business model itself</b> — how value moves between partners, the venture, channels, and customers.",
    take: "A great product with a weak business model loses to a good product with a great business model more often than founders expect. The 4C lens — Collaborators, Competencies, Channels, Customers — forces you to be explicit about both sides of the ledger.",
    questions: [
      { level:1, q:"What is your solution?", sub:"Define core product/service",
        resources:[
          {t:"Business Model Summary Slide", a:"A paragraph or graphic that lets an outsider understand how the business makes money in under a minute", k:"Tool", href:"#"},
        ]},
      { level:2, q:"How do you deliver value?", sub:"Map the value chain",
        resources:[
          {t:"4C Canvas", a:"Map Collaboration partners, Core competencies, Channels, and Customers for each product line", k:"Tool", href:"#"},
          {t:"Business Model Canvas — live board", a:"Miro — free, real-time collaborative canvas for mapping the full value chain as a team", k:"Tool", href:"https://miro.com/templates/business-model-canvas/"},
        ]},
      { level:3, q:"How do you make money?", sub:"Define revenue model",
        resources:[
          {t:"Business Model Analysis for the Entrepreneur", a:"HBS teaching note on where a venture actually captures value versus where it just creates it", k:"Reading", href:"#"},
        ]},
      { level:4, q:"What are unit economics?", sub:"Validate profitability per customer",
        resources:[
          {t:"Unit Economics, Pricing & Cost Modeling", a:"Validate margin, burn, and volume drivers before building the full financial model — see also the Money module", k:"Method", href:"#"},
        ]},
      { level:5, q:"What is your moat?", sub:"Identify defensibility",
        resources:[
          {t:"Acquired", a:"Ben Gilbert & David Rosenthal — long-form deep dives into the business models and defensibility behind iconic companies", k:"Podcast", href:"#"},
        ]},
      { level:6, q:"How does the model scale?", sub:"Plan for operational leverage",
        resources:[
          {t:"Bronto Software", a:"Video vignette — Joe Colopy, UNC MBA — a B2B platform built through organic growth; how the model evolves at scale", k:"Case Study", href:"#"},
        ]},
    ]
  },

  management: {
    label: "Mgmt",
    axis: "MANAGEMENT | Team, Leadership, Culture, and Advisory",
    vp: "The model defines what needs to happen. <b>Management is the discipline of building a team with the actual core competencies the model demands.</b>",
    take: "New ventures build teams to fill out the competencies the business model requires — not to fill generic titles. Advisors exist to cover what the founding team doesn't have yet, on purpose. As the venture scales, leadership itself has to shift from doing everything personally to guiding and empowering others.",
    questions: [
      { level:1, q:"What skills are needed?", sub:"Map required competencies",
        resources:[
          {t:"Working backwards from your org chart", a:"Map every box to a competency the business model actually needs — resist hiring titles you've seen elsewhere", k:"Method", href:"#"},
        ]},
      { level:2, q:"Who is on the founding team?", sub:"Assess founder capabilities",
        resources:[
          {t:"Management / Team Tool", a:"Structured profiles for your founding team and advisory board, mapped to the competency each covers", k:"Tool", href:"#"},
        ]},
      { level:3, q:"What gaps exist?", sub:"Identify critical hiring needs",
        resources:[
          {t:"Org Chart", a:"Job titles, hierarchy, and the unique competency each role must hold — including contract staff", k:"Tool", href:"#"},
        ]},
      { level:4, q:"How will you build culture?", sub:"Define values and norms",
        resources:[
          {t:"Spectraforce", a:"Video vignette — Amit Singh, UNC MBA — how a metrics-driven culture was preserved while scaling to a thousand-person workforce", k:"Case Study", href:"#"},
          {t:"Masters of Scale", a:"Reid Hoffman — how founders build the team and culture that let a venture actually scale", k:"Podcast", href:"#"},
        ]},
      { level:5, q:"Who advises you?", sub:"Build strategic advisory network",
        resources:[
          {t:"Governance Slide", a:"Name your advisory board and the specific skill each member brings; describe how decisions get made", k:"Tool", href:"#"},
        ]},
      { level:6, q:"How will leadership evolve?", sub:"Plan for organizational growth",
        resources:[
          {t:"Lenny's Podcast", a:"Lenny Rachitsky — leadership and team-building frameworks from operators who've scaled companies", k:"Podcast", href:"#"},
        ]},
    ]
  },

  money: {
    label: "Money",
    axis: "MONEY | Revenue, Funding, and Capital Strategy",
    vp: "Unit economics first, financing strategy second. <b>You can't capitalize a venture intelligently until you know what one customer actually costs and returns.</b>",
    take: "Start with the drivers — margin, burn, and volume — and validate each one before building the full model. Only then does it make sense to talk capitalization strategy: how much you raise, in how many rounds, and how much equity you're willing to trade for it.",
    questions: [
      { level:1, q:"How much do you need?", sub:"Define initial capital requirements",
        resources:[
          {t:"Financial Assumptions Slide", a:"Major costs, major revenue sources, pricing and volume estimates, and the timing of significant events", k:"Tool", href:"#"},
        ]},
      { level:2, q:"What milestones will it fund?", sub:"Map runway to key metrics",
        resources:[
          {t:"P&L, Cash Flow & Capitalization Model", a:"A 3-5 year model with enough monthly detail to tie your implementation plan to your assumptions", k:"Tool", href:"#"},
        ]},
      { level:3, q:"What are your funding options?", sub:"Evaluate capital sources",
        resources:[
          {t:"Cap Table & Ask", a:"Plan capitalization across at least two rounds and define what you're asking for", k:"Tool", href:"#"},
          {t:"20VC (The Twenty Minute VC)", a:"Harry Stebbings — how VCs actually evaluate deals, valuations, and the ask", k:"Podcast", href:"#"},
        ]},
      { level:4, q:"What terms are acceptable?", sub:"Define deal parameters",
        resources:[
          {t:"Venture Deals", a:"Brad Feld & Jason Mendelson — book on term sheets and the financing process", k:"Book", href:"#"},
          {t:"Cap Table 101", a:"Carta — free video series on building and managing a cap table", k:"Course", href:"https://carta.com/learn/cap-table-101/"},
        ]},
      { level:5, q:"What's your path to sustainability?", sub:"Plan for profitability or next raise",
        resources:[
          {t:"Unit Economics, Pricing & Cost Modeling", a:"Trade-offs between unit revenue and recurring revenue for long-term financial health", k:"Method", href:"#"},
          {t:"Writing a Business Plan", a:"Sequoia Capital — the pitch and financial-narrative guide startups have used since Airbnb", k:"Guide", href:"https://sequoiacap.com/article/writing-a-business-plan/"},
        ]},
      { level:6, q:"What's the exit strategy?", sub:"Define liquidity options",
        resources:[
          {t:"Acquisition vs. IPO vs. hold", a:"Know your most likely liquidity path early — it shapes who you raise from and what terms you accept", k:"Method", href:"#"},
        ]},
    ]
  },

  mindset: {
    label: "Mindset",
    axis: "MINDSET | Founder Psychology, Resilience, and Growth",
    vp: "The venture is a proxy. <b>You are the instrument</b> — your motivations, blind spots, and decision-making are what actually get tested under pressure.",
    take: "The other five Ms describe the venture. This one describes you. A sound business model built by a founder who can't handle failure, can't see their own blind spots, or hasn't examined why they're doing this at all is still a fragile venture. Come back to this dimension whenever a setback in one of the other five knocks you off balance.",
    questions: [
      { level:1, q:"What drives you?", sub:"Identify core motivations",
        resources:[
          {t:"How Great Leaders Inspire Action", a:"Simon Sinek — TED Talk on finding your 'why' before your 'what'", k:"Video", href:"https://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action"},
          {t:"Drive", a:"Daniel Pink — the science of what actually motivates people over the long haul", k:"Book", href:"#"},
        ]},
      { level:2, q:"What are your fears?", sub:"Acknowledge and address blockers",
        resources:[
          {t:"The Power of Vulnerability", a:"Brené Brown — TED Talk on naming fear and shame instead of letting them run silently", k:"Video", href:"https://www.ted.com/talks/brene_brown_the_power_of_vulnerability"},
        ]},
      { level:3, q:"How do you handle failure?", sub:"Build resilience frameworks",
        resources:[
          {t:"Grit", a:"Angela Duckworth — passion and sustained perseverance as a learnable trait, not a fixed one", k:"Book", href:"#"},
        ]},
      { level:4, q:"What blind spots exist?", sub:"Develop self-awareness",
        resources:[
          {t:"Thinking, Fast and Slow", a:"Daniel Kahneman — the cognitive biases that quietly distort founder judgment", k:"Book", href:"#"},
        ]},
      { level:5, q:"How do you make decisions?", sub:"Establish decision frameworks",
        resources:[
          {t:"Thinking in Bets", a:"Annie Duke — separating the quality of a decision from the quality of its outcome", k:"Book", href:"#"},
        ]},
      { level:6, q:"What is your leadership philosophy?", sub:"Define authentic leadership style",
        resources:[
          {t:"Dare to Lead", a:"Brené Brown — a seven-year study on courage and leadership, condensed into practice", k:"Book", href:"#"},
        ]},
    ]
  }
};

const ORDER = ["meaning","market","model","management","money","mindset"];
