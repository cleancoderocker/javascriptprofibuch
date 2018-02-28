<template>
  <div class="users">
    <ul>
        <li v-for="user in users">
            {{ user.firstName }}
            {{ user.lastName }}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Users',
  data() {
    return {
        users: [
            {
                firstName: 'Max',
                lastName: 'Mustermann'
            },
            {
                firstName: 'Moritz',
                lastName: 'Mustermann'
            },
            {
                firstName: 'Peter',
                lastName: 'Mustermann'
            },
            {
                firstName: 'Petra',
                lastName: 'Mustermann'
            }
        ]
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
