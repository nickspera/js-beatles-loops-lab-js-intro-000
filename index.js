// add solution here
function theBeatlesPlay(musicians, instruments) {
        const arr = []

  for (let i = 0, l = musicians.length; i < l; i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return arr
}

function johnLennonFacts(facts) {
      const yelledFacts = []

   let i = 0
   while (i < facts.length) {
        yelledFacts.push(`${facts[i]}!!!`)
        i++
      }

  return yelledFacts
}

function iLoveTheBeatles(n) {
  const arr = []

  do {
    arr.push('I love the Beatles!')
    n++
  } while (n < 15)

  return arr
}
