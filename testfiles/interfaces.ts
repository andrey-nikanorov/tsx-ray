import { Address } from './address';

interface Attendee {
  id: ID;
  person: Person;
  accompaniedBy?: Person;
}

interface Person {
  name: string;
  address: Address;
  phoneNumbers: PhoneNumbers;
}

type ID = string;
type PhoneNumbers = string[];
