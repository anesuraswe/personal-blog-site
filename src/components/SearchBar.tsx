
import { Input, InputGroup } from "@chakra-ui/react";
import { Search } from "lucide-react";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const SearchBar = ({
  searchTerm,
  onSearchChange,
}: SearchBarProps) => {
  return (
    <InputGroup
      startElement={<Search size={18} color="#666666" />}
    >
      <Input
        placeholder="Search articles..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        bg="white"
        borderColor="gray.300"
        borderRadius="full"
        color="#111111"
        _focus={{
          borderColor: "#FACC15",
          boxShadow: "0 0 0 1px #FACC15",
        }}
      />
    </InputGroup>
  );
};

export default SearchBar;
