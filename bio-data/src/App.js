import './App.css';
import BioData from './components/BioData'
import Interests from './components/Interests';
import PersonalInfo from './components/PersonalInfo';
import Skills from './components/Skills';
import SocialLinks from './components/SocialLinks';


const persons = [
  // Noman Gazi
  {
    name: 'Noman Gazi',
    dateOfBirth: 'May 01, 2001',
    telephone: '01726387661',
    address: 'Doulatpur, Khulna',
    socialLinks: [
      {
        platformName: 'Facebook',
        profileLink: 'https://facebook.com/nomangazicse',
      },
      {
        platformName: 'Instagram',
        profileLink: 'https://instagram.com/nomangazicse',
      },
    ],
    interests: ['Reading Books', 'Traveling', 'Swimming'],
    skills: ['JS', 'ReactJS', 'Redux', 'NodeJS']
  },
  // Asief Mahir
  {
    name: 'Asief Mahir',
    dateOfBirth: 'Jan 19, 1995',
    telephone: '01712482499',
    address: 'Farmgate, Dhaka',
    socialLinks: [
      {
        platformName: 'Facebook',
        profileLink: 'https://facebook.com/mahirasief',
      },
      {
        platformName: 'Instagram',
        profileLink: 'https://instagram.com/mahirasief',
      },
    ],
    interests: ['Reading Books', 'Traveling', 'Swimming', 'Speaking'],
    skills: ['JS', 'ReactJS', 'Redux', 'NodeJS', 'ExpressJS']
  },
  // Saidur Rahman Setu
  {
    name: 'Saidur Rahman Setu',
    dateOfBirth: 'Nov 01, 1994',
    telephone: '01974683473',
    address: 'Manikganj, Dhaka',
    socialLinks: [
      {
        platformName: 'Facebook',
        profileLink: 'https://facebook.com/srst',
      },
      {
        platformName: 'Instagram',
        profileLink: 'https://instagram.com/srst',
      },
    ],
    interests: ['Reading Books', 'Traveling', 'Swimming', 'Content Creation'],
    skills: ['JS', 'ReactJS', 'WP', 'PHP', 'WP Theme Dev']
  }

]
function App() {
  return (
    <div className="App container mx-auto px-4">
      
      {persons.map(item => (
        <BioData
          key={item.name}
          personalInfo={
            <PersonalInfo
              name={item.name}
              dateOfBirth={item.dateOfBirth}
              telephone={item.telephone}
              address={item.address}
            />
          }
          skillsSection={
            <Skills
              skills={item.skills}
            />
          }
          interestsSection={
            <Interests
              interests={item.interests}
            />
          }
          socialLinks={
            <SocialLinks
              socialLinks={item.socialLinks}
            />
          }


        />
      ))}
    </div>
  );
}

export default App;
