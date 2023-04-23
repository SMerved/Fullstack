type Person = {
    id: string;
    name: string;
    age: number;
    city: string;
    addresses: Address[];
};
type Address = {
    id: string;
    street: string;
    number: number;
    people: Person[]
}
type Context = {
    people: Person[];
    addresses: Address[];
};
type Args = {
    id: string;
    input: Person | Address;
};
export type { Person, Context, Args, Address };