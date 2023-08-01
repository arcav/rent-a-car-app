import { CarProps } from "@/types";

interface CardDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CardDetailsProps) => {
  return <div>Cardetails</div>;
};

export default CarDetails;
