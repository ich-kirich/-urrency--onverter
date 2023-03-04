import { Box } from "@mui/material";
import React, { useEffect, useRef } from "react";
import styles from "./ModalComponent.module.scss";

function ModalComponent(props: {
  children: React.ReactNode;
  visible: boolean;
  setVisible: Function;
}) {
  const { children, visible, setVisible } = props;
  const rootClasses = [styles.modal__invisible];
  const box = useRef<HTMLDivElement>(null);

  if (visible) {
    rootClasses.push(styles.modal__visible);
  }

  useEffect(() => {
    const onClick = (e: MouseEvent) =>
      box.current?.contains(e?.target as Node) || setVisible(false);
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <Box className={rootClasses.join(" ")}>
      <Box className={styles.modal__content} ref={box}>
        {children}
      </Box>
    </Box>
  );
}

export default ModalComponent;
