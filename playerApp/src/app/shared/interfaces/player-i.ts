export interface PlayerI {
  _id: string,
  name: string,
  surname: string,
  nickName: string,
  position: string,
  age: Number,
  country: string,
  team: {
    name: string,
    nickName: string,
    place: {
      city: string,
      country: string,
    },
  },
  value: Number,
}
