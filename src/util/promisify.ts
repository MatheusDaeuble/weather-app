export default async function promisify() {
  await new Promise(resolve => setTimeout(resolve, 1000));
}
