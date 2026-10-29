
 // Calculate Simple Interest
function SimpleInterest(P, R, T) {
    return (P * R * T) / 100;
}

// Calculate Compound Interest
function CompoundInterest(P, R, N, T) {
    return P * Math.pow(1 + R / (100 * N), N * T) - P;
}

// Export both functions
module.exports = { SimpleInterest, CompoundInterest };
