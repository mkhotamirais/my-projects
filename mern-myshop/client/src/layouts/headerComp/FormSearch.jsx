import { BsSearch } from "react-icons/bs";
import Button from "../../components/Button";

const FormSearch = () => {
  return (
    <form className="flex items-center ml-3">
      <input
        type="text"
        className="border p-[0.4rem] leading-none rounded-md rounded-r-none focus:outline-none text-md"
      />
      <Button className="p-2.5 rounded-md rounded-l-none -translate-x-1">
        <BsSearch className="text-md" />
      </Button>
    </form>
  );
};

export default FormSearch;
