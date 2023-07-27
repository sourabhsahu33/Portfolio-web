import Image1 from "../../assets/tink.jpg"
import Image2 from "../../assets/leetcode.png";
import Image3 from "../../assets/gfg.jpg";
import Image4 from "../../assets/codechef.png";
import Image5 from "../../assets/ninja.png";

export const Data = [
  {
    id: 1,
    image: Image1,
    title: (
      <a
      href="https://auth.geeksforgeeks.org/user/sourabhsahu33/articles"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "black" }} // Add your desired color here
    >
      My Articles
    </a>
    ),
    description:
      "I have written articles on GFG, and so far, I have published 30+ articles on different technologies.",
  },
  {
    id: 2,
    image: Image2,
    title: (
      <a
      href="https://leetcode.com/Sourabhsahu33/"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "black" }} // Add your desired color here
    >
      Leetcode
    </a>
    ),
    description:
      "I have been coding on LeetCode for the past 3 months and have participated in more than 10+ contests and also I got the badge of the month july 2023",
  },
  {
    id: 3,
    image: Image3,
    title: (
      <a
      href="https://auth.geeksforgeeks.org/user/sourabhsahu33/practice"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "black" }} // Add your desired color here
    >
      GeeksforGeeks
    </a>
    ),
    description:
      "I have completed over 200 problems on GeeksforGeeks (GFG) and achieved the good place in my institution's ranking.",
  },
  {
    id: 4,
    image: Image4,
    title: (
      <a
      href="https://www.codechef.com/users/sourabhsahu33"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "black" }} // Add your desired color here
    >
      CodeChef
    </a>
    ),
    description:
      "I have participated in many live contests on CodeChef and I am a 2-star programmer in Java on CodeChef.",
  },
  {
    id: 5,
    image: Image5,
    title: (
      <a
      href="https://www.codingninjas.com/studio/profile/212ad5bd-8230-47c0-b6f6-e6a10d6817ac"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "black" }} // Add your desired color here
    >
      Coding Ninja
    </a>
    ),
    description:
      "I have solved 100+ problems on Coding Ninjas in Java and achieved the good rank in my institution ",
  },
];
