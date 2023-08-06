const Button1 = () => {
  const handleClick = () => alert("You clicked me!");
  return <button onClick={handleClick}>Click me</button>;
};

const AlertButton = ({ message, children }) => {
  return <button onClick={() => alert(message)}>{children}</button>;
};

const Toolbar = () => {
  return (
    <div>
      <AlertButton message="Playing!">Play Movie</AlertButton>
      <AlertButton message="Uploading!">Upload Image</AlertButton>
    </div>
  );
};

const Button2 = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

const PlayButton = ({ movieName }) => {
  const handlePlayClick = () => alert(`Playing ${movieName}!`);
  return <Button2 onClick={handlePlayClick}>Play "{movieName}"</Button2>;
};

const UploadButton = () => {
  return <Button2 onClick={() => alert("Uploading!")}>Upload Image</Button2>;
};

const Toolbar2 = () => {
  return (
    <div>
      <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton />
    </div>
  );
};

const Button3 = ({ onClick, children }) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
};

const Toolbar3 = () => {
  return (
    <div
      className="Toolbar3"
      onClick={() => {
        alert("You clicked on the toolbar!");
      }}
    >
      <Button3 onClick={() => alert("Playing!")}>Play Movie</Button3>
      <Button3 onClick={() => alert("Uploading!")}>Upload Image</Button3>
    </div>
  );
};

const Signup = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Submitting!");
      }}
    >
      <input />
      <button>Send</button>
    </form>
  );
};

export { Button1, Toolbar, Toolbar2, Toolbar3, Signup };
