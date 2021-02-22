<template>
  <div class="mt-5 pt-5 text-center">
    <h2 class="my-5">Carrito de Compras</h2>
    <b-table
      :items="carrito"
      :fields="fields"
      bordered
      empty-text="Sin Productos en el Carrito"
      hover
      show-empty
      striped
      thead-class="bg-success text-white"
      tfoot-class="bg-success text-white"
    >
      <template #cell(name)="row">
        <span class="text-capitalize">{{ row.item.name }}</span>
      </template>

      <template #cell(precio)="row">
        $ {{ row.item.precio.toLocaleString("de-DE") }}
      </template>

      <template #cell(acciones)="row">
        <b-button
          size="sm"
          @click="eliminar_producto(row.item)"
          class="mr-2 text-danger text-decoration-none"
          variant="link"
        >
          <i class="fas fa-trash-alt"></i>
        </b-button>
      </template>

      <template #custom-foot v-if="totalCarrito">
        <tr>
          <td></td>
          <td class="text-right align-middle"><strong>Total:</strong></td>
          <td class="align-middle">
            <strong>$ {{ totalCarrito }}</strong>
          </td>
          <td>
            <b-button @click="pagar_carrito()" variant="outline-light"
              >Pagar</b-button
            >
          </td>
        </tr>
      </template>
    </b-table>

    <b-row> </b-row>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "Carrito",
  data() {
    return {
      fields: [
        {
          key: "name",
          label: "Pizza",
        },
        {
          key: "cant",
          label: "Cantidad",
        },
        {
          key: "precio",
          label: "Valor",
        },
        {
          key: "acciones",
          label: "Acciones",
        },
      ],
    };
  },
  computed: {
    ...mapState(["carrito"]),
    ...mapGetters(["totalCarrito"]),
  },
  methods: {
    ...mapActions(["eliminar_producto", "pagar_carrito"]),
  },
};
</script>
