
import { Button, HStack, Text } from "@chakra-ui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  if (totalPages <= 1) return null;

  return (
    <HStack justify="center" gap={2} wrap="wrap">
      {/* Previous Button */}
      <Button
        variant="outline"
        borderColor="#111111"
        color="#111111"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        _hover={{ bg: "#FACC15" }}
      >
        <ChevronLeft size={18} />
        Previous
      </Button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <Button
            key={page}
            bg={currentPage === page ? "#111111" : "white"}
            color={currentPage === page ? "white" : "#111111"}
            border="1px solid"
            borderColor="#111111"
            onClick={() => onPageChange(page)}
            _hover={{
              bg: "#FACC15",
              color: "#111111",
            }}
          >
            {page}
          </Button>
        )
      )}

      {/* Next Button */}
      <Button
        variant="outline"
        borderColor="#111111"
        color="#111111"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        _hover={{ bg: "#FACC15" }}
      >
        Next
        <ChevronRight size={18} />
      </Button>
    </HStack>
  );
};

export default Pagination;
