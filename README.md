# VALerie

**Current version:** `v0.1.1`  
**Project status:** Concept demo and evolving side project

**VALerie** stands for **Value Engine Repository and Insights Engine**.

Enterprise AI is moving from experimentation to operating change. That shift creates a measurement problem: customers, sellers, and success teams all need a shared way to understand whether AI is technically ready, actually adopted, and creating measurable value. 🚀

VALerie is a lightweight demo of an AI value-realization engine. It uses fictional customer data to model the operating rhythm an enterprise AI team would need after a sale: identify readiness gaps, track adoption depth, quantify value, surface risks, and generate leadership rollups.

## Why This Exists 💡

Enterprise AI adoption is not only a deployment problem. It is an operating model problem.

Many organizations can get an AI pilot started. Fewer can answer the harder questions:

- Are customers technically ready to use advanced capabilities such as connectors, AI coding assistants, custom AI assistants, and governed enterprise workspaces?
- Is adoption happening in real workflows or only in isolated experiments?
- Where is measurable value showing up through time saved, cycle-time reduction, risk reduction, or revenue / cost impact?
- What repeated customer friction should inform product and field strategy?

The goal of this demo is to make that operating model visible and easier for each stakeholder to act on.

## Three Personas 👥

The engine is designed around three people who care about AI value from different angles.

### 1. The Customer AI Owner 🧭

This is the person inside the customer organization responsible for making AI work across teams. They may sit in transformation, operations, IT, data, product, or a business function.

They need to know:

- Which teams are ready to adopt AI safely.
- Which workflows have enough value potential to prioritize.
- Where governance, data access, security, or enablement is blocking progress.
- Whether adoption is broadening from early champions into real operating behavior.
- What value they can credibly report to executives.

For this persona, the engine should become an internal command center for AI adoption.

### 2. The Salesperson Who Sold The AI 🤝

This is the account executive or commercial leader who helped the customer make the initial AI investment.

They need to know:

- Whether the original value hypothesis is becoming real.
- Which stakeholders are seeing impact.
- Where adoption risk could threaten renewal, expansion, or executive confidence.
- Which customer stories are strong enough to support expansion conversations.
- What commercial next steps are earned by actual usage and outcomes.

For this persona, the engine connects the sales promise to the customer reality after the contract is signed.

### 3. The Success Resource Alongside The Customer 🛠️

This is the AI success engineer, technical success manager, solutions architect, value engineer, or post-sale technical resource partnering with the customer.

They need to know:

- Whether the customer has the technical foundation to deploy AI into real workflows.
- Which teams need enablement, change management, or solution design support.
- Which use cases are healthy, stalled, or ready to scale.
- What product feedback or integration friction keeps repeating.
- What to tell leadership in a concise weekly rollup.

For this persona, the engine becomes the working rhythm for adoption, value, technical readiness, and product feedback.

## Shared Operating Model ⚙️

The three personas should not run separate versions of the truth. The customer owner, salesperson, and success resource need a shared model with different views.

This demo organizes that model around four questions:

1. Readiness: can this customer safely and effectively use the AI capabilities they purchased?
2. Adoption: are the right teams using AI in real workflows?
3. Value: is usage turning into measurable business impact?
4. Feedback: what risks, blockers, and product signals should shape the next action?

## What The Demo Shows 📊

- A portfolio view of enterprise customers with readiness, adoption, and value scores.
- A simple scoring model for AI success health.
- Dummy account data for enterprise use cases across 14 fictional customers, 14 industries, multiple market-size bands, and employee counts ranging from 140 to 142,000.
- A weekly leadership rollup that summarizes wins, risks, next-best actions, and product feedback themes.
- A foundation for persona-specific views across customer ownership, sales, and success.

## Demo Customer Portfolio 🏢

The demo data intentionally spans a varied enterprise portfolio:

| Customer | Industry | Market size | Market cap | Employees |
| --- | --- | --- | --- | --- |
| Apex Bank | Commercial Banking | Global enterprise | $68.4B | 43,800 |
| Northstar Health | Integrated Healthcare Delivery | National enterprise | $22.1B | 58,700 |
| Atlas Retail | Omnichannel Retail | Global enterprise | $112.3B | 142,000 |
| Horizon Insurance | Property and Casualty Insurance | National enterprise | $17.8B | 26,700 |
| Forge Manufacturing | Industrial Manufacturing | Global enterprise | $34.6B | 31,500 |
| Nimbus Software | B2B SaaS | Public digital-native enterprise | $28.9B | 9,200 |
| Meridian Energy | Energy and Utilities | Regional enterprise | $12.6B | 21,300 |
| BluePeak Logistics | Logistics and Supply Chain | Global enterprise | $19.4B | 54,400 |
| Cobalt Media Group | Media and Entertainment | Mid-market enterprise | $4.7B | 11,800 |
| Summit Telecom | Telecommunications | Global enterprise | $52.3B | 73,400 |
| Verdant Pharma | Life Sciences and Pharmaceuticals | Global enterprise | $76.2B | 48,900 |
| Ironwood Public Sector | Public Sector | Large government agency | Not publicly traded | 17,600 |
| VectorLoop AI | AI Security Software | Venture-backed startup | Private startup | 140 |
| Lumen Grid Labs | Climate Tech Infrastructure | Growth-stage startup | Private startup | 420 |

