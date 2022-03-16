import { Image } from "antd";

const Test = () => {
  return (
    <div>
      <Image
        preview={false}
        width={"10%"}
        height={"10%"}
        placeholder
        src="https://raw.githubusercontent.com/kongsa-0721/IMG/master/img/cat.JPG"
        // fallback="https://raw.githubusercontent.com/kongsa-0721/IMG/master/img/cat.JPG"
      />
    </div>
  );
};

export default Test;
