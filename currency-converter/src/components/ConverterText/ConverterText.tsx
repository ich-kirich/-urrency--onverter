import { Typography } from "antd";
import classNames from "classnames";
import { IChildernProps } from "../../types/types";
import styles from "./ConverterText.module.scss";

function ConverterText(props: IChildernProps) {
  const { children, className } = props;
  return (
    <Typography.Text className={classNames(styles.currency__text, className)}>
      {children}
    </Typography.Text>
  );
}

export default ConverterText;
