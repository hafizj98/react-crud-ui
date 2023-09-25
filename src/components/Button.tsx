interface Props {
  buttonText: string;
}

export const Button = ({buttonText}: Props) => {
  return (
    <>
      <div typeof="button" className="btn btn-primary">
        {buttonText}
      </div>
    </>
  );
};
