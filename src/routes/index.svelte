<script context='module' lang='ts'>
  export async function load({fetch}) {
    const drink: any = await(await fetch('index.json')).json();
    console.log(drink);
  }

</script>

<script lang='ts'>
  export let drinkProp;

  let drinkState = drinkProp;

  const handleOnClick = async() => console.log('Click');
</script>

<div class="wrapper">
  <button on:click={handleOnClick}>Get new drink</button>
  <h2>Drink Name</h2>
  <img src="/" alt="drink-thumb" class="drink-thumb">
  <p>Instructions</p>


  <p>Ingredients</p>
</div>

<style>
  .wrapper {
    display : flex;
    flex-direction: column;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
  }

  .drink-thumb {
    width: 300px;
    border-radius: 1rem;
  }

  p {
    max-width: 500px;
    text-align: center;
  }

  .ingredient {
    margin: 2px 0;
  }
</style>