export const Button = ({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`py-2 px-4 flex justify-center items-center w-full disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed rounded-sm text-primary-800 bg-secondary-100 hover:brightness-110 uppercase font-semibold ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
