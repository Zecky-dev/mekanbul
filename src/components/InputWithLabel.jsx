import React from "react";
const InputWithLabel = ({
  id,
  label,
  value,
  type,
  onInputChange,
  isFocused,
}) => {
  const inputRef = React.useRef();
  React.useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);
  return (

    <div className="container">
      <div className="row" style={{marginBottom: '8px'}}>
        <div className="col-lg-12">
          <div className="col-lg-1">
            <label htmlFor={id}>{label}</label>&nbsp;
          </div>
          <div className="col-lg-11">
            <div className="form-group">
              <input
                id={id}
                type={type}
                value={value}
                onChange={onInputChange}
                ref={inputRef}
                className={type === "checkbox" ? "form-check-input col-lg-10" : "form-control col-lg-10"}
              />
            </div>
          </div>
        </div>





      </div>
    </div>


  );
};
export default InputWithLabel;