export function aiSuccessScore(customer) {
  return Math.round(
    customer.readinessScore * 0.35 +
      customer.adoptionScore * 0.35 +
      customer.valueConfidenceScore * 0.3,
  );
}

export function healthBand(score) {
  if (score >= 80) return "green";
  if (score >= 65) return "yellow";
  return "red";
}

