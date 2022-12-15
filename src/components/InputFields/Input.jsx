const Input = (props) => {
    const { inputType, classStyle, data, setData, label } = props;
    return (
        <>
            <label>{label}</label>
            {inputType === "textarea" ? (
                <textarea
                    type="text"
                    placeholder={data}
                    className={classStyle}
                    onChange={(e) => setData(e.target.value)}
                />
            ) : (
                <input
                    type="text"
                    placeholder={data}
                    onChange={(e) => setData(e.target.value)}
                />
            )}
        </>
    );
};

export default Input;
