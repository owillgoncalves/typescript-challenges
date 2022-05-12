interface IAddress {
  address: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
}

export default function getFormattedAddress(
  addressesList: IAddress[]
): string[] {
  return addressesList.map(fullAddress => {
    const { address, city, state, country, zipcode } = fullAddress;
    return `${address}, ${city} - ${state}, ${zipcode}, ${country}`;
  });
}