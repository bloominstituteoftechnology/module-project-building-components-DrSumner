function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav

  function buildNav(links) {
    //  ✨ do your magic here
    const nav = document.createElement('nav')
    links.forEach(element => {
      
      const anchor = document.createElement('a')
      anchor.href = element.href
      anchor.title = element.title
      anchor.textContent = element.textContent
     nav.appendChild(anchor)
    });
    return nav
    //return document.createElement('nav')
  }

  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]))

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

  function buildLearnerCard(learner, languages) {
    //  ✨ do your magic here
    const div = document.createElement('div')
    div.classList = 'learner-card'
    div.addEventListener('click', evt =>{
      if(document.querySelector('.active') !== null)
    {document.querySelector('.active').classList.remove('active')}
    div.classList.add('active') }
    )
      const name = document.createElement('p')
      const id = document.createElement('p')
      const dob = document.createElement('p')
      const fav = document.createElement('p')
      name.textContent = learner.fullName
      id.textContent = `Learner ID: ${learner.id}`
      dob.textContent = `Date of Birth: ${learner.dateOfBirth}`
      languages.forEach( lang => {
        if( lang.id == learner.favLanguage){
          fav.textContent =`Favorite Language: ${lang.name}`

        }
      })
      
      div.appendChild(name)
      div.appendChild(id)
      div.appendChild(dob)
      div.appendChild(fav)
      document.querySelector('section').appendChild(div)
    
  }

  {
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ]
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ]
    //  ✨ do your magic here
    learners.forEach( learner => buildLearnerCard(learner, languages))
  }

  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  function buildFooter(footerData) {
    //  ✨ do your magic here

    const footer = document.createElement('footer')
    const company = document.createElement('div')
    const social = document.createElement('div')
    const tag = document.createElement('div')

    footer.appendChild(company)
    footer.appendChild(social)
    footer.appendChild(tag)

    company.classList = 'company-info'
    social.classList = 'social-media'

    const companyName = document.createElement('p')
    const companyAdd = document.createElement('p')
    const companyCont = document.createElement('p')

    company.appendChild(companyName)
    company.appendChild(companyAdd)
    company.appendChild(companyCont)

    companyName.textContent = footerData.companyName
    companyName.classList = 'company-name'

    companyAdd.textContent = footerData.address
    companyAdd.classList = 'address'

    companyCont.classList = 'contact-email'

    const link = document.createElement('a')
    link.href = `mailto:${footerData.contactEmail}`
    link.textContent =footerData.contactEmail

    companyCont.textContent = `Email: `
    companyCont.appendChild(link)
    for(let obj in footerData.socialMedia){
      let string = String(obj)
      let modString = string[0].toUpperCase() + string.slice(1)
     const anchor = document.createElement('a')
      social.appendChild(anchor)
      anchor.href = footerData.socialMedia[obj]
      anchor.textContent = modString
    }
    const currentYear = new Date().getFullYear()

    tag.textContent = `© ${footerData.companyName.toUpperCase()} ${currentYear}`
    return footer
  }

  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
  }))

  // 👉 TASK 4 - Clicking on the section should deactivate the active card
 document.querySelector('section').addEventListener('click', evt => {
  const section = document.querySelector('section')
  //console.log(evt.target)
  if(evt.target === section){
    if(document.querySelector('.active') !== null)
    {document.querySelector('.active').classList.remove('active')}
  }
 })
  //  ✨ do your magic here
}

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()
