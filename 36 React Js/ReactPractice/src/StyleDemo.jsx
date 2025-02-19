function StyleDemo() {
  let greet = "";
  const customStyle = {
    color: "",
  };

  const hour = new Date(2019, 1, 1, 21).getHours();

  if (hour >= 0 && hour <= 12) {
    greet = "Good Morning";
    customStyle.color = "red";
  } else if (hour > 12 && hour <= 18) {
    greet = "Good afternoon";
    customStyle.color = "green";
  } else {
    greet = "Good Evening";
    customStyle.color = "blue";
  }

  return (
    <>
      <h1 className="heading" style={customStyle}>
        {greet}
      </h1>
    </>
  );
}

export default StyleDemo;
