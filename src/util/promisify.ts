export default async function promisify(stallTime = 1000) {
  await new Promise(resolve => setTimeout(resolve, stallTime));
}
