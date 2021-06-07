export interface PlayerI {
  name: String,
  surname: String,
  nickName: String,
  position: String,
  age: Number,
  country: String,
  team: {
    name: String,
    nickName: String,
    place: {
      city: String,
      country: String,
    },
  },
  value: Number,
}
