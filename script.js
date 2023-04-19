const mentors = ['Ádám', 'Livi', 'Ricsi']
//['Ádám', 'Livi', 'Ricsi'] -> ['Ádám bio data...', 'Livi bio data...', 'Ricsi bio data...']

const rootElement = document.querySelector('#root')

const map = (arr, fn) => {
  const result = []
  arr.forEach( element => {
    result.push(fn(element))
  });
  return result
}

const getMentorBio = (name) => {
  return Promise.resolve(`${name} bio data... `)
}

const generateBioHtml = (bios) => {
  const html = `
    <h1>Mentors</h1>
    <ul>
      ${bios.map(bio => `<li>${bio}</li>`).join('\n')}
    </ul>
  `
  return html
}

const bioPromises = mentors.map((mentor) => {
  return getMentorBio(mentor)
}) // Higher Order Function

console.log(bioPromises)

Promise.all(bioPromises)
.then((bioDatas) => {
  const bioHtml = generateBioHtml(bioDatas)
  /* fs.writeFile('./bio.html', bioHtml, () => {}) */
  rootElement.innerHTML = bioHtml
})
