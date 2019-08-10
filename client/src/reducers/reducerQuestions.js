export default function() {
  return [
    {
      id: 1,
      question:
        "How large of a group of people are you comfortable hanging around?",
      answer: [
        {
          points: 1,
          img: (src = "https://maxrelax.s3.amazonaws.com/gifs/active.gif"),
          answerText: "11-50"
        },
        {
          points: 2,
          img: (src = "https:https://maxrelax.s3.amazonaws.com/gifs/alone.gif"),
          answerText: "2-10"
        },
        {
          points: 3,
          img: (src = "https:https://maxrelax.s3.amazonaws.com/gifs/alone.gif"),
          answerText: "100+"
        },
        {
          points: 4,
          img: (src = "https:https://maxrelax.s3.amazonaws.com/gifs/alone.gif"),
          answerText: "0"
        }
      ],
      id: 2,
      question: "How would you spend your ideal Saturday?",
      answer: [
        {
          points: 1,
          img: (src = "https://maxrelax.s3.amazonaws.com/gifs/active.gif"),
          answerText: "Theme Park"
        },
        {
          points: 2,
          img: (src = "https:https://maxrelax.s3.amazonaws.com/gifs/alone.gif"),
          answerText: "Taking nature photos"
        },
        {
          points: 3,
          img: (src = "https:https://maxrelax.s3.amazonaws.com/gifs/alone.gif"),
          answerText: "Volunteering"
        },
        {
          points: 4,
          img: (src = "https:https://maxrelax.s3.amazonaws.com/gifs/alone.gif"),
          answerText: "Laying on the Beach"
        }
      ]
    }
  ];
}
