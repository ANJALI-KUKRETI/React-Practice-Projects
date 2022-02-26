import React from "react";

import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg",
    address: "Some address",
    description: "This is s first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg",
    address: "Some address second",
    description: "This is s second meetup!",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }
export function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  };
}
export default HomePage;
