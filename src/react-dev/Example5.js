const Profile = () => {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
};

const Gallery = () => {
  return (
    <>
      <div>
        <h1>Amazing scientists</h1>
        <Profile />
        <Profile />
        <Profile />
      </div>
      <section>
        <h1>Amazing scientists</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>
    </>
  );
};

export default Gallery;
