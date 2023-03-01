import { Box } from "@mui/material";
import React, { useEffect, useRef } from "react";
import classes from "./ModalComponent.module.scss";

function ModalComponent(props: {
  children: React.ReactNode;
  visible: boolean;
  setVisible: Function;
}) {
  const { children, visible, setVisible } = props;
  const rootClasses = [classes.myModal];
  if (visible) {
    rootClasses.push(classes.active);
  }
  const box = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onClick = (e: MouseEvent) =>
      box.current?.contains(e?.target as Node) || setVisible(false);
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <Box className={rootClasses.join(" ")}>
      <Box className={classes.myModalContent} ref={box}>
        {children}
      </Box>
    </Box>
  );
}

export default ModalComponent;
