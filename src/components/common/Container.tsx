type Props = {
  children: React.ReactNode;
  title?: React.ReactNode;
  filter?: React.ReactNode;
};

const Container: React.FC<Props> = ({ children, title, filter }) => {
  return (
    <div className="bg-white p-[0_24px_24px_24px] rounded-lg shadow">
      <div className="flex flex-wrap justify-between items-start sm:items-center py-[30px] sm:flex-row flex-col">
        <h2 className="text-lg font-semibold">{title}</h2>
        {filter}
      </div>
      {children}
    </div>
  );
};
export default Container;