These are deliberately fictional, randomized company profiles. The point is to create enough variation to test how the value engine behaves across large regulated enterprises, digital-native companies, public-sector organizations, mid-market enterprise accounts, and high-growth startups.

## Current Demo Scope 🧪

The current version is intentionally small:

- Fictional customer records live in `data/customers.json`.
- AI success scores are calculated in `src/scoring.js`.
- A leadership rollup is generated from `src/rollup.js`.

Run the rollup:

```bash
npm run rollup
```

## Demo Data Principles 🧬

The customer data is fictional. It is meant to show the shape of the operating model, not represent real customer information.

The sample dataset includes:

- Account context: segment, industry, region, market size, market cap, employee count, annual revenue, contract value, renewal date, relationship stage, and deployment phase.
- Ownership context: executive sponsor, primary internal owner, primary use case, secondary use cases, enabled capabilities, and target personas.
- Success signals: readiness score, adoption score, value-confidence score, weekly active users, licensed users, usage trend, measured outcomes, and estimated annual value.
- Operating rhythm inputs: top risk, blockers, next-best action, product feedback, and a synthetic customer quote.

The current sample set includes 14 fictional customers across commercial banking, healthcare, retail, insurance, manufacturing, software, energy, logistics, media, telecommunications, life sciences, public sector, AI security software, and climate tech infrastructure.

## Versioning 🧭

This project will evolve in public as a side project about AI consumption value: how companies move from buying AI to proving adoption, workflow change, and business impact.

Versioning will follow a lightweight semantic pattern:

- `v0.x`: concept, data model, rough prototypes, and early thinking.
- `v1.0`: first usable dashboard with the three-persona model visible.
- `v1.x`: incremental features, better scoring, better rollups, and improved storytelling.
- `v2.x`: deeper productized workflows such as benchmark comparisons, richer value models, or simulated customer journeys.

Current release:

| Version | Focus | What changed |
| --- | --- | --- |
| `v0.1.1` | VALerie branding | Renamed the project to VALerie and clarified the Value Engine Repository and Insights Engine identity |
| `v0.1.0` | Concept baseline | README, fictional customer portfolio, scoring model, and leadership rollup script |

Planned versions:

| Version | Focus | Candidate additions |
| --- | --- | --- |
| `v0.2.0` | Persona model | Separate customer, sales, and success views in the data model |
| `v0.3.0` | Visual dashboard | Portfolio UI with readiness, adoption, value, and risk views |
| `v0.4.0` | Value narrative | Executive summary generator and LinkedIn-ready example insights |
| `v1.0.0` | First complete demo | Shareable dashboard, customer detail page, rollup, and short demo video |

## Build And Share Process ✍️

The project is meant to produce both code and thinking. Each meaningful version should create one public artifact and one practical learning.

Working rhythm:

1. Pick a value-realization question.
   Example: "How do we know AI usage is becoming workflow adoption?"

2. Add or change the model.
   Update customer data, scoring logic, persona views, rollups, or dashboard behavior.

3. Generate an example insight.
   Use the fictional portfolio to show what a customer, salesperson, or success resource would do differently.

4. Capture the lesson.
   Add a short note to the README, changelog, or future `/notes` folder.

5. Share externally when useful.
   Turn the lesson into a LinkedIn post about AI consumption value, adoption quality, customer success, or operating cadence.

LinkedIn themes this project can support:

- AI consumption value is not the same as AI usage.
- The customer, seller, and success team need one shared value model.
- Adoption quality matters more than seat count.
- Readiness blockers are often operating-model blockers, not product blockers.
- AI can help success teams move from anecdotal account updates to evidence-backed rollups.
- The best expansion conversations are earned by measured workflow value.

## Where This Could Go 🧱

The next version should make the three-persona model more explicit:

- Customer AI owner view: portfolio health, use-case priorities, internal blockers, executive value narrative.
- Sales view: value hypothesis, expansion readiness, stakeholder impact, renewal and growth signals.
- Success view: technical readiness checklist, adoption plan, enablement needs, product feedback, weekly rollup.

Additional build ideas:

- Dashboard UI with persona tabs.
- Customer detail pages.
- Value hypothesis tracker.
- Technical readiness checklist.
- Adoption stage model.
- Executive summary generator.
- Product feedback clustering.
- Demo video showing an AI-assisted development workflow modifying the scoring model and generating a new rollup.

## Next Build Steps ✅

- Add persona-specific views for customer owner, salesperson, and success resource.
- Add a visual dashboard.
- Add customer detail pages.
- Add an executive rollup generator in the UI.
- Record a short AI-assisted development demo showing the app being modified and the rollup updating.
