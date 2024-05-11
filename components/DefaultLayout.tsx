import Navbar from "./Navbar";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" bg-white p-0">
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default DefaultLayout;
