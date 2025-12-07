import style from "./CalculatorButton.module.scss";

export const CalculatorButton = ({
  text,
  isScroll,
}: {
  text: string;
  isScroll?: boolean;
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
    >
      {text}
    </button>
  );
};
