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
      title: 'Task Management Application',
      description: 'A Jira-style task management platform for creating projects, planning sprints, tracking worklogs, and managing role-based access across teams.',
      features: [
        'Project, task, and sprint creation with board-based workflow management',
        'Worklog tracking to record daily progress and time spent on tasks',
        'Employer permission management for specific access control and responsibilities',
        'Responsive admin experience for managing delivery and collaboration'
      ],
      technologies: ['Angular', 'ASP.NET', 'MySQL', 'SSMS', 'Kendo UI'],
      image: 'PM',
      imageUrl: 'https://images.pexels.com/photos/6804091/pexels-photo-6804091.jpeg?cs=srgb&dl=pexels-cottonbro-6804091.jpg&fm=jpg',
      imageAlt: 'Kanban-style project planning board with sticky notes'
    },
    {
      title: 'Job Portal Application',
      description: 'A blue-collar hiring platform where candidates can create profiles, browse jobs, and apply, while employers can publish openings and shortlist applicants.',
      features: [
        'Candidate and employer account creation with dedicated onboarding flows',
        'Job search, application tracking, and candidate shortlisting',
        'Employer-side posting and selection workflows for recruitment',
        'Payment integration for premium or paid recruitment functionality'
      ],
      technologies: ['Angular', 'NgRx', 'Redux', '.NET Core', 'MySQL', 'SSMS', 'jQuery', 'Payment Integration'],
      image: 'JP',
      imageUrl: 'https://images.pexels.com/photos/8636626/pexels-photo-8636626.jpeg?cs=srgb&dl=pexels-kampus-8636626.jpg&fm=jpg',
      imageAlt: 'Recruiters reviewing candidates during an online job interview'
    },
    {
      title: 'Ecommerce Website',
      description: 'A full ecommerce platform with separate admin and user portals for catalog management, inventory control, ordering, and customer purchases.',
      features: [
        'Admin modules for products, brands, categories, pricing, purchase orders, and inventory',
        'User portal with product search, filtering, cart, and checkout-related flows',
        'Address management for billing and shipping details',
        'End-to-end catalog and order operations for day-to-day ecommerce management'
      ],
      technologies: ['Angular', 'NgRx', 'Redux', 'PHP', 'CodeIgniter', 'phpMyAdmin', 'XAMPP'],
      image: 'EC',
      imageUrl: 'https://images.pexels.com/photos/5156696/pexels-photo-5156696.jpeg?cs=srgb&dl=pexels-maorattias-5156696.jpg&fm=jpg',
      imageAlt: 'Warehouse shelves representing ecommerce inventory and order operations'
    },
    {
      title: 'Document Management System',
      description: 'A secure organizational document platform with OneDrive-like functionality for storing, organizing, and controlling access to business files.',
      features: [
        'Upload and manage documents, photos, videos, and spreadsheet files',
        'Folder-based organization for internal team collaboration',
        'Granular security controls for specific files and folders',
        'Enterprise-oriented access control for protected organizational content'
      ],
      technologies: ['Angular', 'NgRx', 'Redux', '.NET Core', 'CQRS', 'SSMS', 'MySQL'],
      image: 'DM',
      imageUrl: 'https://images.pexels.com/photos/8970653/pexels-photo-8970653.jpeg?cs=srgb&dl=pexels-leeloothefirst-8970653.jpg&fm=jpg',
      imageAlt: 'Documents and laptop workspace representing secure file management'
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
