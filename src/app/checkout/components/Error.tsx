const ErrorText = ({ error }: { error: string | undefined }) => {
  return (
    <>
      {error && (
        <p className="capitalize mt-1 text-red-500 text-sm">{error}*</p>
      )}
    </>
  );
};

export default ErrorText;
