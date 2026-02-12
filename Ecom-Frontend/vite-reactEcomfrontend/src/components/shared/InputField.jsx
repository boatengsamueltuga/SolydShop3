const InputField = ({
  label,
  id,
  type = "text",
  errors,
  register,
  required,
  message,
  className,
  min,
  value,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {/* Label */}
      <label
        htmlFor={id}
        className="font-semibold text-sm text-slate-800"
      >
        {label}
      </label>

      {/* Input */}
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        defaultValue={value}
        className={`px-2 py-2 border outline-none bg-transparent 
          text-slate-800 font-semibold rounded-md
          ${errors[id]?.message ? "border-red-500" : "border-slate-700"}
          ${className || ""}
        `}
        {...register(id, {
          required: { value: required, message },
          minLength: min
            ? { value: min, message: `Minimum ${min} character is required` }
            : null,
          pattern:
            type === "email"
              ? {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.com$/,
                  message: "Invalid email",
                }
              : type === "url"
              ? {
                  value:
                    /^(https:\/\/)(www\.)?[a-zA-Z0-9\u00a1-\uffff\-._~%!$&'()*+,;=]+(\.[a-zA-Z0-9\u00a1-\uffff\-._~%!$&'()*+,;=]+)+([/?#][^\s]*)?$/,
                  message: "Please enter a valid url",
                }
              : null,
        })}
      />

      {/* Error */}
      {errors[id]?.message && (
        <p className="text-sm font-semibold text-red-600">
          {errors[id]?.message}
        </p>
      )}
    </div>
  );
};

export default InputField;
