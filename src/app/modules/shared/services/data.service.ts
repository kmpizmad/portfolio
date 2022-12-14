import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  constructor() {}

  public get() {
    return {
      projects: [
        {
          title: '',
          description: '',
          links: {
            production: '',
            homepage: '',
            npmjs: '',
          },
          imageUrl: '',
        },
      ],
      resume: {
        education: [
          {
            title: 'Software Engineer 54 213 05',
            type: 'Advanced Vocational Qualification',
            at: 'RUANDER Oktatási Kft.',
            from: '03/2021',
            to: '05/2022',
            description: '',
          },
          {
            title: 'Software Engineer',
            type: "Bachelor's Degree",
            at: 'Eötvös Loránd University',
            from: '09/2021',
            to: '05/2022',
            description:
              "Haven't completed it due to difficulties with remote education",
          },
          {
            title: 'Computer Science Engineer',
            type: "Bachelor's Degree",
            at: 'Óbuda University',
            from: '09/2017',
            to: '05/2021',
            description:
              "Haven't completed it due to difficulties with physics and math",
          },
        ],
        certificates: [
          {
            name: 'Docker Crash Course',
            course: '',
            link: '',
            completed: '08/2022',
          },
          {
            name: 'REST APIs with Flask and Python',
            course: 'https://www.udemy.com/course/rest-api-flask-and-python/',
            link: 'https://drive.google.com/file/d/1mqQlRGLsrvFPiT-ybomAjTG_Sn0HW84v/view?usp=sharing',
            completed: '07/2022',
          },
          {
            name: 'The Complete Web Development Bootcamp',
            course:
              'https://www.udemy.com/course/the-complete-web-development-bootcamp/',
            link: 'https://drive.google.com/file/d/1FaiiMMSvszlADB7s-dKDkmMCPds8Cr-X/view?usp=sharing',
            completed: '08/2020',
          },
        ],
        techstack: {
          JavaScript: 5,
          TypeScript: 5,
          'Angular2+': 4,
          CSS: 5,
          SCSS: 4,
          'Node.js': 4,
          Git: 4,
          React: 3,
          'Next.js': 3,
          Python: 3,
          Flask: 3,
          'CI/CD': 3,
        },
        experience: [
          {
            title: 'Frontend Developer',
            company: 'Magyar Közút Nonprofit Zrt.',
            from: '03/2018',
            to: '',
            current: true,
            tasks: [
              'Creation and maintenance of https://internet.kozut.hu/',
              'Maintenance of https://karrier.kozut.hu',
              'Creation of internal libraries',
              'Creation of internal web applications',
            ],
          },
        ],
        languages: {
          Hungarian: 'Native',
          English: 'Advanced',
        },
        socials: {
          StackOverflow: '',
          GitHub: '',
          LinkedIn: '',
        },
        info: {
          name: 'Nagy Viktor',
          qualification: 'Software Engineer',
          location: 'Budapest, Hungary',
          email: 'nagy.viktor392@gmail.com',
          imageUrl: '',
        },
      },
    };
  }
}
