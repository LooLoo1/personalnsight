import { QuestionsSchema } from 'types';

export const QUESTIONS: QuestionsSchema[] = [
  {
    id: 1,
    title: 'Select your gender:',
    defaultNext: 2,
    type: 'question',
    choices: [
      {
        text: 'Female',
        value: 'Female',
        template: 'Female',
      },
      { text: 'Male', value: 'Male', template: 'Male' },
    ],
    responseKey: 'Gender',
  },

  {
    id: 2,
    title: 'So we can get to know you better, tell us about your relationship status.',
    defaultNext: 3,
    type: 'question',
    choices: [
      { text: 'Single', value: 'Single' },
      {
        text: 'In a relationship',
        nextQuestionId: 11,
        value: 'In a relationship',
      },
    ],
    responseKey: 'Relationship_status',
  },

  {
    id: 11,
    title: 'Are you a parent?',
    defaultNext: 12,
    type: 'question',
    choices: [
      {
        text: 'Yes',
        value: 'Yes',
        template: 'who have children',
      },
      {
        text: 'No',
        value: 'No',
        template: '',
      },
    ],
    responseKey: 'Are_you_a_parent',
  },

  {
    id: 12,
    title:
      'Single {Gender}{Are_you_a_parent}need a slightly different approach to find their perfect partner. But first, how did you feel in your last relationship?',
    defaultNext: 13,
    type: 'question',
    choices: [
      {
        text: 'I was unhappy with low things were going in my relationship',
        value: 'I was unhappy with low things were going in my relationship',
      },
      {
        text: 'I was unhappy with parts of my relationship, but some thing were working',
        value: 'I was unhappy with parts of my relationship, but some thing were working',
      },
      {
        text: 'I was generally happy with my relationship',
        value: 'I was generally happy with my relationship',
      },
      {
        text: 'I’ve never been in a relationship',
        value: 'I’ve never been in a relationship',
      },
    ],
    responseKey: 'How_did_you_feel_in_your_last_relationship',
  },

  {
    id: 13,
    title: 'Is your partner an introvert or extrovert?',
    defaultNext: 14,
    type: 'question',
    choices: [
      { text: 'Introvert', value: 'Introvert' },
      { text: 'Extrovert', value: 'Extrovert' },
      { text: 'A bit of both', value: 'A bit of both' },
    ],
    responseKey: 'Introvert_or_Extrovert',
  },

  {
    id: 14,
    title: 'What is your partner’s gender?',
    defaultNext: 15,
    type: 'question',
    choices: [
      { text: 'Male', value: 'Male' },
      { text: 'Female', value: 'Female' },
    ],
    responseKey: 'Partner_gender',
  },

  {
    id: 15,
    title: 'Do you agree with the statement below?',
    description: '“My partner and I make sex a priority in our relationship”',
    defaultNext: 16,
    type: 'question',
    choices: [
      { text: 'Strongly agree', value: 'Strongly agree' },
      { text: 'Agree', value: 'Agree' },
      { text: 'Neutral', value: 'Neutral' },
      { text: 'Disagee', value: 'Disagee' },
      {
        text: 'Strongly disagree',

        value: 'Strongly disagree',
      },
    ],
    responseKey: 'Do_you_agree_with_the_statement',
  },

  {
    id: 16,
    title: 'When you think about your relationship goals, you feel...?',
    defaultNext: 8,
    type: 'question',
    choices: [
      {
        text: 'Optimistic! They are totally doable, with some guidance.',
        value: 'Optimistic! They are totally doable, with some guidance.',
      },
      {
        text: 'Cautious. I’ve struggled before, but I’m hopeful.',
        value: 'Cautious. I’ve struggled before, but I’m hopeful.',
      },
      {
        text: 'I’m feeling a little anxious, honestly.',
        value: 'I’m feeling a little anxious, honestly.',
      },
    ],
    responseKey: 'When_you_think_about_your_relationship_goals',
  },

  {
    id: 3,
    title: 'Are you a single parent?',
    defaultNext: 4,
    type: 'question',
    choices: [
      {
        text: 'Yes',
        value: 'Yes',
        template: 'who have children',
      },
      {
        text: 'No',
        value: 'No',
        template: '',
      },
    ],
    responseKey: 'Single_parent',
  },

  {
    id: 4,
    title:
      '{Gender}{Single_parent}need a slightly different approach to improve their relationship. Which statement best describes you?',
    defaultNext: 5,
    type: 'question',
    choices: [
      {
        text: 'I’m very unhappy with how things are going in my relationship',
        value: 'I’m very unhappy with how things are going in my relationship',
      },
      {
        text: 'I’m unhappy with parts of my relationship, but some things are working well',
        value: 'I’m unhappy with parts of my relationship, but some things are working well',
      },
      {
        text: 'I’m generally happy in my relationship',
        value: 'I’m generally happy in my relationship',
      },
    ],
    responseKey: 'Relationship_appeal',
  },

  {
    id: 5,
    title: 'Do you tend to overthink?',
    defaultNext: 6,
    type: 'question',
    choices: [
      { text: 'Yes', value: 'Yes' },
      {
        text: 'No',

        value: 'No',
      },
    ],
    responseKey: 'Overthink',
  },

  {
    id: 6,
    defaultNext: 7,
    type: 'alert',
    responseKey: 'how_does_it_work',
    structure: [
      {
        type: 'Title',
        text: 'So how does it work?',
      },
      {
        type: 'Description',
        text: 'We analyze hundreds of data points to create your unique astrological blueprint. This is combined with AI to tailor-make your astrological insights, based on your answers. We’re going to change your relationship with astrology.',
      },
      {
        type: 'Button',
        text: 'Next',
        nextQuestionId: 7,
      },
    ],
  },
  {
    id: 10,
    title: 'Is emotional control tricky for you?',
    defaultNext: 8,
    type: 'question',
    choices: [
      { text: 'Yes', value: 'Yes' },
      { text: 'Sometimes', value: 'Sometimes' },
      { text: 'Rarely', value: 'Rarely' },
      { text: 'Not at all', value: 'Not at all' },
    ],
    responseKey: 'What_is_most_important',
  },

  {
    id: 7,
    title: 'What is most important to you?',
    defaultNext: 8,
    type: 'question',
    choices: [
      { text: 'Success', value: 'Success' },
      { text: 'Romance', value: 'Romance' },
      { text: 'Stability', value: 'Stability' },
      { text: 'Freedom', value: 'Freedom' },
    ],
    responseKey: 'What_is_most_important',
  },

  {
    id: 8,
    title: 'Where did you hear about us?',
    type: 'question',
    choices: [
      {
        text: 'Poster or Billboard',

        value: 'Poster or Billboard',
      },
      {
        text: 'Friend or Family',

        value: 'Friend or Family',
      },
      { text: 'Instagram', value: 'Instagram' },
      {
        text: 'Direct Mail or Package Insert',

        value: 'Direct Mail or Package Insert',
      },
      {
        text: 'Online TV or Streaming TV',

        value: 'Online TV or Streaming TV',
      },
      { text: 'TV', value: 'TV' },
      { text: 'Radio', value: 'Radio' },
      {
        text: 'Search Engine (Google, Bing, etc.)',

        value: 'Search Engine (Google, Bing, etc.)',
      },
      {
        text: 'Newspaper or Magazine',

        value: 'Newspaper or Magazine',
      },
      { text: 'Facebook', value: 'Facebook' },
      {
        text: 'Blog Post or Website Review',

        value: 'Blog Post or Website Review',
      },
      { text: 'Podcast', value: 'Podcast' },
      { text: 'Influencer', value: 'Influencer' },
      { text: 'Youtube', value: 'Youtube' },
      { text: 'Pinterest', value: 'Pinterest' },
      { text: 'Other', value: 'Other' },
    ],
    responseKey: 'Where_did_you_hear_about_us',
  },
];
