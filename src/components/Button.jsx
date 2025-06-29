export default function Button({ children, variant = "primary", ...props }) {
  const base = "px-4 py-2 rounded text-white font-medium transition duration-300";

  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700",
    secondary: "bg-gray-500 hover:bg-gray-600",
    danger: "bg-red-600 hover:bg-red-700",
  };

  const classes = `${base} ${variants[variant] || variants.primary}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
