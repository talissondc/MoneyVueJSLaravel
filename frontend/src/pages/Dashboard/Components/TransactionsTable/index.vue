<template>
  <div :class="$style.container">
    <table>
      <thead>
        <tr>
          <th>Titulo</th>
          <th>Preço</th>
          <th>Categoria</th>
          <th>Data</th>
        </tr>  
      </thead>
      <tbody>
        <tr>
          <td>Desenvolvimento Web</td>
          <td :class="$style.deposit">R$ 6.000,00</td>
          <td>Venda</td>
          <td>04/02/2022</td>
        </tr>
        <tr>
          <td>Alguel</td>
          <td :class="$style.witdraw">R$ 600,00</td>
          <td>casa</td>
          <td>04/02/2022</td>
        </tr>  
      </tbody>    
    </table>  
  </div>  
</template>

<style module lang="scss">
  @import './styles.scss';
</style>