
export async function get(): Promise<{body:any}> {
  const result = await (
    await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  ).json();
  console.log(result);

  return {
    body: result
  }
}