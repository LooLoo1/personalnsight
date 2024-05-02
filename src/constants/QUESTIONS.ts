import { QuestionsSchema } from "./types";

export const QUESTIONS: QuestionsSchema = [
  {
    id: 1,
    title: "Select your gender:",
    defaultNext: 2,
    type: "question",
    choices: [
      { text: "Female", nextQuestionId: 2, value: "Female" },
      { text: "Male", nextQuestionId: 2, value: "Male" },
    ],
    responseKey: "Gender",
  },

  {
    id: 2,
    title:
      "So we can get to know you better, tell us about your relationship status.",
    defaultNext: 3,
    type: "question",
    choices: [
      { text: "Single", nextQuestionId: 3, value: "Single" },
      {
        text: "In a relationship",
        nextQuestionId: 11,
        value: "In a relationship",
      },
    ],
    responseKey: "Relationship_status",
  },

  {
    id: 11,
    title: "Are you a parent?",
    defaultNext: 12,
    type: "question",
    choices: [
      {
        text: "Yes",
        nextQuestionId: 12,
        value: "Yes",
        template: "who have children",
      },
      {
        text: "No",
        nextQuestionId: 12,
        value: "No",
        template: "",
      },
    ],
    responseKey: "Are_you_a_parent",
  },

  {
    id: 12,
    title:
      "Single {Gender}{Are_you_a_parent}need a slightly different approach to find their perfect partner. But first, how did you feel in your last relationship?",
    defaultNext: 13,
    type: "question",
    choices: [
      {
        text: "I was unhappy with low things were going in my relationship",
        nextQuestionId: 13,
        value: "I was unhappy with low things were going in my relationship",
      },
      {
        text: "I was unhappy with parts of my relationship, but some thing were working",
        nextQuestionId: 13,
        value:
          "I was unhappy with parts of my relationship, but some thing were working",
      },
      {
        text: "I was generally happy with my relationship",
        nextQuestionId: 13,
        value: "I was generally happy with my relationship",
      },
      {
        text: "I’ve never been in a relationship",
        nextQuestionId: 13,
        value: "I’ve never been in a relationship",
      },
    ],
    responseKey: "How_did_you_feel_in_your_last_relationship",
  },

  {
    id: 13,
    title: "Is your partner an introvert or extrovert?",
    defaultNext: 14,
    type: "question",
    choices: [
      { text: "Introvert", nextQuestionId: 14, value: "Introvert" },
      { text: "Extrovert", nextQuestionId: 14, value: "Extrovert" },
      { text: "A bit of both", nextQuestionId: 14, value: "A bit of both" },
    ],
    responseKey: "Introvert_or_Extrovert",
  },

  {
    id: 14,
    title: "What is your partner’s gender?",
    defaultNext: 15,
    type: "question",
    choices: [
      { text: "Male", nextQuestionId: 15, value: "Male" },
      { text: "Female", nextQuestionId: 15, value: "Female" },
    ],
    responseKey: "Partner_gender",
  },

  {
    id: 15,
    title: "Do you agree with the statement below?",
    description: "“My partner and I make sex a priority in our relationship”",
    defaultNext: 16,
    type: "question",
    choices: [
      { text: "Strongly agree", nextQuestionId: 16, value: "Strongly agree" },
      { text: "Agree", nextQuestionId: 16, value: "Agree" },
      { text: "Neutral", nextQuestionId: 16, value: "Neutral" },
      { text: "Disagee", nextQuestionId: 16, value: "Disagee" },
      {
        text: "Strongly disagree",
        nextQuestionId: 16,
        value: "Strongly disagree",
      },
    ],
    responseKey: "Do_you_agree_with_the_statement",
  },

  {
    id: 16,
    title: "When you think about your relationship goals, you feel...?",
    defaultNext: 8,
    type: "question",
    choices: [
      {
        text: "Optimistic! They are totally doable, with some guidance.",
        nextQuestionId: 8,
        value: "Optimistic! They are totally doable, with some guidance.",
      },
      {
        text: "Cautious. I’ve struggled before, but I’m hopeful.",
        nextQuestionId: 8,
        value: "Cautious. I’ve struggled before, but I’m hopeful.",
      },
      {
        text: "I’m feeling a little anxious, honestly.",
        nextQuestionId: 8,
        value: "I’m feeling a little anxious, honestly.",
      },
    ],
    responseKey: "When_you_think_about_your_relationship_goals",
  },

  {
    id: 3,
    title: "Are you a single parent?",
    defaultNext: 4,
    type: "question",
    choices: [
      {
        text: "Yes",
        nextQuestionId: 4,
        value: "Yes",
        template: "who have children",
      },
      {
        text: "No",
        nextQuestionId: 4,
        value: "No",
        template: "",
      },
    ],
    responseKey: "Single_parent",
  },

  {
    id: 4,
    title:
      "{Gender}{Single_parent}need a slightly different approach to improve their relationship. Which statement best describes you?",
    defaultNext: 5,
    type: "question",
    choices: [
      {
        text: "I’m very unhappy with how things are going in my relationship",
        nextQuestionId: 5,
        value: "I’m very unhappy with how things are going in my relationship",
      },
      {
        text: "I’m unhappy with parts of my relationship, but some things are working well",
        nextQuestionId: 5,
        value:
          "I’m unhappy with parts of my relationship, but some things are working well",
      },
      {
        text: "I’m generally happy in my relationship",
        nextQuestionId: 5,
        value: "I’m generally happy in my relationship",
      },
    ],
    responseKey: "Relationship_appeal",
  },

  {
    id: 5,
    title: "Do you tend to overthink?",
    defaultNext: 6,
    type: "question",
    choices: [
      { text: "Yes", nextQuestionId: 6, value: "Yes" },
      {
        text: "No",
        nextQuestionId: 6,
        value: "No",
      },
    ],
    responseKey: "Overthink",
  },

  {
    id: 6,
    defaultNext: 7,
    type: "alert",
    structure: [
      {
        type: "Title",
        text: "So how does it work?",
      },
      {
        type: "Description",
        text: "We analyze hundreds of data points to create your unique astrological blueprint. This is combined with AI to tailor-make your astrological insights, based on your answers. We’re going to change your relationship with astrology.",
      },
      {
        type: "Button",
        text: "Next",
        responseKey: "Overthink",
        choices: [
          { text: "Yes", nextQuestionId: 7, value: "Yes" },
          {
            text: "No",
            nextQuestionId: 10,
            value: "No",
          },
        ],
      },
    ],
  },
  {
    id: 10,
    title: "Is emotional control tricky for you?",
    defaultNext: 8,
    type: "question",
    choices: [
      { text: "Yes", nextQuestionId: 8, value: "Yes" },
      { text: "Sometimes", nextQuestionId: 8, value: "Sometimes" },
      { text: "Rarely", nextQuestionId: 8, value: "Rarely" },
      { text: "Not at all", nextQuestionId: 8, value: "Not at all" },
    ],
    responseKey: "What_is_most_important",
  },

  {
    id: 7,
    title: "What is most important to you?",
    defaultNext: 8,
    type: "question",
    choices: [
      { text: "Success", nextQuestionId: 8, value: "Success" },
      { text: "Romance", nextQuestionId: 8, value: "Romance" },
      { text: "Stability", nextQuestionId: 8, value: "Stability" },
      { text: "Freedom", nextQuestionId: 8, value: "Freedom" },
    ],
    responseKey: "What_is_most_important",
  },

  {
    id: 8,
    title: "Where did you hear about us?",
    defaultNext: 9,
    type: "question",
    choices: [
      {
        text: "Poster or Billboard",
        nextQuestionId: 9,
        value: "Poster or Billboard",
      },
      {
        text: "Friend or Family",
        nextQuestionId: 9,
        value: "Friend or Family",
      },
      { text: "Instagram", nextQuestionId: 9, value: "Instagram" },
      {
        text: "Direct Mail or Package Insert",
        nextQuestionId: 9,
        value: "Direct Mail or Package Insert",
      },
      {
        text: "Online TV or Streaming TV",
        nextQuestionId: 9,
        value: "Online TV or Streaming TV",
      },
      { text: "TV", nextQuestionId: 9, value: "TV" },
      { text: "Radio", nextQuestionId: 9, value: "Radio" },
      {
        text: "Search Engine (Google, Bing, etc.)",
        nextQuestionId: 9,
        value: "Search Engine (Google, Bing, etc.)",
      },
      {
        text: "Newspaper or Magazine",
        nextQuestionId: 9,
        value: "Newspaper or Magazine",
      },
      { text: "Facebook", nextQuestionId: 9, value: "Facebook" },
      {
        text: "Blog Post or Website Review",
        nextQuestionId: 9,
        value: "Blog Post or Website Review",
      },
      { text: "Podcast", nextQuestionId: 9, value: "Podcast" },
      { text: "Influencer", nextQuestionId: 9, value: "Influencer" },
      { text: "Youtube", nextQuestionId: 9, value: "Youtube" },
      { text: "Pinterest", nextQuestionId: 9, value: "Pinterest" },
      { text: "Other", nextQuestionId: 9, value: "Other" },
    ],
    responseKey: "Where_did_you_hear_about_us",
  },

  {
    id: 9,
    type: "alert",
    structure: [
      {
        type: "Title",
        text: "Thank you for your participation!",
      },
      {
        type: "Description",
        text: "Thank you very much for taking the time to fill out this form. Your answers are important to us and will help us improve our service. Thank you for being with us!",
      },
      {
        type: "Button",
        text: "Back to main",
        link: "/",
      },
    ],
  },
];
