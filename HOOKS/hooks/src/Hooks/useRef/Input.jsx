import React,{forwardRef} from "react";
const Input = forwardRef((props, ref) => {
  const { onKeyDown, placeholder, style } = props;
  return (
    <input
      onKeyDown={onKeyDown}
      ref={ref}
      type="text"
      placeholder={placeholder}
      style={style}
    />
  );
});
export default Input;
