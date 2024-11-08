let candidate_num = parseInt(prompt('How many candidates here is?'));
const candidates = [];
for (let i = 0; i < candidate_num; i++) {
  let name = prompt(`Give ${i + 1}. number name:`);
  let votes = 0;
  candidates.push({name, votes});
}

let voter_count = parseInt(prompt('How many voters?'));
for (let i = 0; i < voter_count; i++) {
  let vote = prompt(`${i + 1}. voter. Who do you vote? `);
  for (let candidate of candidates) {
    if (candidate.name === vote) {
      candidate.votes += 1;
    }
  }
}
candidates.sort((a, b) => {
  return b.votes - a.votes;
});

console.log(
    `Winner is ${candidates[0].name} with ${candidates[0].votes} votes!`);
console.log(`Results:`);
for (let candidate of candidates) {
  console.log(`${candidate.name}: ${candidate.votes} votes`);
}

