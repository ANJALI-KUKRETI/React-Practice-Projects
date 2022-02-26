import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg"
      title="First Meetup"
      address="Some address"
      description="Holla"
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        image:
          "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg",
        title: "First Meetup",
        address: "Some address",
        description: "Holla",
      },
    },
  };
}

export default MeetupDetails;
