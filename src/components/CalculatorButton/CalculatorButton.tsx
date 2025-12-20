import style from "./CalculatorButton.module.scss";

export const CalculatorButton = ({
  text,
  isScroll,
  padding,
  bg,
  width,
  fontSize,
}: {
  text: string;
  isScroll?: boolean;
  padding?: string;
  bg?: string;
  width?: string;
  fontSize?: string
}) => {
  const scrollToCalculator = () => {
    console.log(true);
    const element = document.getElementById("calculator");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={() => isScroll && scrollToCalculator()}
      className={style["main-button"]}
      style={{ padding: padding, backgroundColor: bg && '#a7a746', color: bg && '#ffffff', width: width, fontSize: fontSize}}
    >
      {text}
    </button>
  );
};
