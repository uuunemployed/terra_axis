import style from "./CalculatorButton.module.scss";

export const CalculatorButton = ({
  text,
  isScroll,
  padding,
  bg,
}: {
  text: string;
  isScroll?: boolean;
  padding?: string;
  bg?: string;
}) => {
  const scrollToCalculator = () => {
    const element = document.getElementById("calculator");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={() => isScroll && scrollToCalculator()}
      className={style["main-button"]}
      style={{ padding: padding, backgroundColor: bg && '#a7a746', color: bg && '#ffffff'}}
    >
      {text}
    </button>
  );
};
