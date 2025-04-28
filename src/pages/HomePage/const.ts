import { Technology } from '../../models/models';

export const technologies: Technology[] = [
  {
    title: 'HTML',
    description:
      'HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content.',
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    title: 'CSS',
    description:
      'Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML.',
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    title: 'JavaScript',
    description:
      'JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions.',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    title: 'React',
    description: 'The library for web and native user interfaces.',
    link: 'https://react.dev/',
  },
  {
    title: 'Redux',
    description: 'A JS library for predictable and maintainable global state management.',
    link: 'https://redux.js.org/',
  },
  {
    title: 'Jest',
    description: 'Jest is a delightful JavaScript Testing Framework with a focus on simplicity.',
    link: 'https://jestjs.io/',
  },
  {
    title: 'Webpack',
    description:
      'Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming.',
    link: 'https://webpack.js.org/',
  },
  {
    title: 'Gulp',
    description:
      'Leverage gulp and the flexibility of JavaScript to automate slow, repetitive workflows and compose them into efficient build pipelines.',
    link: 'https://gulpjs.com/',
  },
];
