export default function() {
  return [
    {
      id: 1,
      question:
        "How large of a group of people are you comfortable hanging around?",
      content: [
        {
          points: 1,
          img: (src = "https://maxrelax.s3.amazonaws.com/gifs/active.gif"),
          questionText: "11-50"
        },
        {
          points: 2,
          img: (src = "https:https://maxrelax.s3.amazonaws.com/gifs/alone.gif"),
          questionText: "2-10"
        },
        {
          points: 3,
          img: (src = "https:https://maxrelax.s3.amazonaws.com/gifs/alone.gif"),
          questionText: "100+"
        },
        {
          points: 4,
          img: (src = "https:https://maxrelax.s3.amazonaws.com/gifs/alone.gif"),
          questionText: "0"
        }
      ],
      id: 2,
      question: "How would you spend your ideal Saturday?",
      content: [
        {
          points: 1,
          img: (src = "https://maxrelax.s3.amazonaws.com/gifs/active.gif"),
          questionText: "Theme Park"
        },
        {
          points: 2,
          img: (src = "https:https://maxrelax.s3.amazonaws.com/gifs/alone.gif"),
          questionText: "Taking nature photos"
        },
        {
          points: 3,
          img: (src = "https:https://maxrelax.s3.amazonaws.com/gifs/alone.gif"),
          questionText: "Volunteering"
        },
        {
          points: 4,
          img: (src = "https:https://maxrelax.s3.amazonaws.com/gifs/alone.gif"),
          questionText: "Laying on the Beach"
        }
      ]
    }
  ];
}
