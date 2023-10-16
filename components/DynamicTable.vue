<!-- Lesson 4 Task 3: Using v-for, create a table where the number of 
    rows and columns is set dynamically via input or another control. -->
<template lang="">
  <div>
    <label for="rowCount">Row number: </label>
    <input type="number" id="rowCount" v-model="rowCount" @input="generateTable" />

    <label for="colCount">Columns number: </label>
    <input type="number" id="colCount" v-model="colCount" @input="generateTable" />

    <table>
      <tr v-for="row in tableData" :key="row.id">
        <td v-for="cell in row.cells" :key="cell.id">{{ cell.text }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rowCount: 0,
      colCount: 0,
      tableData: [],
    };
  },
  methods: {
    generateTable() {
      this.tableData = [];
      
      for (let i = 0; i < this.rowCount; i++) {
        const row = { id: i, cells: [] };

        for (let j = 0; j < this.colCount; j++) {
          const cell = { id: j, text: `Row ${i + 1}, Col ${j + 1}` };
          row.cells.push(cell);
        }

        this.tableData.push(row);
      }
    },
  },
};
</script>
