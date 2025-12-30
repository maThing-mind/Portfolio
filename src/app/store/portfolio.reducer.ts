import { createReducer, on } from '@ngrx/store';
import * as PortfolioActions from './portfolio.actions';

export interface PortfolioState {
  personalInfo: any;
  skills: any[];
  experience: any[];
  projects: any[];
  activeSection: string;
  loading: boolean;
  error: string | null;
}

export const initialState: PortfolioState = {
  personalInfo: {
    name: 'Shoban Babu.K',
    title: 'Software Developer',
    email: 'bshoban8@gmail.com',
    phone: '7358268360',
    address: 'No 2/98 sengalani amman koil street, Chennai 600091',
    about: `I'm a self-learner who is passionately interested to learn and to implement what I've learned. I'm excited to hone my technical skills for the success of the organization and to enhance my knowledge to the current trends. Adaptable Software Engineer ready to support operations from conception through post-release support. Skilled creator of efficient code and exciting user experiences.`
  },
  skills: [
    { name: 'Flutter', category: 'Mobile', icon: '📱' },
    { name: '.NET / ASP.NET Core', category: 'Backend', icon: '⚙️' },
    { name: 'PHP', category: 'Backend', icon: '🐘' },
    { name: 'Node.js & JavaScript', category: 'Full Stack', icon: '🟢' },
    { name: 'Angular', category: 'Frontend', icon: '🅰️' },
    { name: 'React.js', category: 'Frontend', icon: '⚛️' },
    { name: 'MySQL / SSMS / PostgreSQL', category: 'Database', icon: '🗄️' },
    { name: 'MongoDB', category: 'Database', icon: '🍃' },
    { name: 'IIS & Linux Server', category: 'DevOps', icon: '🖥️' },
    { name:'Apache Server', category: 'DevOps', icon: '🪶' },

    { name: 'AWS / Firebase / Docker', category: 'Cloud', icon: '☁️' },
    { name: 'NgRx', category: 'State Management', icon: '🔄' },
    { name: 'Bloc', category: 'State Management', icon: '🔄' },
    { name: 'Redux', category: 'State Management', icon: '🔄' },

    { name: 'OOPs Concepts', category: 'Programming', icon: '💻' },
    { name: 'CQRS Architecture', category: 'Programming', icon: '🔀' },
    { name: 'MVC Architecture', category: 'Programming', icon: '🧱' },


    { name: 'Postman & Swagger', category: 'Tools', icon: '🔧' },
    { name: 'Full Stack Development', category: 'General', icon: '🚀' }
  ],
  experience: [
    {
      company: 'Nexa OfficeInfosytems',
      position: 'Software Engineer',
      period: '2024 - Present',
      location: 'Chennai, India',
      responsibilities: [
        'Developing and maintaining software applications',
        'Collaborating with cross-functional teams',
        'Implementing best practices and coding standards'
      ]
    },
    {
      company: 'FCGSS Global Software Services',
      position: 'Software Engineer',
      period: '2023 - 2024',
      location: 'Chennai, India',
      responsibilities: [
        'Developed .NET applications using C#, ASP.NET, HTML, and JavaScript',
        'Configured IIS server to host web applications',
        'Integrated web services with the application using WCF and Web API',
        'Utilized object-oriented programming principles for developing high quality software components',
        'Provided technical support to other developers on the team during development process'
      ]
    }
  ],
  projects: [
    {
      title: 'Cinematic App',
      description: 'A comprehensive online streaming platform similar to Netflix, offering a wide range of movies and TV shows on-demand.',
      features: [
        'User authentication and personalized profiles',
        'Content upload, sell, and buy functionality',
        'Payment gateway integration for subscriptions and purchases',
        'MongoDB database for data storage',
        'Responsive front-end with React.js, HTML, CSS, and JavaScript'
      ],
      technologies: ['Flutter', 'Node.js', 'MongoDB', 'Payment Gateway', 'JavaScript', 'jQuery'],
      image: '🎬'
    }
  ],
  activeSection: 'home',
  loading: false,
  error: null
};

export const portfolioReducer = createReducer(
  initialState,
  on(PortfolioActions.loadPortfolio, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(PortfolioActions.loadPortfolioSuccess, (state, { data }) => ({
    ...state,
    ...data,
    loading: false,
    error: null
  })),
  on(PortfolioActions.loadPortfolioFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(PortfolioActions.setActiveSection, (state, { section }) => ({
    ...state,
    activeSection: section
  }))
);

