# Enterprise AI Value Engine

Enterprise AI is moving from experimentation to operating change. That shift creates a measurement problem: customers, sellers, and success teams all need a shared way to understand whether AI is technically ready, actually adopted, and creating measurable value.

This project is a lightweight demo of an AI value-realization engine. It uses fictional customer data to model the operating rhythm an enterprise AI team would need after a sale: identify readiness gaps, track adoption depth, quantify value, surface risks, and generate leadership rollups.

## Why This Exists

Enterprise AI adoption is not only a deployment problem. It is an operating model problem.

Many organizations can get an AI pilot started. Fewer can answer the harder questions:

- Are customers technically ready to use advanced capabilities such as connectors, AI coding assistants, custom AI assistants, and governed enterprise workspaces?
- Is adoption happening in real workflows or only in isolated experiments?
- Where is measurable value showing up through time saved, cycle-time reduction, risk reduction, or revenue / cost impact?
- What repeated customer friction should inform product and field strategy?

The goal of this demo is to make that operating model visible.

## Three Personas

The engine is designed around three people who care about AI value from different angles.

### 1. The Customer AI Owner

This is the person inside the customer organization responsible for making AI work across teams. They may sit in transformation, operations, IT, data, product, or a business function.

They need to know:

- Which teams are ready to adopt AI safely.
- Which workflows have enough value potential to prioritize.
- Where governance, data access, security, or enablement is blocking progress.
- Whether adoption is broadening from early champions into real operating behavior.
- What value they can credibly report to executives.

For this persona, the engine should become an internal command center for AI adoption.

### 2. The Salesperson Who Sold The AI

This is the account executive or commercial leader who helped the customer make the initial AI investment.

They need to know:

- Whether the original value hypothesis is becoming real.
- Which stakeholders are seeing impact.
- Where adoption risk could threaten renewal, expansion, or executive confidence.
- Which customer stories are strong enough to support expansion conversations.
- What commercial next steps are earned by actual usage and outcomes.

For this persona, the engine connects the sales promise to the customer reality after the contract is signed.

### 3. The Success Resource Alongside The Customer

This is the AI success engineer, technical success manager, solutions architect, value engineer, or post-sale technical resource partnering with the customer.

They need to know:

- Whether the customer has the technical foundation to deploy AI into real workflows.
- Which teams need enablement, change management, or solution design support.
- Which use cases are healthy, stalled, or ready to scale.
- What product feedback or integration friction keeps repeating.
- What to tell leadership in a concise weekly rollup.

For this persona, the engine becomes the working rhythm for adoption, value, technical readiness, and product feedback.

## Shared Operating Model

The three personas should not run separate versions of the truth. The customer owner, salesperson, and success resource need a shared model with different views.

This demo organizes that model around four questions:

1. Readiness: can this customer safely and effectively use the AI capabilities they purchased?
2. Adoption: are the right teams using AI in real workflows?
3. Value: is usage turning into measurable business impact?
4. Feedback: what risks, blockers, and product signals should shape the next action?

## What The Demo Shows

- A portfolio view of enterprise customers with readiness, adoption, and value scores.
- A simple scoring model for AI success health.
- Dummy account data for enterprise use cases across financial services, healthcare, retail, manufacturing, software, energy, and logistics.
- A weekly leadership rollup that summarizes wins, risks, next-best actions, and product feedback themes.
- A foundation for persona-specific views across customer ownership, sales, and success.

## Current Demo Scope

The current version is intentionally small:

- Fictional customer records live in `data/customers.json`.
- AI success scores are calculated in `src/scoring.js`.
- A leadership rollup is generated from `src/rollup.js`.

Run the rollup:

```bash
npm run rollup
```

## Demo Data Principles

The customer data is fictional and intentionally simple. It is meant to show the shape of the operating model, not represent real customer information.

The sample dataset includes:

- Customer segment
- Primary AI use case
- Enabled AI capabilities
- Readiness score
- Adoption score
- Value confidence score
- Estimated annual value
- Top risk
- Next-best action
- Product feedback themes

## Where This Could Go

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

## Next Build Steps

- Add persona-specific views for customer owner, salesperson, and success resource.
- Add a visual dashboard.
- Add customer detail pages.
- Add an executive rollup generator in the UI.
- Record a short AI-assisted development demo showing the app being modified and the rollup updating.
