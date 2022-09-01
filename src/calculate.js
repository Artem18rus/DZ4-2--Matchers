// eslint-disable-next-line consistent-return

export default function totalTwo(incoming) {
  return incoming.sort((a, b) => b.health - a.health);
}
