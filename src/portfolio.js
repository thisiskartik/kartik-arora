const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://kartik-arora.com',
  title: 'Kartik Arora.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Kartik Arora',
  role: 'Software Engineer',
  description:
    'I\'m a Full Stack Web Developer with specialization in React and Django. I\'ve been programming since 6th standard and I am interested in Computer Science. I always enjoy doing stuff on my computer. Currently, I\'m working as a Freelance Web Developer and I\'m also studying Computer Science at SRM Institute of Science and Technology, KTR.',
  resume: 'https://drive.google.com/file/d/1ZZwoijsCAZFxFDUzvQQkK6oymASR_PRX/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/imkartik/',
    github: 'https://github.com/thisiskartik',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'CryptoGull',
    description:
      'In this project, I was given the task of storing Crypto pricing data (for every second) in most optimized way possible. I also had to fetch and display all of this data as fast as possible.',
    stack: ['Django', 'NextJS', 'React'],
    livePreview: 'https://cryptogull.io/',
  },
  {
    name: 'Minions: The Rise of Gru WebAR React App',
    description:
      'In this project, I was given the task of building a React App for Minions WebAR Experience. I implemented animation using Framer Motion. I linked AFrame and WebAR functionality to the React App.',
    stack: ['React', 'TypeScript', 'Framer Motion'],
    livePreview: 'https://realitykraft1.8thwall.app/minions/',
  },
  {
    name: 'AuthServer',
    description:
      'This is a template auth server to quickly start a Django App with Authentication and Authorization built in.',
    stack: ['Django', 'REST', 'JWT'],
    sourceCode: 'https://github.com/thisiskartik/authserver'
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'C/C++',
  'JavaScript/TypeScript',
  'Python',
  'HTML',
  'CSS',
  'ReactJS',
  'Redux',
  'Framer Motion',
  'Formik',
  'NextJS',
  'Django',
  'Django Rest Framework',
  'Git'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'kartikcsengineer@gmail.com',
}

export { header, about, projects, skills, contact }
