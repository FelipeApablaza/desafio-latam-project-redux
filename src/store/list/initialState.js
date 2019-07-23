const defaultList =
  [
    { supername: 'Wolverine', realname: 'Logan', gender: 'Male', powers: 'Healing Factor', comic: 'X-Men', hide: false },
    { supername: 'Spiderman', realname: 'Peter Parker', gender: 'Male', powers: 'Spider Sense', comic: 'Spiderman', hide: false },
    { supername: 'Scarlet Witch', realname: 'Wanda Maximoff', gender: 'Female', powers: 'Mind Control', comic: 'Avengers', hide: false },
    { supername: 'Hulk', realname: 'Bruce Banner', gender: 'Male', powers: 'Superhuman Strength', comic: 'The Incredible Hulk', hide: false },
    { supername: 'Storm', realname: 'Ororo Monroe', gender: 'Female', powers: 'Weather Control', comic: 'X-Men', hide: false }
  ]


export const initialState = {
  superHeroesList: defaultList,
  heroToEdit: { hero: { supername: 'Wolverine', realname: 'Logan', gender: 'Male', powers: 'Healing Factor', comic: 'X-Men', hide: false }, index: 0 },
  editOn: false,
};