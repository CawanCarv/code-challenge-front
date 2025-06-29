export const Button = ({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`py-2 px-4 border border-primary-700 rounded-2xl text-primary-700 uppercase font-semibold ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
