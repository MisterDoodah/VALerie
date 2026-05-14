import customers from "../data/customers.json" with { type: "json" };
import { aiSuccessScore, healthBand } from "./scoring.js";

const scoredCustomers = customers.map((customer) => {
  const score = aiSuccessScore(customer);
  return {
    ...customer,
    aiSuccessScore: score,
    healthBand: healthBand(score),
  };
});

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const totalValue = scoredCustomers.reduce(
  (sum, customer) => sum + customer.estimatedAnnualValue,
  0,
);

const atRisk = scoredCustomers
  .filter((customer) => customer.healthBand !== "green")
  .sort((a, b) => a.aiSuccessScore - b.aiSuccessScore);

const strongest = [...scoredCustomers].sort(
  (a, b) => b.aiSuccessScore - a.aiSuccessScore,
)[0];

console.log("# Weekly AI Success Leadership Rollup\n");
console.log(`Portfolio customers: ${scoredCustomers.length}`);
console.log(`Estimated annual value tracked: ${currency.format(totalValue)}`);
console.log(
  `Strongest adoption story: ${strongest.name} (${strongest.aiSuccessScore}) - ${strongest.primaryUseCase}`,
);
console.log("\n## Accounts To Watch\n");

for (const customer of atRisk) {
  console.log(
    `- ${customer.name} (${customer.aiSuccessScore}, ${customer.healthBand}): ${customer.topRisk}`,
  );
  console.log(`  Next action: ${customer.nextBestAction}`);
}

console.log("\n## Product Feedback Themes\n");

const feedbackThemes = scoredCustomers.flatMap((customer) =>
  customer.productFeedback.map((theme) => `${theme} (${customer.name})`),
);

for (const theme of feedbackThemes.slice(0, 8)) {
  console.log(`- ${theme}`);
}

