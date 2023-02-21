<div class="grid-container">
    <div class="card">
        <h5>Pending Orders</h5>
        <ul class="fs-2 fw-bold">
            <li>101</li>
            <li>7 838€</li>
        </ul>
    </div>
    <div class="card">
        <h5>Latest orders</h5>
        <ul>
            <li>15/02/2023 (4)</li>
            <li>14/02/2023 (11)</li>
            <li>13/02/2023 (8)</li>
            <li>11/02/2023 (4)</li>
        </ul>
    </div>
    <div class="card">
        <h5>Products</h5>
        <ul>
            <li>New : 4</li>
            <li>Pending : 7</li>
        </ul>
    </div>
    <div class="card">
        <h5>Remaining stocks</h5>
        <ul>
            <li>Rhum a : 4</li>
            <li>Rhum b : 19</li>
            <li>Rhum c : 45</li>
            <li>Rhum d : 124</li>
        </ul>
    </div>
    <div class="card">
        <h5>Lorem</h5>
        <ul>
            <li>Ipsmu</li>
            <li>cillum</li>
            <li>consectetur</li>
            <li>aliquip</li>
        </ul>
    </div>
</div>

<div class="pt-4">
    <h4 class="fw-bold">Notifications</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.</p>
</div>

<style lang="scss">

  .grid-container {
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }

  .card {
    color: white;
    padding: 20px;
    aspect-ratio: 1;
    background: linear-gradient(#2a2a2a, #1a1a1a);
  }

  ul {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    list-style: none;
  }
</style>
